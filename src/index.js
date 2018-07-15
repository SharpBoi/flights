import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from "react-redux";

import mainStore from "./stores/mainStore";

ReactDOM.render(
    <Provider store={mainStore}>
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
