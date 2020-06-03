import React from 'react'; 
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";

import { Provider } from 'react-redux';

import store from './store';

import Home from './components/Home';
import Product from './components/Product';
import Seller from './components/Seller';

class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <Router>
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/product"><Product /></Route>
            <Route path="/seller"><Seller /></Route>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
