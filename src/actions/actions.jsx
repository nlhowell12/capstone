export const LOGIN = 'LOGIN';
export const GET_PROJECTS = 'GET_PROJECTS';
export const POST_PROJECT = 'POST_PROJECTS';
export const POST_MESSAGES = 'POST_MESSAGES';
export const GET_MESSAGES = 'GET_MESSAGES';
export const LOGOUT = 'LOGOUT';
export const MARK_COMPLETE = 'MARK_COMPLETE';
export const DELETE_TODO = 'DELETE_TODO';
export const ADD_TODO = 'ADD_TODO';

export const login = (username, email) => {
    return {
        type: LOGIN, 
        username,
        email
    }
};

export const logout = () => {
    return {
        type: LOGOUT
    }
}

export const getProjects = (state) => {
    return {
        type: GET_PROJECTS,
        state
    }
};

export const postProject = (newProject) => {
    return {
        type: POST_PROJECT,
        newProject
    }   
};

export const postMessages = (username, timestamp, message, projectName) => {
    return {
        type: POST_MESSAGES,
        username,
        timestamp,
        message,
        projectName
    }
};

export const deleteTodo = () => {
    return {
        type: DELETE_TODO
    }
}

export const markComplete = () => {
    return {
        type: MARK_COMPLETE
    }
}

export const addTodo = (task, projectName) => {
    return {
        type: ADD_TODO,
        task,
        projectName
    }
}

