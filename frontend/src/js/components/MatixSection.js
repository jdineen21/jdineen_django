import React, { Component } from "react";
import Matrix from './Matrix';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default class MatrixSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="matrix_section">
                <div className="container">
                    <Matrix fullscreen={true} />
                    <div className="welcome">
                        <div className="text">
                            Hello, I'm <span className="highlight">Joe Dineen</span>.<br />
                            I'm a full-stack web developer.
                        </div>
                        <AnchorLink className="view_work_link" href="#about_section" >View my work</AnchorLink>
                    </div>
                </div>
            </section>
        );
    }
}