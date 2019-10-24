import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import HomePage from './pages/HomePage'

import "tabler-react/dist/Tabler.css";
import AgpPage from './pages/AgpPage';

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/agps" component={AgpPage} />
        </Switch>
      </Router>
    </React.StrictMode>
  );
}

export default App;
