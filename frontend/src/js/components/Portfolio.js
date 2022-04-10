import React, { Component } from "react";

export default class Portfolio extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="portfolio_section">
                <div className="container">
                    <h1 className="section_header">Projects</h1>
                    <div className="section_header_underline"></div>
                    <div id="portfolio_container">
                        <div className="project">
                            {/* <div className="project_img">
                                <img src="assets/portfolio/curious-monkey.png" alt="" />
                            </div> */}
                            <div className="project_hover">
                                <h4 className="project_header">Curious Monkey</h4>
                                <div className="project_button">LEARN MORE</div>
                            </div>
                        </div>
                        <div className="project">
                            {/* <div className="project_img">
                                <img src="assets/portfolio/fforflash.png" alt="" className="project_img"/ >
                            </div> */}
                            <div className="project_hover">
                                <h4 className="project_header">F For Flash</h4>
                                <div className="project_button">LEARN MORE</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}