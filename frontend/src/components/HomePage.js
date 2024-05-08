import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";

// pages

import Dashboard from "./Dashboard"
import Problems from './Problems'
import DSASheets from './DSASheets'
import Contests from './Contests'
import Projects from './Projects'
import Interviews from './Interviews'
import Jobs from './Jobs'
import Clubs from './Clubs'
import Profile from './Profile'
import Logout from './Logout'
import NotFoundPage from './NotFound'

// components
import Sidebar from "./Navbar/Sidebar"
import Navbar from "./Navbar/Navbar"
import Preloader from "./Navbar/Preloader"

import AddProject from './AddProject'
import AddInterview from './AddInterview'
import ViewInterview from './ViewInterview'
import ChatGpt from './ChatGpt';

const RouteWithLoader = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Route {...rest} render={props => ( <> <Preloader show={loaded ? false : true} /> <Component {...props} /> </> ) } />
  );
};

const RouteWithSidebar = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const localStorageIsSettingsVisible = () => {
    return localStorage.getItem('settingsVisible') === 'false' ? false : true
  }

  const [showSettings, setShowSettings] = useState(localStorageIsSettingsVisible);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
    localStorage.setItem('settingsVisible', !showSettings);
  }

  return (
    <Route {...rest} render={props => (
      <>
        <Preloader show={loaded ? false : true} />
        <Sidebar />

        <main className="content">
          <Navbar />
          <Component {...props} />
        </main>
      </>
    )}
    />
  );
};

export default () => (

  
  <BrowserRouter>
  
  <Switch>
    <RouteWithSidebar exact path={Routes.Dashboard.path} component={Dashboard} />
    <RouteWithSidebar exact path={Routes.Problems.path} component={Problems} />
    <RouteWithSidebar exact path={Routes.DSASheets.path} component={DSASheets} />
    <RouteWithSidebar exact path={Routes.Contests.path} component={Contests} />
    <RouteWithSidebar exact path={Routes.Projects.path} component={Projects} />
    <RouteWithSidebar exact path={Routes.Interviews.path} component={Interviews} />
    <RouteWithSidebar exact path={Routes.Jobs.path} component={Jobs} />
    <RouteWithSidebar exact path={Routes.Clubs.path} component={Clubs} />
    <RouteWithSidebar exact path={Routes.Profile.path} component={Profile} />
    <RouteWithSidebar exact path={Routes.Logout.path} component={Logout} />

    <RouteWithLoader exact path={Routes.NotFound.path} component={NotFoundPage} />

    <RouteWithSidebar exact path={Routes.AddProject.path} component={AddProject}/>
    <RouteWithSidebar exact path={Routes.AddInterview.path} component={AddInterview}/>
    <RouteWithSidebar exact path={Routes.ChatGpt.path} component={ChatGpt}/>
    <RouteWithSidebar exact path={Routes.ViewInterview.path} component={ViewInterview}/>

    <Redirect to={Routes.NotFound.path} />
  </Switch>
  </BrowserRouter>
  
);
