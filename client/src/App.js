import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Provider} from 'react-redux';
import store from './redux/store';

import Navbar from './components/layout/Navbar';
import Landing from './components/screen/Landing';
import Products from './components/screen/Products';
import searchProduct from './components/screen/searchProduct';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/search/:features" component={searchProduct} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
