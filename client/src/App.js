import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './components/mainPage/MainPage';
import Cart from './components/cart/Cart';
import Shipping from './components/shipping/Shipping';
import Alert from './components/alert/Alert';
//Redux
import {Provider} from 'react-redux';
import store from './store';
import './index.css'

function App() {
    return (
        <Provider store={store}>
            <Router>
                <>
                    <Route exact path="/" component={MainPage}/>
                    <Alert/>
                    <Switch>
                        <Route exact path="/cart" component={Cart}/>
                        <Route exact path="/shipping" component={Shipping}/>
                    </Switch>
                </>
            </Router>
        </Provider>
    )
}

export default App;
