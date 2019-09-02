import React from "react";

import FbIcon from "../../resources/assets/2/fb-icon.svg";
import GoogleIcon from "../../resources/assets/2/google-icon.svg";

const StepCard = props => (
    <div className="campaigns__card-container">
        <h2 className="campaigns__card-title">STEP</h2>
        <h1 className="campaigns__card-number">{`0${props.number}`}</h1>
        <p className="campaigns__card-description">Lorem ipsum dolor sit amet, consetetur</p>
    </div>
)

const MediumCard = props => (
    <div className="campaigns__card-container campaigns__card-container--medium">
        <img
            className="campaigns__card-image"
            src={props.icon}
            alt="campaign icon"
        />
        <h2 className="campaigns__card-title">{props.title}</h2>
    </div>
)

const mediumDetails = [
    { icon: FbIcon, title: 'Facebook' },
    { icon: GoogleIcon, title: 'Google' }
]

const CampaignsBody = props => {
    return (
        <div className="campaigns__body-wrapper">
            <div className="campaigns__body campaigns__body--top">
                <h2 className="campaigns__title">6 steps to success. Create your audience today.</h2>
                <p className="campaigns__description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</p>
                <div className="campaigns__card-wrapper">
                    {[1, 2, 3, 4, 5, 6].map(number => <StepCard number={number} key={number} />)}
                </div>
                <div className="campaigns__row">
                    <button className="button button--primary">Start now</button>
                    <p className="campaigns__row-text">Need more help? <span className="campaigns__row-text-link">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</span></p>
                </div>
            </div>
            <div className="campaigns__body campaigns__body--bottom">
                <h2 className="campaigns__title">Lets start building your audience</h2>
                <div className="campaigns__row">
                    <div className="campaigns__input-wrapper">
                        <label htmlFor="course-name" className="form__label form__label--campaigns">
                            Enter your campaign name
                        </label>
                        <input
                            type="text"
                            className="form__input form__input--campaigns"
                            id="campaign-name"
                            placeholder="Type..."
                            required
                        />
                    </div>
                    <div className="campaigns__input-wrapper">
                        <label htmlFor="name" className="form__label form__label--campaigns">
                            Enter your name
                        </label>
                        <input
                            type="text"
                            className="form__input form__input--campaigns"
                            id="name-2"
                            placeholder="Type..."
                            required
                        />
                    </div>
                </div>
                <h3 className="campaigns__title--secondary">Select medium</h3>
                <div className="campaigns__row campaigns__row--medium">
                    {
                        mediumDetails.map(item => <MediumCard {...item} key={item.title} />)
                    }
                </div>
                <div className="campaigns__row campaigns__row--secondary">
                    <button className="button button--primary">Start now</button>
                </div>
            </div>
        </div>
    )
}

export default CampaignsBody;