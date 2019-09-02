import React, { Component } from "react";

import MainPageContainer from "../components/common/layout";
import SupportBody from "../components/children/support-body";

export default class SupportPage extends Component {
    render() {
        return (
            <MainPageContainer title="support" {...this.props}>
                <SupportBody />
            </MainPageContainer>
        )
    }
} 