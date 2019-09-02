import React, { Component } from "react";

import MainPageContainer from "../components/common/layout";
import DashboardBody from "../components/children/dashboard-body";

export default class DashboardPage extends Component {
    render() {
        return (
            <MainPageContainer title="dashboard" {...this.props}>
                <DashboardBody />
            </MainPageContainer>
        )
    }
} 