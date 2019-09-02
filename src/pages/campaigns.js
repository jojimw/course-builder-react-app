import React, { Component } from "react";

import MainPageContainer from "../components/common/layout";
import CampaignsBody from "../components/children/campaigns-body";

export default class CampaignsPage extends Component {
    render() {
        return (
            <MainPageContainer title="Create new campaign" {...this.props}>
                <CampaignsBody />
            </MainPageContainer>
        )
    }
} 