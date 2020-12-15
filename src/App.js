import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Card from "./Components/Cards/Cards";

import Login from "./Components/Login/Login";
import Create from "./Components/Create/Create";
import PageNotFound from "./Components/PageNotFound/NotFound";

import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary";

import store from "./Store/store";
import { Provider } from "react-redux";

function App(props) {
  const [islogin, setIsLogin] = useState(false);

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Navigation />

            <Switch>
              <Route exact path="/" component={Card}>
                <Card />
              </Route>
              <Route path="/home" component={Card}>
                <Card />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/create">
                <Create />
              </Route>

              <Route exact path="/:searchType" component={Card}>
                <Card />
              </Route>

              <Route component={PageNotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
