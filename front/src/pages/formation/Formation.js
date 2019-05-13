import React, { Component } from 'react';
import './Formation.css'
import axios from 'axios';

class Formation extends Component {

    constructor(props) {
        super(props)
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
        return (
            <div className="formation">

                <div className="formationPreview">
                    <img src={this.props.logo} alt={this.props.alt} />
                </div>

                <div className="formationDescription">
                    <span className="infoIcon" role="img" aria-label="icone">
                        📅  {this.props.beginDate} > {this.props.endDate}
                    </span>
                    <span className="infoIcon" role="img" aria-label="icone">
                        🎓  {this.props.name}
                    </span>
                    <span className="infoIcon" role="img" aria-label="icone">
                        📍  {this.props.place}
                    </span>
                </div>
            </div>
        )
    }
}

export default Formation;