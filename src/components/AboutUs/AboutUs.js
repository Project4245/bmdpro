import React from 'react'
import './AboutUs.css';


export default function AboutUs() {
    return (
        <div>
            <div className="about-area-six ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6"><div className="about-content-six">
                            <span>About Us</span>
                            <h2>Insurance Always Ready to Protect your Life &amp; Business</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam distinctio soluta ut dolore ratione hic qui totam velit dolores nihil voluptas neque expedita itaque, reprehenderit natus perferendis autem! Quae, ea.</p>
                            <div className="row">
                                <div className="col-lg-6 col-sm-6">
                                    <ul className="mb-20">
                                        <li>Affordable Prices</li>
                                        <li>Competent Professionals</li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 col-sm-6"><ul>
                                    <li>24/7 Friendly Support</li>
                                    <li>Insurance Payment</li>
                                </ul>
                                </div>
                            </div>
                            <a className="default-btn btn-six" href="/about/">About Us</a>
                        </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-img-6">
                                {/* <img src="/images/about-img-6.jpg" alt="Image"> */}

                                    <div className="video">

                                        <div className="video-btn">
                                            <i className="flaticon-play-button"></i>
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
