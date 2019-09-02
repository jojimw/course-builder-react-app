import React, { Component } from "react";

const AddNewCourseModal = props => {
    const { courseName, name, onSubmit, handleChange, closeModal } = props
    return (
        <>
            <h2 className="modal__title">Add new course</h2>
            <form onSubmit={(e) => onSubmit(e, name)} className="form__container">
                <label htmlFor="course-name" className="form__label">
                    Enter your course name
                </label>
                <input
                    type="text"
                    className="form__input"
                    id="course-name"
                    name="courseName"
                    value={courseName}
                    onChange={handleChange}
                    placeholder="Type..."
                    required
                />
                <label htmlFor="name" className="form__label">
                    Enter your name
                </label>
                <input
                    type="text"
                    className="form__input"
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    placeholder="Type..."
                    required
                />
                <button className="button button--primary button--full-width">
                    <input type="submit" style={{ display: 'none' }} />
                    Submit
            </button>
            </form>
            <button
                className="button button--white button--full-width"
                onClick={closeModal}
            >Cancel</button>
        </>
    )
}

const SubmitSuccessModal = props => {
    const { submittedValue, closeModal } = props
    return (
        <div className="modal--success">
            <i class="fas fa-check modal__icon--success"></i>
            <h2 className="modal__title">Success</h2>
            <p className="modal__description">Thanks {submittedValue} for submitting</p>
            <button className="button button--white button--full-width" onClick={closeModal}>Close</button>
        </div>
    )
}

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courseName: "",
            name: "",
        }
    }

    handleChange = (event) => {
        event.preventDefault()
        const { name, value } = event.target
        this.setState({
            ...this.state,
            [name]: value
        })
    }

    handleClose = (event) => {
        event.preventDefault()
        this.setState({
            ...this.state,
            courseName: "",
            name: "",
        })
        this.props.closeModal(event)
    }

    render() {
        const { open, onSubmit, submitted } = this.props
        return (
            <div className={`modal__wrapper ${open && 'open'}`}>
                <div className="modal__container">
                    {
                        submitted ?
                            <SubmitSuccessModal
                                submittedValue={submitted}
                                closeModal={this.handleClose}
                            />
                            :
                            <AddNewCourseModal
                                courseName={this.state.courseName}
                                name={this.state.name}
                                onSubmit={onSubmit}
                                handleChange={this.handleChange}
                                closeModal={this.handleClose}
                            />
                    }
                </div>
            </div>
        )
    }
}

export default Modal;