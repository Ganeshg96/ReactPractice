import React from "react";
import About from "./components/About";
import Info from "./components/Info";
import Interest from "./components/Interests";
import Footer from "./components/Footer";
import './style.css';

function App() {
    return (
        <div className="container">
            <Info />
            <About />
            <Interest />
            <Footer />
        </div>
    );
}

export default App;
