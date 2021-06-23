import React from "react";
import "./App.css";
import {Route,Switch} from "react-router-dom"
import Signup from "./components/signup"
import Login from "./components/login";
function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/" component={Signup}/>
    </Switch>
    </div>
  );
}

export default App;
