import React, { Component } from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer id="footer">
                <div id="return_top">
                    <AnchorLink href="#matrix_section" >
                        <img src="static/images/up-arrow.png" alt="" className="return_top_img" />
                    </AnchorLink>
                </div>
                <p className="owner">Joe Dineen ©{(new Date().getFullYear())}</p>
            </footer>
        );
    }
}