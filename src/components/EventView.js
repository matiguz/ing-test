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
            <div className="col-sm-4>">
            <div className="card eventCard">
                <div className="card-body">
                    <h5 className="card-title">{event.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{event.author}</h6>
                    <p className="card-text">{event.description}</p>
                    <a href="#" className="card-link">{event.place}</a>
                    <a href="#" className="card-link">{event.picture}</a>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Days</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {
                                    days.map(element => { return <tr>{element}la fecha</tr> })
                                }
                            </tr>
                        </tbody>
                    </table>
                    <a target="_blank" className="btn btn-twitter" href={"https://twitter.com/intent/tweet?text=Iré al " + event.title + "@ FECHA DEL EVENTO LINK DEL EVENTO"}>
                    <span className="fa fa-twitter"></ span> Tweet </a>
                    <button className="btn btn-info ml-3" onClick={() => dispatch(backEventView())}>
                    Back</button>
                </div>
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