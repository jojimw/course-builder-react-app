import React from "react";

const Header = props => {
    return (
        <div className="header">
            <div className="header__logo">Logo</div>
            <div
                className="header__button"
                onClick={props.openModal}
            >
                <div className="header__button-icon" >+</div>
                <div className="header__button-description">Add courses</div>
                </div>
            <div className="header__image"></div>
        </div>
    )
}

export default Header