import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'

const Search = () => {
    const githubContext = useContext(GithubContext)
    const alertContext = useContext(AlertContext)
    const [text, setText] = useState('')
    const {clearUsers, searchUsers} = githubContext;
    const {setAlert} = alertContext;

    const onChange = (e) => setText(e.target.value)
    
    const onSubmit = (e) => {
        e.preventDefault()
        if (text === '') {
            setAlert('Please enter some query', 'light')
        } else {
            searchUsers(text)
        }
    }

    return (
        <div>
            <form className='form' onSubmit={onSubmit}>
                <input type='text' 
                    name='text' 
                    placeholder='Search Users...' 
                    value={text} 
                    onChange={onChange}
                />
                <input type='submit' value='Search' className='btn btn-dark btn-block'/>
            </form>
            { githubContext.users.length > 0 && 
                <button onClick={clearUsers} className='btn btn-light btn-block'>Clear</button>
            }   
        </div>
    )
}

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
}
 

export default Search
