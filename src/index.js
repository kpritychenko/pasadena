import * as React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';

import App from 'app';

import swReg from './sw-reg';

swReg();

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
