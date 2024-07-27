import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";
import './style.css';

function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id} // Ensure each card has a unique key
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
                openSpots={item.openSpots}
            />
        );
    });

    return (
        <div>
            <Navbar />
            <Hero />
            <div className="cards-list">
                {cards}
            </div>
        </div>
    );
}

export default App;
