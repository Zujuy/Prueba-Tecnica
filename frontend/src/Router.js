import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import NotFound from './components/404/NotFound.js';
import Navbar from "./components/Navbar";
import AddPost from "./components/AddPost/AddPost";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";

const Router = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/add-post" component={AddPost} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route component={NotFound} />

    </Switch>
  </BrowserRouter>
);

export default Router;
