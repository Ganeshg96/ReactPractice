import React from "react";
import '../style.css';

export default function Card(props) {
    return (
        <div className="contact-card">
            <img src={props.img} alt={props.name} className="contact-card--image" />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src='/images/phone-icon.png' alt="phone icon" className="info-group--icon" />
                <p className="info-group--text">{props.phone}</p>
            </div>
            <div className="info-group">
                <img src='/images/mail-icon.png' alt="mail icon" className="info-group--icon" />
                <p className="info-group--text">{props.email}</p>
            </div>
        </div>
    );
}
