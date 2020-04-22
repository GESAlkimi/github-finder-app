import React , { Component, Fragment } from 'react';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search'
import { Alert } from './components/layout/Alert';
import { About } from './components/pages/About';
import User from './components/users/User';
import axios from 'axios';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
    user: {},
  }

  searchUsers = async text => {
    this.setState({loading: true})
    const res = await axios.get(`http://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({users: res.data.items, loading: false})
  }

  clearUsers = () =>  this.setState({users: [], loading: false})

  setAlert = (message, type) => {
    this.setState({alert: {message, type}})
    setTimeout(() => this.setState({alert: null}), 5000)
  }

  getUser = async (username) => {
    this.setState({loading: true})
    console.log(username)
    const res = await axios.get(`http://api.github.com/users/${username}?client_id=${process.env.REACT_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({user: res.data, loading: false})
    console.log(res)
  }


  render() {
    const { users, loading, alert, user } = this.state
    return (
      <Router>
        <div className="App">
          <Navbar title='GitHub Finder' icon='fab fa-github'/>
          <div className='container'>
            <Alert alert={alert}/>
            <Switch>
              <Route exact path="/" render={() => (
                <Fragment>
                  <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={users.length > 0} setAlert={this.setAlert}/>
                  <Users loading={loading} users={users}/>
                </Fragment>
                )} 
              />
              <Route exact path='/about' component={About}/>
              <Route exact path='/user/:login' render={props => (
                <User {...props} getUser={this.getUser} user={user} loading={loading}/>
              )} />
            </Switch>
          </div>
        </div>
      </Router>
      
    );
  }
  
}

export default App;
