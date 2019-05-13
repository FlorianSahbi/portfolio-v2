import React, { Component } from 'react';
import './Header.css'

class Projects extends Component {
  render() {
    return (

      <header id="home" className="home">
        <div className="homeContent">
          <div className="idSite">
            <h1>Sahbi<br />Florian</h1>
            <h2>Développeur web</h2>
          </div>
          <div className="blankElem">
            <span>
            </span>
          </div>
          {/* <div className="continuerVisite hvr-hang hangalways">
            <a className="scrollFluide" href="#formations">
              <p>Qui suis-je ? Où vais-je ? Que fais-je ?</p>
            </a>
          </div> */}
        </div>
      </header>
    )
  }
}

export default Projects; // Don’t forget to use export default!