import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";

import Header from "./Header";
import Navbar from "./Navbar";
import Main from "./pages/Main";
import Mypage from "./pages/Mypage";
import ProductDetail from './pages/ProductDetail';
import Footer from "./Footer";

const App = () => {
  return (
    <div className="container">
      <Router history={history}>
        <Header />
        <Navbar />
        <Switch>
          <div>
            <Route path="/" exact component={Main} />
            <Route path="/mypage" exact component={Mypage} />
            <Route path="/product_detail" component={ProductDetail} />
          </div>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
