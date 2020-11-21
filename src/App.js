import React, { useEffect } from 'react'
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase'
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51Hq0SUEmRw4bkjoZJy5Jr9WIQmC1ndCMmw1eOUasECi4glOHJKcCw7rPKfVmTT3A0yRG0elpyrv9OpBE6e6V7Ero00VEYeextu')


function App() {

  const [{ }, dispatch] = useStateValue();



  useEffect(() => {

    auth.onAuthStateChanged(authUser => {

      console.log('the user is ->', authUser)

      if (authUser) {
        // if user loged in 

        dispatch({
          type: 'SET_USER',
          user: authUser


        })

      }
      else {
        // if user logged out 

        dispatch({
          type: 'SET_USER',
          user: null


        })

      }





    })






  }, [])





  return (
    <Router>
      <div className="app">

        <Switch>
          {/* header components */}

          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise} ><Payment /></Elements>
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>


        </Switch>
      </div>
    </Router>
  );
}

export default App;
