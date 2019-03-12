import React from 'react';
import ReactDOM from 'react-dom';
import MainLayout from './layouts/MainLayout';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<MainLayout />, document.getElementById('root'));

serviceWorker.unregister();
