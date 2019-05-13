import React, { Component } from 'react';
import './Loader.css'
import DevIcon from "devicon-react-svg";
var devIconStyle = {
    position: "absolute",
    fill: "white",
    border: "5px #770000 double",
    borderRadius: "50%",
    width: "130px",
    height: "130px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2em"
}

class Loader extends Component {

    componentDidMount() {
        setTimeout(() => {
            document.getElementsByClassName('loader')[0].style.display = "none";
        }, 3000);
    }

    render() {
        return (
            <section className="loader">
                <DevIcon className="flip-vertical-right" icon='javascript' style={devIconStyle} />
            </section>
        )
    }
}

export default Loader;