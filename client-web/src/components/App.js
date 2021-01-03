import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";

import Header from "./Header";
import Navbar from "./Navbar";
import Main from "./pages/Main";
import MyInfo from "./pages/MyInfo";
import ProductDetail from './pages/ProductDetail';
import Footer from "./Footer";
import SideBar from "./SideBar";

const App = () => {
  return (
    <div className="container-main">

      <div className="container-side-left">
      </div>

      <div className="container-app">
        <Router history={history}>
          <Header />
          <Navbar />
          <Switch>
            <div>
              <Route path="/" exact component={Main} />
              <Route path="/myInfo" exact component={MyInfo} />
              <Route path="/product_detail" component={ProductDetail} />
            </div>
          </Switch>
          <Footer />
        </Router>
      </div>

      <div className="container-side-right">
        <SideBar />
      </div>

    </div>
  );
};

export default App;