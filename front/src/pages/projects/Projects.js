import React, { Component } from 'react';
import './Projects.css'
import Project from './Project';
import axios from 'axios';

class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedProject: null,
            displayNav: true,
            error: null,
            isLoaded: false,
            projects: []
        };
    }

    async componentDidMount() {
        try {
            const response = await axios.get('/api/projects');
            this.setState({
                isLoaded: true,
                projects: response.data
            });
        } catch (error) {
            this.setState({
                isLoaded: true,
                error: error
            });
        }
    }

    onProjectSelected(projectId) {
        this.setState({
            selectedProject: projectId,
            displayNav: false
        })
    }

    showProjectsNav() {
        this.setState({
            displayNav: true,
            selectedProject: null
        })
    }

    showProject(projectId) {
        return (
            <Project
                id={this.state.projects[projectId]._id}
                formattedName={this.state.projects[projectId].formattedName}
                description={this.state.projects[projectId].description}
                url={this.state.projects[projectId].url}
                buttonLabel={this.state.projects[projectId].buttonLabel}
                type={this.state.projects[projectId].type}
                duree={this.state.projects[projectId].duree}
                dateDebut={this.state.projects[projectId].dateDebut}
                dateFin={this.state.projects[projectId].dateFin}
                preview={this.state.projects[projectId].preview}
                alt={this.state.projects[projectId].alt}
                showProjectsNav={this.showProjectsNav}
            />
        );
    }

    renderProjectNav() {
        return (
            <nav className={"projectNav " + (this.state.displayNav ? '' : 'hide')}>
                <ul>
                    {this.state.projects.map(project => {
                        if (project._id > 0)
                            return (<li onClick={() => this.onProjectSelected(project._id)}>
                                <h2>
                                    {project.formattedName}
                                </h2>
                                <div className="filter"></div>
                                <img className="navButton" src={project.preview} alt={project.alt} />
                            </li>)

                    })
                    }
                </ul>
            </nav>
        )
    }

    render() {
        return (
            <section id="projets" className="projets">
                <div className={"closeScreen " + (this.state.displayNav ? 'hide' : '')}
                    onClick={() => this.showProjectsNav()}></div>
                <div className="projectsWrapper">

                    <div className={"closeProjectButton " + (this.state.displayNav ? 'hide' : '')}
                        onClick={() => this.showProjectsNav()}>
                    Retour
                    </div>
                {this.state.selectedProject && this.showProject(this.state.selectedProject)}
                {this.renderProjectNav()}
                </div>
            </section >
        )
    }
}

export default Projects;
