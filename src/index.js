import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './reducers';
// import 'semantic-ui-css/semantic.min.css';


ReactDOM.render(
<BrowserRouter>
    <Provider store = { store }>
        <App />
    </Provider>
</BrowserRouter>

, document.getElementById('root'));
registerServiceWorker();
