import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";

import Header from "./Header";
import Navbar from "./Navbar";

import Main from "./pages/Main";
import MyInfo from "./pages/MyInfo";

import ProductDetail from './pages/ProductDetail';
import PostingPage from './pages/PostingPage';
import Posts from './pages/Posts';
import FilteredPosts from './pages/FilteredPosts'

import Footer from "./Footer";
import SideBar from "./SideBar";
import RenderOnTop from "./RenderOnTop";

const App = () => {
  return (
    <div className="container-app">

      <div className="container not-footer">
        <SideBar />
        <Router history={history}>
          <Header />
          <Navbar />
          <RenderOnTop>
            <Switch>
              <div>
                <Route path="/" exact component={Main} />
                <Route path="/myInfo" exact component={MyInfo} />
                <Route path="/product_detail/:id" exact component={ProductDetail} />
                <Route path="/posting_page" exact component={PostingPage} />
                <Route path="/show_products/my_univ" exact component={Posts} />
                <Route path="/show_products/my_univ/made" exact component={FilteredPosts} />
                <Route path="/show_products/my_univ/gongu" exact component={FilteredPosts} />
                <Route path="/show_products/my_univ/graduation" exact component={FilteredPosts} />
                <Route path="/show_products/my_univ/jungo" exact component={FilteredPosts} />
                <Route path="/show_products/other" exact component={Posts} />
                <Route path="/show_products/other/made" exact component={FilteredPosts} />
                <Route path="/show_products/other/gongu" exact component={FilteredPosts} />
                <Route path="/show_products/other/graduation" exact component={FilteredPosts} />
                <Route path="/show_products/other/jungo" exact component={FilteredPosts} />
              </div>
            </Switch>
          </RenderOnTop>
        </Router>
      </div>

      <Footer />

    </div>
  );
};

export default App;