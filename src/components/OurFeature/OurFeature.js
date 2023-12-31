import React from 'react'
import './OurFeature.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointUp, faHandHoldingDroplet,faHospital } from '@fortawesome/free-solid-svg-icons';

export default function OurFeature() {
    return (
        <div>
            <div className="choose-us-area-three choose-us-area-five pt-100 pb-70">
                <div className="container">
                    <div className="section-title section-title-five">
                        <span>Our Features</span>
                        <h2>Take The Worry Out of Life With Insurance Protection</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-choose">
                                <span><FontAwesomeIcon icon={faHandPointUp} /></span>
                                <h3>Peace Of Mind</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-choose">
                                <span>
                                    <FontAwesomeIcon icon={faHandHoldingDroplet} />
                                </span>
                                <h3>Set For Life</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
                            <div className="single-choose">
                                <span>
                                <FontAwesomeIcon icon={faHospital} />
                                </span>
                                <h3>Tailored Covered</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
