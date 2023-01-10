import * as React from "react";
import { Switch, Route, Router, Redirect } from "wouter";
import { logout } from "./fbauth";

import Home from "../pages/home";
import About from "../pages/about";
import Cites from "../pages/cites";
import Sitemap from "../pages/sitemap";
import Feedback from "../pages/feedback";
import Map from "../pages/map";
import Quote from "../pages/quote";

// Auth Pages
import Login from "../pages/login";
import Logout from "../pages/logout";
import Register from "../pages/register";
import Reset from "../pages/reset";
import Dashboard from "../pages/dashboard";

// template
import Template from "../pages/template";

import Error404 from "../pages/error404";

/**
 * The router is imported in app.jsx
 *
 * Our site just has two routes in it–Home and About
 * Each one is defined as a component in /pages
 * We use Switch to only render one route at a time https://github.com/molefrog/wouter#switch-
 */

export default () => (
  <Switch>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/cites" component={Cites} />
    <Route path="/sitemap" component={Sitemap} />
    <Route path="/feedback" component={Feedback} />
    <Route path="/map" component={Map} />
    <Route path="/quote" component={Quote} />

    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/reset" component={Reset} />
    <Route path="/logout" component={Logout}></Route>

    <Route path="/template" component={Template} />
    
    <Route component={Error404} />
  </Switch>
);