import React, { Component } from "react";

import Header from "./header";
import MainMenu from "./main-menu";
import Modal from "./modal";

export default class MainPageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
            submittedValue: null
        };
    }

    handleOpenModal = () => {
        this.setState({
            ...this.state,
            modalOpen: true
        })
    }

    handleCloseModal = (event) => {
        event.preventDefault();
        this.setState({
            ...this.state,
            modalOpen: false,
            submittedValue: null
        })
    }

    handleSubmit = (event, value) => {
        event.preventDefault();
        this.setState({
            ...this.state,
            submittedValue: value
        })
    }

    render() {
        return (<div className="main-page__wrapper">
            <Header openModal={this.handleOpenModal} />
            <div className='main-page__container'>
                <MainMenu {...this.props} />
                <div className="page-layout">
                    <h3 className='page-layout__title'>{this.props.title}</h3>
                    <div className="page-layout__body">
                        {this.props.children}
                    </div>
                </div>
            </div>
            <Modal
                closeModal={this.handleCloseModal}
                open={this.state.modalOpen}
                onSubmit={this.handleSubmit}
                submitted={this.state.submittedValue}    
            />
        </div>
        )
    }
}