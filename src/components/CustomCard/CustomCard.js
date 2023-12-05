import React from 'react'
import './CustomCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCrown, faFlag, faFaceSmileBeam } from '@fortawesome/free-solid-svg-icons';

export default function card() {
    return (
        <div>
            <div className="counter-area counter-area-three counter-area-six pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-counter">
                                <i><FontAwesomeIcon icon={faCheck} />
                                </i><h2>950 <span className="target">+</span>
                                </h2>
                                <p>Completed Projects</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-counter">
                                <i>
                                    <FontAwesomeIcon icon={faCrown} />
                                </i>
                                <h2>850 <span className="target">+</span>
                                </h2>
                                <p>Winning Awards</p>
                            </div>
                        </div><div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-counter">
                                <i>
                                    <FontAwesomeIcon icon={faFaceSmileBeam} />
                                </i><h2>550 <span className="traget">+</span>
                                </h2>
                                <p>Clients</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-counter">
                                <i>
                                    <FontAwesomeIcon icon={faFlag} />
                                </i>
                                <h2>440 <span className="target">+</span>
                                </h2>
                                <p>Countries</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
