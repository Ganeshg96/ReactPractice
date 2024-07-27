import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import './style.css';

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <div className="cards">
                <Card
                    img='/images/mr-whiskerson.png'
                    name='Mr. Whiskerson'
                    phone='+91 9000000000'
                    email='ganesh@gmail.com'
                />
                <Card
                    img='/images/fluffykins.png'
                    name='Fluffykins'
                    phone='+91 9000000001'
                    email='ganesh1@gmail.com'
                />
                <Card
                    img='/images/felix.png'
                    name='Felix'
                    phone='+91 9000000002'
                    email='ganesh2@gmail.com'
                />
                <Card
                    img='/images/pumpkin.png'
                    name='Pumpkin'
                    phone='+91 9000000003'
                    email='ganesh3@gmail.com'
                />
            </div>
        </div>
    );
}

export default App;
