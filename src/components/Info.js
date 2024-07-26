import React from 'react';
import logo from '../images/ganesh.jpg';
import '../style.css';

function Info() {
    return (
        <section className="info">
            <img src={logo} alt="profile" className="profile-photo" />
            <h3>Ganesh Gone</h3>
            <p>Frontend Developer</p>
            <p>Penumur, Andhra Pradesh</p>
            <div className="button-container">
                <button type="button">Email</button>
                <button type="button">LinkedIn</button>
            </div>
        </section>
    );
}

export default Info;
