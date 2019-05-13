import React, { Component } from 'react';
import './Nav.css'

class Nav extends Component {
    render() {
        return (

            <nav id="menu">
            <ul>
                <li className="menuAccueil"><a className="scrollFluide" href="#home">Accueil</a></li>
                <li className="menuFormations"><a className="scrollFluide" href="#formations">Formations</a></li>
                <li className="menuProjetEnCours"><a className="scrollFluide" href="#otakuProject">Mon poste</a></li>
                <li className="menuProjets"><a className="scrollFluide" href="#projets">Projets</a></li>
                <li className="menuCompetences"><a className="scrollFluide" href="#competences">Compétences</a></li>
                <li className="menuHobbies"><a className="scrollFluide" href="#hobbies">Goût prononcé pour...</a></li>
                <li className="menuCv"><a className="scrollFluide" href="http://floriansahbi.com/ressources/fsc/cvFlorianSahbi.pdf"
                        target="blank">Télécharger le CV</a></li>
            </ul>
        </nav>
        )
    }
}

export default Nav; // Don’t forget to use export default!