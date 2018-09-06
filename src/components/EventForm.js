import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addEvent } from '../redux/actions/actions';
import { connect } from 'react-redux';
import { FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap';
import './../styles/eventCard.css'




export default class EventForm extends Component {

    constructor() {
        super();
        this.state = {
            title: '',
            description: '',
            url_picture: '',
            place: '',
            date: '',

        }
        this.handleInput = this.handleInput.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleInput(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleChange(date) {
        this.setState({
          date: date
        });
      }

    render() {
        const { dispatch } = this.props        
        return (
            <div>
                    <div className="col-sm-4>">
                        <div className="card eventCard">
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
                                        type="date"
                                        name="date"
                                        className="datepicker"
                                        placeholder="Date...DD/MM/AAAA"
                                        onChange={this.handleInput}
                                    />
                                </div>
                                <button type="submit" className="btn btn-info" onClick={() => {dispatch(addEvent())}}>Save</button>
                        </div>

                    </div>
            </div>
        );
    }
}

EventForm.propTypes = {
    dispatch: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string
}