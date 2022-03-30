import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AnchorLink from 'react-anchor-link-smooth-scroll'

export default class ViewWork extends Component {
    render() {
        return (
            <AnchorLink className="view_work_link" href="#about_section" >View my work</AnchorLink>
        );
    }
}

if (document.getElementById('view_work')) {
    ReactDOM.render(<ViewWork />, document.getElementById('view_work'));
}
