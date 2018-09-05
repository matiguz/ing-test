import React, { Component } from 'react';
import './../styles/eventCard.css'
import './../styles/bootstrap-social.css'
import { getEventView } from '../redux/actions/actions';
import { debug } from 'util';



class EventCard extends Component {

    render() {

        let event = this.props.event || {}
        let days = event.days || []
        let dispatch = this.props.dispatch || {}

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
                        <button className="btn btn-info ml-3" onClick={() => dispatch(getEventView(event._id))}>
                        View</button>
                    </div>
                </div>
            </div>

        );
    }
}

export default EventCard;