import React, { Component } from "react";

export default class Modals extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="modal_container">
                <div className="modals">
                    <div className="modal_content">
                        <span className="close">&times;</span>
                        {/* <img src="assets/portfolio/curious-monkey.png" alt="" className="modal_img" /> */}
                        <div className="modal_info">
                            <h4>Curious Monkey</h4>
                            <p>A work proposal for a drama company based in Newcastle. Though it is only currently the home page it features full responsive design. Written in PHP and React.</p>
                            <a href="/curious-monkey" className="visit_button">Visit Page</a>
                        </div> 
                    </div>
                </div>
                <div className="modals">
                    <div className="modal_content">
                        <span className="close">&times;</span>
                        {/* <img src="assets/portfolio/fforflash.png" alt="" className="modal_img" /> */}
                        <div className="modal_info">
                            <h4>F For Flash</h4>
                            <p>A personal project that aims to take game data from Leauge of Legends, process this data and then provide players with the most up to date strategy. This project is written in PHP and React.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}