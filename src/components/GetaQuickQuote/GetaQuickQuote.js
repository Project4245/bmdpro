import React from 'react'
import './GetaQuickQuote.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCar, faCity, faJetFighterUp, faCircleUser, faWindowRestore } from '@fortawesome/free-solid-svg-icons';

export default function GetaQuickQuote() {
    return (
        <div className="container">
            <div className="find-an-agent-area pb-100">
                <div className="container">
                    <div className="find-an-agent-bg">
                        <div className="row align-items-center">
                            <div className="col-lg-4">
                                <div className="find-an-agent-content">
                                    <h2>Get a Quick Quote</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error magni, debitis dicta, tempore obcaecati facere in saepe rem, recusandae sapiente nobis esse.</p>
                                    <a className="default-btn btn-five" href="/contact/">Find An Agent</a>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="col-lg-4 col-sm-6 p-0">
                                        <div className="single-find-an-agent"><i><FontAwesomeIcon icon={faHouse} /></i>
                                            <a href="/insurance-details/">Home</a>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6 p-0">
                                        <div className="single-find-an-agent">
                                            <i>
                                                <FontAwesomeIcon icon={faCar} />
                                            </i>
                                            <a href="/insurance-details/">Auto</a>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6 p-0">
                                        <div className="single-find-an-agent">
                                            <i>
                                                <FontAwesomeIcon icon={faCity} />
                                            </i>
                                            <a href="/insurance-details/">Business</a>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6 p-0">
                                        <div className="single-find-an-agent">
                                            <i>
                                                <FontAwesomeIcon icon={faJetFighterUp} />
                                            </i>
                                            <a href="/insurance-details/">Travel</a>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6 p-0">
                                        <div className="single-find-an-agent">
                                            <i>
                                                <FontAwesomeIcon icon={faCircleUser} />
                                            </i>
                                            <a href="/insurance-details/">Life</a>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6 p-0">
                                        <div className="single-find-an-agent">
                                            <i>
                                                <FontAwesomeIcon icon={faWindowRestore} />
                                            </i>
                                            <a href="/insurance-details/">More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
