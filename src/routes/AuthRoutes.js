import React from 'react'

//Router
import { Redirect, Route, Switch } from 'react-router-dom'

//Components
import { Login } from '../components/auth/Login'
import { Register } from '../components/auth/Register'

const AuthRoutes = () => {
    return (
        <Switch>
            <Route exact path="/auth/login" component={Login}/>
            <Route exact path="/auth/register" component={Register}/>

            <Redirect to="/auth/login"/>
        </Switch>
    )
}

export default AuthRoutes
