import React from 'react';
import ReactDOM from 'react-dom';


import '../styles/index.scss';
import App from '../components/App';

ReactDOM.hydrate(
  <App initialData={window.__R_DATA.initialData} />,
  document.getElementById('root')
);
