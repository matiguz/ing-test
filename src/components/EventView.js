import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { backEventView } from '../redux/actions/actions';
import { connect } from 'react-redux';



export default class EventView extends Component {

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

        const { dispatch, event } = this.props
        let days = event.days || []
        debugger;
        return (
                <div className="row mt-4">
                    
                    <div className="col-sm-8">
                    
                    <h1>{event.title}</h1><span className="text-muted">{event.place}</span>
                        <br></br>
                        <br></br>
                        <p>{event.description}</p>
                    </div>
                    <div className="col-sm-4">
                        <img src={event.picture} className="img-fluid" alt="Responsive image"/>
                    </div>
                    
                </div>
        );
    }
}

EventView.propTypes = {
    dispatch: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string
}