import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, BrowserRouter, Link } from "react-router-dom";
import { Routes } from './routes';
import Login from './Login';
import Register from './Register';
import { Nav, Badge, Image, Button, Dropdown, Accordion, Navbar } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default (e) =>  {

    return (
        <>
            
    <BrowserRouter>
            
            <Button as={Link} to={Routes.Login.path} variant="secondary" className="upgrade-to-pro mb-3"><FontAwesomeIcon className="me-1" /> Login</Button>

            <Button  as={Link} to={Routes.Register.path} variant="secondary" className="upgrade-to-pro mb-6"><FontAwesomeIcon className="me-1" /> Register</Button>

                <Switch>
                <Route exact path={Routes.Login.path} component={Login} />

                <Route exact path={Routes.Register.path} component={Register} />*********************
                            
                </Switch>
            
            </BrowserRouter>
        </>
    );

};
