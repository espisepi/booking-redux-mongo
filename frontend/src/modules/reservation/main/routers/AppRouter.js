import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from 'react-router-dom';
import AdminPage from '../../pages/AdminPage';
import ReservationPage from '../../pages/ReservationPage';
import PublicRoute from './PublicRoute';


const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        exact
                        path="/"
                        component={ ReservationPage }
                    />
                    <PublicRoute
                        exact
                        path="/admin"
                        component={ AdminPage }
                    />
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter
