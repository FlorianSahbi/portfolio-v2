import React, { Component } from 'react';
import './CurrentJob.css'
import axios from 'axios';

class CurrentJob extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activePreview: "/images/previews/previewAppartoo4.png",
            error: null,
            isLoaded: false,
            jobs: []
        }
    }

    async componentDidMount() {
        try {
            const response = await axios.get('/api/jobs');
            console.log(response);
            this.setState({
                isLoaded: true,
                jobs: response.data
            });
        } catch (error) {
            this.setState({
                isLoaded: true,
                error: error
            });
        }
    }

    renderNavButtons(job) {
        return job.previews.map(preview => (
            <img src={preview}
                alt={job.alt}
                onClick={() => this.showPreview(preview)}
            />
        ))
    }

    showPreview(photoUrl) {
        this.setState({
            activePreview: photoUrl
        })
    }

    render() {
        if (this.state.jobs.length > 0) {
            return (
                <section className="currentJob">
                    <div className="currentJobWrapper">
                        <div className="currentJobDescription">
                            <h1>Mon poste - {this.state.jobs[0].title} : {this.state.jobs[0].companyName}</h1>
                            <p>
                                {this.state.jobs[0].presentation}
                                - {this.state.jobs[0].missions[0]}
                                - {this.state.jobs[0].missions[1]}
                                - {this.state.jobs[0].missions[2]}
                                - {this.state.jobs[0].missions[3]}
                                - {this.state.jobs[0].missions[4]}
                                - {this.state.jobs[0].missions[5]}
                            </p>
                        </div>
                        <div className="currentJobPreview">
                            <img className="currentJobActivePreview" src={this.state.activePreview} alt={this.state.jobs[0].alt} />
                            <div className="currentJobNav">
                                {this.renderNavButtons(this.state.jobs[0])}
                            </div>
                        </div>
                    </div>
                </section>
            )
        } else {
            return (
                <section className="currentJob">
                    <div className="currentJobWrapper">

                    </div>
                </section>
            )
        }
    }
}

export default CurrentJob;