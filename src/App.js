import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './component/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import SignPage from './pages/signpage/signpage.component';


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/sign' component={SignPage} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
