import React from "react";
import '../style.css';

export default function Card(props) {
    return (
        <div className="card">
            <img src={`/images/${props.image}`} className="card--image" alt={props.title} />
            <div className="card--content">
                <div className="card--header">
                    <span className="card--country">{props.country}</span>
                    <a href={props.googleMapsLink} className="card--link" target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                </div>
                <h2 className="card--title">{props.title}</h2>
                <div className="card--dates">
                    <span>{props.startDate} - {props.endDate}</span>
                </div>
                <p className="card--description">{props.description}</p>
            </div>
        </div>
    );
}
