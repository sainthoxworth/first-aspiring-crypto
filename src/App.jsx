import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { UserAuth } from './pages/UserAuth';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/userAuth" exact component={UserAuth} />
    </Switch>
  </BrowserRouter>
);

export default App;