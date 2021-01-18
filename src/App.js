import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./Components/Layout";
import Guidelines from "./Routes/Guidelines";
import Coverjs from "./Routes/Projects/Coverjs";
import Homepage from "./Routes/Homepage";
import ScrollToTop from "./Utils/ScrollToTop/ScrollToTop";
import Dashboard from "./Routes/USMobile/Dashboard";

const App = () => {
  return (
    <BrowserRouter basename='/design'>
      <ScrollToTop />
      <Layout>
        <Switch>
          <Route path='/guidelines' component={Guidelines} />
          <Route path='/work/coverjs' component={Coverjs} />
          <Route path='/work/usmobile/dashboard' component={Dashboard} />
          <Route path='/' component={Homepage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
