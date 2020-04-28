import React , { Fragment } from 'react';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import AlertState from './context/alert/AlertState';
import GithubState from './context/github/GithubState';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search'
import { Alert } from './components/layout/Alert';
import { About } from './components/pages/About';
import User from './components/users/User';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar title='GitHub Finder' icon='fab fa-github'/>
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path="/" render={() => (
                  <Fragment>
                    <Search />
                    <Users />
                  </Fragment>
                  )} 
                />
                <Route exact path='/about' component={About}/>
                <Route exact path='/user/:login' render={props => (
                  <User {...props}/>
                )} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
