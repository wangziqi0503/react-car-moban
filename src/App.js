import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {GlobalStyle} from "./style";
import store from './store';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './pages/home';
import Test from './pages/test';
import Detail from './pages/detail/loadable.js';

class App extends Component {
    render(){
      return (  
        <div>
          <Provider store={store}>
              <Router>
                <div>
                  <Route path='/' exact component={Home}></Route>
                  <Route path='/detail/:id' exact component={Detail}></Route>
                  <Route path='/test' exact component={Test}></Route>
                </div>
              </Router>
              <GlobalStyle />
          </Provider>
        </div>
      )
    }
  }
  
export default App;