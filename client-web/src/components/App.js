import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';

import Header from './Header';
import Navbar from './Navbar';
import Main from './pages/Main';
import Login from './pages/Login';
import Join from './pages/Join';
import Footer from './Footer';

const App = () => {
    return (
        <div className="container">
            <Router history={history}>
                <Header />
                <Navbar />
                <Switch>
                    <section>
                        <Route path="/" exact component={Main} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/join" exact component={Join} />
                    </section>
                </Switch>
                <Footer />
            </Router>
        </div>
    )
}

export default App;