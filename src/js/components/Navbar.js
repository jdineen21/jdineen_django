import React from 'react';
import ReactDOM from 'react-dom';

import AnchorLink from 'react-anchor-link-smooth-scroll'

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            setFixed: false,
            active: 0,
        };

        this.listenToScroll = this.listenToScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
    }

    listenToScroll() {
        const winScroll =
          document.body.scrollTop || document.documentElement.scrollTop

        if (winScroll > document.getElementById('matrix_section').clientHeight) {
            this.setState({ setFixed: true, active: 1, })
        } else {
            this.setState({ setFixed: false, active: 0, })
        }

        if (winScroll > document.getElementById('about_section').clientHeight+document.getElementById('matrix_section').clientHeight) {
            this.setState({ active: 2 })
        }

        if (winScroll > document.getElementById('svg_section').clientHeight+document.getElementById('portfolio_section').clientHeight+document.getElementById('about_section').clientHeight+document.getElementById('matrix_section').clientHeight) {
            this.setState({ active: 3 })
        }
    }

    render() {
        const { setFixed, active } = this.state;

        return (
            <nav className={ setFixed ? 'navbar fixed': 'navbar'} >
                <ul className='navbar_ul'>
                    <li>
                        <AnchorLink className={ (active == 0) ? 'active tab' : 'tab' } href="#matrix_section" >Home</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink className={ (active == 1) ? 'active tab' : 'tab' } href="#about_section" >About</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink className={ (active == 2) ? 'active tab' : 'tab' } href="#portfolio_section" >Projects</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink className={ (active == 3) ? 'active tab' : 'tab' } href="#contact_section" >Contact</AnchorLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

if (document.getElementById('navbar_container')) {
    ReactDOM.render(<Navbar />, document.getElementById('navbar_container'));
}