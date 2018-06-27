import { createStore } from 'redux'

const initialState = {
    username: '',
    email:'',
    activities: [
        {
            user: 'Annie Brzezinski',
            activity: "added John to the project:  CSL Logo Design Proof"
    }
    ],
    projects: [
        {
            projectName: 'Test Project',
            summary: '',
            targetAudience: '',
            dates: '',
            estimateLink: '',
            location: '',
            leads: '',
            tasks: [
                {
                    taskName: 'Making this shit work',
                    completed: false
                },
                {
                    taskName: 'Really hate css',
                    completed: false
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