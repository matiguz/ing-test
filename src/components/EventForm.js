import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addEvent } from '../redux/actions/actions';
import { connect } from 'react-redux';



export default class EventForm extends Component {

    constructor() {
        super();
        this.state = {
            title: '',
            description: '',
            url_picture: '',
            place: '',
            date: ''

        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e) {
        // e.preventDefault();
        this.props.addEvent(this.state);
        //LLAMAR A PERSISTENCIA
        //this.props.onAddEvent(this.state);
    }

    render() {

        const { dispatch, isAuthenticated, errorMessage } = this.props

        return (
            <div>
                {isAuthenticated &&
                    <div className="col-sm-4>">
                        <div className="card eventCard">
                            <form className="card-body" onSubmit={this.handleSubmit}>
                                <label className="label label-info">Create Event</label>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="title"
                                        className="form-control"
                                        placeholder="Title..."
                                        onChange={this.handleInput}
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea
                                        type="text"
                                        name="description"
                                        className="form-control"
                                        placeholder="Description..."
                                        onChange={this.handleInput}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="place"
                                        className="form-control"
                                        placeholder="Place..."
                                        onChange={this.handleInput}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="url_picture"
                                        className="form-control"
                                        placeholder="Url picture..."
                                        onChange={this.handleInput}
                                    />
                                </div>

                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="date"
                                        className="form-control"
                                        placeholder="Date...DD/MM/AAAA"
                                        onChange={this.handleInput}
                                    />
                                </div>
                                <button type="submit" className="btn btn-info">Save</button>

                            </form>
                        </div>

                    </div>
                }
            </div>
        );
    }
}

EventForm.propTypes = {
    dispatch: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string
}