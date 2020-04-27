import React, {useReducer} from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
    GET_REPOS,
    GET_USER,
    SEARCH_USERS,
    SET_ALERT,
    SET_LOADING, 
    CLEAR_USERS, 
    REMOVE_ALERT
} from '../types'


const GithubState = props => {
    const initialState = {
        users: [], 
        user: {},
        repos: [],
        loading: false,
    }
}