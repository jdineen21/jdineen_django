import React from "react";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
import ProgressLine from "./ProgressBar";
import "./About.css";

export default function About() {
    return (
        <section id="about_section">
            <div className="container">
                <Fade left big cascade>
                    <div>
                        <h1 className="section_header">About</h1>
                        <div className="section_header_underline"></div>
                    </div>
                    <div>
                        <ul className="keystone_container">
                            <li className="keystone">
                                <div className="keystone_content">
                                    <img src="static/images/clock.png" alt="" className="keystone_img" />
                                    <h3 className="keystone_header">Fast</h3>
                                    <p className="keystone_description">Rapid page load times and responsive interaction.</p>
                                </div>
                            </li>
                            <li className="keystone">
                                <div className="keystone_content">
                                    <img src="static/images/responsive.png" alt="" className="keystone_img" />
                                    <h3 className="keystone_header">Responsive</h3>
                                    <p className="keystone_description">Pages are designed to work on a full range of devices.</p>
                                </div>
                            </li>
                            <li className="keystone">
                                <div className="keystone_content">
                                    <img src="static/images/intuitive.png" alt="" className="keystone_img" />
                                    <h3 className="keystone_header">Intuitive</h3>
                                    <p className="keystone_description">An emphasis on easy to use pages, intuitive UX/UI design.</p>
                                </div>
                            </li>
                            <li className="keystone">
                                <div className="keystone_content">
                                    <img src="static/images/scalability.png" alt="" className="keystone_img" />
                                    <h3 className="keystone_header">Scalability</h3>
                                    <p className="keystone_description">Seamlessly and efficiently accommodate growth, designed with scalability in mind.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </Fade>
                <div className="about_bottom">
                    <div className="summary">
                        <Pulse>
                            <img src="static/images/joe-dineen-headshot.jpg" alt="" />
                        </Pulse>
                        <h3>About me</h3>
                        <p>
                            I'm a Full-Stack Developer based in Sheffield, UK.
                            I have a serious passion for making a difference through Web Development and creating intuitive, dynamic user experiences.
                            Let's make something great.
                        </p>
                    </div>
                    <div className="tool_progress_container">
                        <ProgressLine label="HTML"
                            backgroundColor="lightblue"
                            visualParts={[
                            {
                                percentage: "100%",
                                color: "#283237"
                            }
                            ]}
                        />
                        <ProgressLine label="CSS"
                            backgroundColor="lightblue"
                            visualParts={[
                            {
                                percentage: "100%",
                                color: "#283237"
                            }
                            ]}
                        />
                        <ProgressLine label="React"
                            backgroundColor="lightblue"
                            visualParts={[
                            {
                                percentage: "100%",
                                color: "#283237"
                            }
                            ]}
                        />
                        <ProgressLine label="Python"
                            backgroundColor="lightblue"
                            visualParts={[
                            {
                                percentage: "100%",
                                color: "#283237"
                            }
                            ]}
                        />
                        <ProgressLine label="Go"
                            backgroundColor="lightblue"
                            visualParts={[
                            {
                                percentage: "100%",
                                color: "#283237"
                            }
                            ]}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}