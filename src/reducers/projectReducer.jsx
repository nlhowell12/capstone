import { createStore } from 'redux'

const initialState = {
    username: '',
    email:'',
    projects: [
        {
            projectName: '',
            summary: '',
            targetAudience: '',
            dates: '',
            estimateLink: '',
            location: '',
            leads: '',
            tasks: [
                {
                    taskName: '',
                    completed: ''
                }
            ],
            channel: {
                messages: [
                    {
                        user: '',
                        timestamp: 0,
                        message: ''
                    }
                ]
            }
        }
    ]
}



const projectReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}

const store = createStore(projectReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;