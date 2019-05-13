import React, { Component } from 'react';
import { faGithubAlt, faPinterestP, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCode } from '@fortawesome/free-solid-svg-icons';
// import { cir } from '@fortawesome/free-regular-svg-icons'
import './Footer.css'

class Projects extends Component {
    render() {
        return (
            <footer>




                <div className="footerContent">
                    <p>© 2018 - 2019 - Handmade with <span style={{ color: 'red' }}>❤</span> by me.</p>
                    <span className="roro">
                        <FontAwesomeIcon
                                icon={faCircle}
                                size="8x"
                                mask={faCode}
                                transform="shrink-10 left-0 up-0"
                                style={{ color: 'rgba(48, 55, 63, 0.5' }} 
                                spin/>
                    </span>

                    <div className="socialMedia"> 
                        <a href="https://github.com/FlorianSahbi/" target="blank">
                            <FontAwesomeIcon
                                className={"social"}
                                icon={faGithubAlt}
                                size="2x"
                                mask={faCircle}
                                transform="shrink-5 left-0 up-0"
                                style={{ color: '#919497' }} />
                        </a>

                        <a href="https://www.linkedin.com/in/florian-sahbi-8a1182125/" target="blank">
                            <FontAwesomeIcon
                                className={"social"}
                                icon={faLinkedinIn}
                                size="2x"
                                mask={faCircle}
                                transform="shrink-5 left-0 up-0"
                                style={{ color: '#919497' }} />
                        </a>

                        <a href="https://www.pinterest.fr/bokunonamaehaflo/" target="blank">
                            <FontAwesomeIcon
                                className={"social"}
                                icon={faPinterestP}
                                size="2x"
                                mask={faCircle}
                                transform="shrink-5 left-0 up-0"
                                style={{ color: '#919497' }}
                            />
                        </a>
                    </div>

                </div>
            </footer>
        )
    }
}

export default Projects;