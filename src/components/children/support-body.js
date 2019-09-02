import React from "react";

import SupportIcon1 from "../../resources/assets/3/support-icon-1.svg";
import SupportIcon2 from "../../resources/assets/3/support-icon-2.svg";
import SupportIcon3 from "../../resources/assets/3/support-icon-3.svg";
import { supportCardDetails } from "../../resources/resources";

const getSupportIcon = number => {
    switch(number) {
        case 1: return SupportIcon1
        case 2: return SupportIcon2
        case 3: return SupportIcon3
        default: return ""
    }   
}

const SupportCard = props => {
    const { title, description, number } = props
    return (
        <div className="support__card">
            <h3 className="support__card-title">{title}</h3>
            <p className="support__card-description">{description}</p>
            <img className="support__card-image" alt="support icon" src={getSupportIcon(number)}></img>
            <button className="button button--primary button--full-width">Continue</button>
        </div>
    )
}

const SupportBody = props => {
    return (<div className="support__body">
        <h2 className="support__heading">You can reach us at any time by mailing us on <a className="support__heading-link" href="/">info@gmail.com</a></h2>
        <div className="support__card-container">
            {
                supportCardDetails.map((cardDetail, key) => <SupportCard {...cardDetail} number={key + 1} key={key}/>)
            }
        </div>
    </div>)
}

export default SupportBody