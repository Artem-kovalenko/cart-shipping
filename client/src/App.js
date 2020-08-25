import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './components/mainPage/MainPage';
import Cart from './components/cart/Cart';
//Redux
import {Provider} from 'react-redux';
import store from "./store";

import './index.css'

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Fragment>
                    <Route exact path="/" component={MainPage}/>
                    <Switch>
                        <Route exact path="/cart" component={Cart}/>
                        {/*<Route exact path="/shipping" component={Login}/>*/}
                    </Switch>
                </Fragment>
            </Router>
        </Provider>
    )
}

export default App;
