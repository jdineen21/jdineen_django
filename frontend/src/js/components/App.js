import React, { Component } from "react";
import ReactDOM from 'react-dom';
import MatrixSection from './MatixSection';
import Modals from "./Modal";
import Navbar from "./Navbar";
import About from "./About";
import Portfolio from "./Portfolio";
import SVG from "./SVG";
import Contact from "./Contact";
import Footer from "./Footer";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Modals />
                <MatrixSection />
                <Navbar />
                <About />
                <Portfolio />
                <SVG />
                <Contact />
                <Footer />
            </div>
        );
    }
}

const container = document.getElementById('app');
ReactDOM.render(<App tab="home" />, container);