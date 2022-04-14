import React from "react";
import "./SVG.css"

export default function SVG(){
    return (
        <section id="svg_section">
            <svg preserveAspectRatio="none" viewBox="0 0 100 105" height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" className="svgcolor-light">
                <path d="M0 0 L50 100 L100 0 Z" fill="#f0f0f0" stroke="#f0f0f0"></path>
            </svg>
        </section>
    );
}