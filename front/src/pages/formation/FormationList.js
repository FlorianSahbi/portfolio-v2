import React, { Component } from 'react';
import './FormationList.css'
import Formation from './Formation';
import axios from 'axios';

class FormationList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            formation: []
        }
    }

    async componentDidMount() {
        try {
            const response = await axios.get('/api/formation');
            this.setState({
                isLoaded: true,
                formation: response.data
            });
        } catch (error) {
            this.setState({
                isLoaded: true,
                error: error
            });
        }
    }

    render() {
        if (this.state.formation.length > 0) {
            return (
                <section className="formationList">
                    <div className="formationWrapper">
                        <Formation
                            logo={this.state.formation[0].logo}
                            alt={this.state.formation[0].alt}
                            place={this.state.formation[0].place}
                            name={this.state.formation[0].name}
                            beginDate={this.state.formation[0].beginDate}
                            endDate={this.state.formation[0].endDate}
                        />
                    </div>
                </section >
            )
        } else {
            return (
                <section className="formationList">
                    <div className="formationWrapper">
                    </div>
                </section >
            )
        }
    }
}

export default FormationList;