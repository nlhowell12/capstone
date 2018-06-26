export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';
export const GET_PROJECTS = 'GET_PROJECTS';
export const POST_PROJECTS = 'POST_PROJECTS';
export const POST_MESSAGES = 'POST_MESSAGES';
export const GET_MESSAGES = 'GET_MESSAGES';
export const LOGOUT = 'LOGOUT'

export const signup = (username, password, email) => {
    return {
        type: SIGNUP,
        username,
        password, 
        email
    }
};

export const login = (email, password) => {
    return {
        type: LOGIN, 
        email,
        password
    }
};

export const logout = () => {
    return {
        type: LOGOUT
    }
}

export const getProjects = () => {
    return {
        type: GET_PROJECTS
    }
};

export const postProjects = (projectName, summary, targetAudience, dates, estimateLink, location, leads, tasks) => {
    return {
        type: POST_PROJECTS,
        projectName,
        summary,
        targetAudience,
        dates, 
        estimateLink,
        location,
        leads,
        tasks
    }   
};

export const postMessages = (user, timestamp, message, target) => {
    return {
        type: POST_MESSAGES,
        user,
        timestamp,
        message,
        target
    }
};

export const getMessages = () => {
    return {
        type: GET_MESSAGES
    }
};

