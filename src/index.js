import React from 'react';
import ReactDOM from 'react-dom';
import './index.tailwind.css';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import 'semantic-ui-react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
   document.getElementById('root'));
registerServiceWorker();
