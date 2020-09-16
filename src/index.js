import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
 import Main from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Main/>
  </React.StrictMode>,
  document.getElementById('main')
);


serviceWorker.register();
