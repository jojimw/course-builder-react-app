import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import SupportPage from "./pages/support";
import DashboardPage from "./pages/dashboard";
import CampaignsPage from "./pages/campaigns";
import CourseBuilderPage from "./pages/course-builder";

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Redirect exact from="/" to="/dashboard" />
                    <Route
                        exact
                        path="/support"
                        render={props => (
                            <SupportPage {...props} />
                        )}
                    />
                    <Route
                        exact
                        path="/dashboard"
                        render={props => (
                            <DashboardPage {...props} />
                        )}
                    />
                    <Route
                        exact
                        path="/course-builder"
                        render={props => (
                            <CourseBuilderPage {...props} />
                        )}
                    />
                    <Route
                        exact
                        path="/campaigns"
                        render={props => (
                            <CampaignsPage {...props} />
                        )}
                    />
                </Switch>
            </Router>
        )
    }
}