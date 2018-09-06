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
                <div className="card text-center eventCard">
                    <div className="card-header text-left">
                        <span>{days}</span>
                        
                    <a target="_blank" className="btn btn-twitter float-right" href={"https://twitter.com/intent/tweet?text=Iré al " + event.title + "@ FECHA DEL EVENTO LINK DEL EVENTO"}>
                        <span className="fa fa-twitter"></ span> Tweet </a>
                        
                    </div>
                    <div className="card-body">
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h4 className="card-title text-left">{event.title}</h4>
                    </div>
                    <div className="card-footer text-muted">
                        <button className="btn btn-info float-left" onClick={() => dispatch(getEventView(event._id))}>
                        View</button>
                    </div>
                </div>
            </div>

        );
    }
}

export default EventCard;