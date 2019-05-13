import React, { Component } from 'react';
import './Formation.css'

class FormationNav extends Component {
    render() {
        return (

            <nav className="navFormations">
                <ul>
                    <li id="Hetic" className="dot dotFormation dotHetic hvr-bob">
                        <img src="/images/logos/logoHetic.png" alt="Logo de Hetic" />
                    </li>
                    <li id="Ndlp" className="dot dotFormation dotNdlp hvr-bob">
                        <img src="/images/logos/logoNdlp.png" alt="Logo de NDLP" />
                    </li>
                    <li id="Cachin" className="dot dotFormation dotCachin hvr-bob">
                        <img src="/images/logos/logoCachin.png" alt="Logo de Cachin" />
                    </li>
                </ul>
            </nav>

        )
    }
}

export default FormationNav;