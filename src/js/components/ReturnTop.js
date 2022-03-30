import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AnchorLink from 'react-anchor-link-smooth-scroll'

export default class ReturnTop extends Component {
    render() {
        return (
            <AnchorLink href="#matrix_section" >
                <img src="assets/double-chevron-white.png" alt="" className="return_top_img" />
            </AnchorLink>
        );
    }
}

if (document.getElementById('return_top')) {
    ReactDOM.render(<ReturnTop />, document.getElementById('return_top'));
}