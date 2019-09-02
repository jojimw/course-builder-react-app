import React from "react";

import { courseBuilderCardDetails } from "../../resources/resources";
import TickIcon from "../../resources/assets/1/tick-icon.svg";
import WrongIcon from "../../resources/assets/1/wrong-icon.svg";

const CourseBuilderList = () => {
    return (
        <ul className="course-builder__list">
            {courseBuilderCardDetails.map((detail, i) => (
                <li className="course-builder__list-item" key={i}>
                    <img src={TickIcon} alt="tick-icon" className="course-builder__list-icon" />
                    <p className="course-builder__list-detail">{detail}</p>
                </li>
            ))}
        </ul>
    )
}

const CourseBuilderBody = props => {
    return (
        <div className="course-builder__body">
            <h3 className="course-builder__title">Upgrade to pro</h3>
            <div className="course-builder__card-container">
                <div className="course-builder__card-row course-builder__card-row--header">
                    <div className="course-builder__card-header">
                        <h2 className="course-builder__card-header-title">Pro</h2>
                        <h3 className="course-builder__card-header-description">Lifetime</h3>
                    </div>
                    <div className="course-builder__card-header course-builder__card-header--right">
                        <h2 className="course-builder__card-header-title course-builder__card-header-title--right">Free</h2>
                        <h3 className="course-builder__card-header-description course-builder__card-header-description--right">Lifetime</h3>
                    </div>
                </div>
                <div className="course-builder__card-row">
                    <div className="course-builder__card-body">
                        <CourseBuilderList />
                        <button className="button button--primary button--circular">Upgrade</button>
                    </div>
                    <div className="course-builder__card-body course-builder__card-body--right">
                        <ul className="course-builder__list course-builder__list--right">
                            <li className="course-builder__list-item"><img src={TickIcon} alt="tick icon" className="course-builder__list-icon" /></li>
                            <li className="course-builder__list-item"><img src={WrongIcon} alt="wrong icon" className="course-builder__list-icon" /></li>
                            <li className="course-builder__list-item"><img src={WrongIcon} alt="wrong icon" className="course-builder__list-icon" /></li>
                            <li className="course-builder__list-item"><img src={WrongIcon} alt="wrong icon" className="course-builder__list-icon" /></li>
                        </ul>
                        <button className="button button--white button--circular">Current</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseBuilderBody;