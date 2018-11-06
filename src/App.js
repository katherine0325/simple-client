import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './pages/home/Home';
import Example from './pages/example/Example';

const AppRouter = () => (
  <Router>
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/example/" component={Example} />
    </div>
  </Router>
);

export default AppRouter;