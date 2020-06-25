import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'antd/dist/antd.css';

import DefaultLayout from './layout/default';

import Home from './pages/home/Home';
import Example from './pages/example/Example';

const AppRouter = () => (
  <Router>
    <div>
      <Route path="/home" exact component={Home} />
      <DefaultLayout path="/" exact component={Home} />
      <DefaultLayout path="/example" component={Example} />
    </div>
  </Router>
);

export default AppRouter;