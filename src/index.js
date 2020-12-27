import React from "react";
import { render } from 'react-dom';
import App from "./app.jsx";

import { BrowserRouter as Router } from 'react-router-dom';

const rootEl = document.getElementById('root');

render(
  <Router>
    <App />
  </Router>,
  rootEl
);
