import React from 'react';
import { Main } from '@aragon/ui'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import HomePage from './pages/HomePage'

import "tabler-react/dist/Tabler.css";
import AgpPage from './pages/AgpPage';
import VoterPage from './pages/VoterPage';

function App() {
  return (
    <Main>

      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/agps" component={AgpPage} />
          <Route exact path="/voters" component={VoterPage} />
        </Switch>
      </Router>

    </Main>
  );
}

export default App;
