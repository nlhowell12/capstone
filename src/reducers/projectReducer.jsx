import { createStore } from 'redux'

const initialState = {
    username: 'Annie Brzezinski',
    email:'',
    activities: [
        {
            username: 'Annie Brzezinski',
            activity: "added John to the project:  CSL Logo Design Proof"
    }
    ],
    projects: [
        {
            projectName: 'Test Project',
            summary: `I don't know, this shit is a test.`,
            targetAudience: 'Your mom',
            dates: 'time is an illusion',
            estimateLink: 'https://crackwhores.com',
            location: 'here, I suppose',
            leads: `None, we're bad at our job`,
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
                        username: 'Annie Brzezinski',
                        timestamp: 1234253,
                        message: 'This is tons of fun'
                    },
                    {
                        username: 'Nick Howell',
                        timestamp: 123423523,
                        message: 'Right? So much fun.'
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