import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";
import './style.css';

function App() {
    const cards = data.map(item => (
        <Card
            key={item.id}
            image={item.image}
            startDate={item.startDate}
            endDate={item.endDate}
            title={item.title}
            description={item.description}
            country={item.country}
            googleMapsLink={item.googleMapsLink}
        />
    ));

    return (
        <div>
            <Navbar />
            <div className="cards-list">
                {cards}
            </div>
        </div>
    );
}

export default App;
