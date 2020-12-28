import React from "react";
import { render } from 'react-dom';
import App from "./app";

import { HashRouter as Router } from 'react-router-dom';


render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

module.hot.accept();
