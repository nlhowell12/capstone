import { createStore } from 'redux'

import { SIGNUP, LOGIN, GET_PROJECTS, POST_PROJECT, POST_MESSAGES, LOGOUT, MARK_COMPLETE, DELETE_TODO } from '../actions'

const initialState = {
    username: '',
    email:'',
    activities: [ ],
    projects: [ ]
}
        



const projectReducer = (state = initialState, action) => {
    switch(action.type) {
        case SIGNUP:
        return {}
        case LOGIN:
        return {}
        case GET_PROJECTS:
        let newState = {
            username: action.state.username,
            email: action.state.email,
            activities: action.state.activities || [],
            projects: action.state.projects || []
        }
        return newState;
        case POST_PROJECT:
        let newProjectState = {
            ...state,
            projects: [...state.projects, action.newProject]
        }
        return newProjectState
        case POST_MESSAGES:
        return {}
        case LOGOUT:
        return {}
        case MARK_COMPLETE:
        return state;
        case DELETE_TODO:
        return {}
        default:
            return state
    }
}

const store = createStore(projectReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;