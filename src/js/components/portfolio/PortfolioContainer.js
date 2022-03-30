import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Project from './Project';

export default class PortfolioContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modals: [{
                header: 'Curious Monkey',
            }, {
                header: 'F For Flash',
            }],
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="project">
                    <div className="project_img">
                        <img src="assets/portfolio/curious-monkey.png" alt="" />
                    </div>
                    <div className="project_hover"></div>
                </div>
                <div className="project">
                    <div className="project_img">
                        <img src="assets/portfolio/fforflash.png" alt="" />
                    </div>
                    <div className="project_hover"></div>
                </div>
            </React.Fragment>
        );
    }
}

if (document.getElementById('portfolio_container')) {
    ReactDOM.render(<PortfolioContainer />, document.getElementById('portfolio_container'));
}