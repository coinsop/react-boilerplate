import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './components/Home';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" component={Home} />
      <Route component={Home} />
    </Switch>
  </Router>
);

export default App;
