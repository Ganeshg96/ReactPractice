import React from "react";
import './style.css';

export default function Die({ value, isHeld, holdDice }) {
    const dots = Array.from({ length: value });

    return (
        <div 
            className={`die-face ${isHeld ? "held" : ""}`} 
            onClick={holdDice}
        >
            {dots.map((_, index) => (
                <div key={index} className={`dot dot-${index + 1}`} />
            ))}
        </div>
    );
}
