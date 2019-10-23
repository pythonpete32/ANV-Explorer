import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import HomePage from './pages/HomePage'

import "tabler-react/dist/Tabler.css";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Router>
    </React.StrictMode>
  );
}

export default App;
