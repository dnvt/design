import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./Components/Layout";
import Guidelines from "./Routes/Guidelines";
import Homepage from "./Routes/Homepage";
import ScrollToTop from "./Utils/ScrollToTop/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Switch>
          <Route path='/guidelines' component={Guidelines}></Route>
          <Route path='/' component={Homepage}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
