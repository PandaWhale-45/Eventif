import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// Import styles from SASS
import styles from './styles/styles.css';

// Import React Components
import App from './components/App.jsx';

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);
