import React, { useEffect, useState } from 'react'

//Redux
import { useDispatch, useSelector } from 'react-redux';

//Router
import {
    BrowserRouter as Router,
    Switch,
  } from "react-router-dom";

//Actions
import { startLoggedUser } from '../actions/auth';

//Components
import AuthRoutes from './AuthRoutes';
import { Dashboard } from './Dashboard';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    const dispatch = useDispatch()
    const { logged, checking } = useSelector(state => state.auth)

    useEffect(() => {

        dispatch(startLoggedUser())
          
    }, [])

    if(checking) return <h1>Espere....</h1>
    
    return (
        <Router>
            <Switch>

                <PublicRoute 
                path="/auth" 
                component={AuthRoutes}
                isAuthenticated={logged}
                />

                <PrivateRoute 
                exact 
                path="/" 
                component={Dashboard}
                isAuthenticated={logged}/>

            </Switch>
        </Router>
    )
}
