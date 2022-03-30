import React, { Component } from 'react';

export default class Project extends Component {
    render() {
        return (
            <div className="project">
                <div className="project_img">
                    <img src="assets/portfolio/curious-monkey.png" alt="" />
                </div>
                <div className="project_hover">
                    <h4 className="project_header">Curious Monkey</h4>
                    <div onClick={this.openModal} className="project_button">LEARN MORE</div>
                </div>
            </div>
        );
    }
}