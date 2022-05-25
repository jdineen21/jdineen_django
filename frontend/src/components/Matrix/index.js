import React from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Fade } from "react-reveal";
import MatrixRain from "./MatrixRain";
import "./Matrix.css"

export default function Matrix() {
    return (
        <section id="matrix_section">
            <div className="container">
                <MatrixRain fullscreen={true} />
                <div className="welcome">
                    <Fade left>
                        <div className="text">
                            Hello, I'm <span className="highlight">Joe Dineen</span>.<br />
                            I'm a full-stack web developer.
                        </div>
                    </Fade>
                    <Fade right>
                        <AnchorLink className="view_work_link" href="#about_section" >View my work</AnchorLink>
                    </Fade>
                </div>
            </div>
        </section>
    );
}