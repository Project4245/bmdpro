import React from 'react'
import './GetAFreeQuote.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';


export default function GetAFreeQuote() {
    return (
        <div>
            <div className="get-quat-area get-quat-area-three get-quat-area-five ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="get-quat-content">
                                <div className="section-title">
                                    <h2>Get A Free Quote</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Quis ipsum.</p>
                                </div>
                                <ul>

                                    <li className="">
                                        <i><FontAwesomeIcon icon={faLocationDot} />
                                        </i><h3>Head Office Address</h3>
                                        <p>123, Western Road, Melbourne Australia</p>
                                    </li>
                                    <li className="">

                                        <i><FontAwesomeIcon icon={faPhone} /> </i>

                                        <h3>Head Office Address</h3>
                                        <p>+822456974</p>
                                    </li>
                                    <li className="">
                                        <i><FontAwesomeIcon icon={faEnvelope} /></i>
                                        <h3>Mail Us For Information</h3>
                                        <p>hello@flexa.com</p></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="quat-form">
                                <div className="tab">
                                    <ul className="tabs">
                                        <li className="">
                                            <div className="dot">
                                            </div> Car</li>
                                        <li className="current">
                                            <div className="dot">
                                            </div> Home</li>
                                        <li className="">
                                            <div className="dot">
                                            </div> Life</li>
                                        <li className="">
                                            <div className="dot">
                                            </div> Health</li>
                                    </ul>
                                    <div className="tab_content">
                                        <div id="tab2" className="tabs_item" style={{ display: 'none' }}>
                                            <p>Start with your zip code to compare car insurance</p>
                                            <div className="form">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="Name" placeholder="Your Name" />

                                                </div>
                                                <div className="form-group">
                                                    <input type="email" className="form-control" id="Email" placeholder="Your Email" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="Number" placeholder="Your Number" />
                                                </div><div className="form-group">
                                                    <div className="select-box">
                                                        <i className="flaticon-avatar">
                                                        </i><select className="form-select">
                                                            <option value="5">Property Type</option>
                                                            <option value="1">Home Property</option>
                                                            <option value="2">Health Insurance</option>
                                                            <option value="0">Car Insurance</option>
                                                            <option value="3">Life Insurance</option>
                                                            <option value="4">Home Insurance</option>
                                                        </select>
                                                    </div></div><button type="submit" className="default-btn btn-five">Start Saving Today</button>
                                                <ul className="ratings">
                                                    <li className="">45 Ratings</li>
                                                    <li className="right">Already Member?<a href="/sign-in/">SIGN IN</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p>Start with your zip code to compare home insurance</p>
                                        <div className="form">
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="Name2" placeholder="Your Name" />
                                            </div>
                                            <div className="form-group">
                                                <input type="email" className="form-control" id="Email2" placeholder="Your Email" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="Number2" placeholder="Your Number" />
                                            </div>
                                            <div className="form-group"><div className="select-box">
                                                <i className="flaticon-avatar"></i><select className="form-select">
                                                    <option value="5">Home Property</option>
                                                    <option value="1">Property Type </option>
                                                    <option value="2">Health Insurance</option>
                                                    <option value="0">Car Insurance</option>
                                                    <option value="3">Life Insurance</option>
                                                    <option value="4">Home Insurance</option>
                                                </select>
                                            </div>
                                            </div>
                                            <button type="submit" className="default-btn btn-five">Start Saving Today</button>
                                            <ul><li className="">45 Ratings</li>
                                                <li className="right">Already Member?<a href="/sign-in/">SIGN IN</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="tab1" className="tabs_item animated fadeInUp animated" style={{ display: 'block' }}>
                                        {/* <div id="tab3" className="tabs_item animated" style={{ display: 'none' }}>
                                            <p>Start with your zip code to compare life insurance</p>
                                            <div className="form">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="Name3" placeholder="Your Name" />
                                                </div><div className="form-group">
                                                    <input type="email" className="form-control" id="Email3" placeholder="Your Email" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="Number3" placeholder="Your Number" />
                                                </div>
                                                <div className="form-group"><div className="select-box">
                                                    <i className="flaticon-avatar"></i><select className="form-select">
                                                        <option value="5">Life Insurance</option>
                                                        <option value="1">Home Property</option><option value="2">Health Insurance</option>
                                                        <option value="0">Car Insurance</option><option value="3">Property Type</option>
                                                        <option value="4">Home Insurance</option>
                                                    </select></div>
                                                </div>
                                                <button type="submit" className="default-btn btn-five">Start Saving Today</button>
                                                <ul><li className="">45 Ratings</li>
                                                    <li className="right">Already Member?<a href="/sign-in/">SIGN IN</a></li>
                                                </ul>
                                            </div>
                                        </div> */}
                                        <div id="tab4" className="tabs_item animated" style={{ display: 'none' }}><p>Start with your zip code to compare health insurance</p>
                                            <div className="form">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="Name4" placeholder="Your Name" />

                                                </div>
                                                <div className="form-group">
                                                    <input type="email" className="form-control" id="Email4" placeholder="Your Email" />
                                                </div><div className="form-group"><input type="text" className="form-control" id="Number4" placeholder="Your Number" />

                                                </div>
                                                <div className="form-group">
                                                    <div className="select-box">
                                                        <i className="flaticon-avatar"></i>
                                                        <select className="form-select"><option value="5">Property Health</option>
                                                            <option value="1">Home Property</option>
                                                            <option value="2">Health Insurance</option>
                                                            <option value="0">Car Insurance</option>
                                                            <option value="3">Life Insurance</option>
                                                            <option value="4">Home Insurance</option>
                                                        </select></div>
                                                </div><button type="submit" className="default-btn btn-five">Start Saving Today</button>
                                                <ul>
                                                    <li className="">45 Ratings</li>
                                                    <li className="right">Already Member?<a href="/sign-in/">SIGN IN</a>
                                                    </li>
                                                </ul>


                                            </div>
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
