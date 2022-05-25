import React from "react";
import ReactDOM from "react-dom";
import Modals from "./components/Modal";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import SVG from "./components/SVG";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Matrix from "./components/Matrix";
import "./index.css"

export default function App() {
    return (
        <div>
            <Modals />
            <Matrix />
            <Navbar />
            <About />
            <Portfolio />
            <SVG />
            <Contact />
            <Footer />
        </div>
    );
}

const container = document.getElementById('app');
ReactDOM.render(<App tab="home" />, container);