import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './component/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import SignPage from './pages/signpage/signpage.component';

import { auth, createUserProfileDocument } from './firebase/firebase.util';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  unsubscribe = null;

  componentDidMount() {
    this.unsubscribe = auth.onAuthStateChanged(async userAuth => {
      //if user signed in
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        //setting state
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {
            console.log(this.state)
          });
        });
      }
      //setting current user to null if signed out
      else {
        this.setState({
          currentUser: userAuth
        }, () => {
          console.log(this.state);
        });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/sign' component={SignPage} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
