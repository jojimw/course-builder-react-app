import React, { Component } from "react";

import MainPageContainer from "../components/common/layout";
import CourseBuilderBody from "../components/children/course-builder-body";

export default class CourseBuilderPage extends Component {
    render() {
        return (
            <MainPageContainer title="course builder" {...this.props}>
                <CourseBuilderBody />
            </MainPageContainer>
        )
    }
} 