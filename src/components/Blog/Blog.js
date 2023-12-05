import React from 'react'
import './Blog.css';

export default function Blog() {
    return (
        <div>
            <div class="pt-100">
                <div class="blog-area blog-area-five pb-70">
                    <div class="container">
                        <div class="section-title section-title-five">
                            <span>Blog</span>
                            <h2>Latest News From Our Blog</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus</p>
                        </div>
                        <div class="row">
                            <div class="col-lg-4 col-md-6">
                                <div class="single-blog">
                                    <a href="/blog-details/">
                                        <img data-cfsrc="/images/blog/blog1.jpg" alt="Image" src="https://flexa-react.envytheme.com/images/blog/blog1.jpg" />
                                    </a>
                                    <div class="blog-content">
                                        <ul>
                                            <li>10 April 2020</li>
                                            <li><a href="/index6/#">By Admin</a>
                                            </li>
                                        </ul>
                                        <a href="/blog-details/">
                                            <h3>2020 Insurance Trends And Possible Challenge</h3>
                                        </a>
                                        <a class="read-more" href="/blog-details/">Read More <i class="bx bx-plus">
                                        </i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6">
                                <div class="single-blog">
                                    <a href="/blog-details/">
                                        <img data-cfsrc="/images/blog/blog2.jpg" alt="Image" src="https://flexa-react.envytheme.com/images/blog/blog2.jpg" />
                                    </a>
                                    <div class="blog-content">
                                        <ul>
                                            <li>11 April 2020</li>
                                            <li>
                                                <a href="/index6/#">By Admin</a>
                                            </li>
                                        </ul>
                                        <a href="/blog-details/">
                                            <h3>Global Trends In The Life Insurance Industry</h3>
                                        </a>
                                        <a class="read-more" href="/blog-details/">Read More <i class="bx bx-plus">
                                        </i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                                <div class="single-blog">
                                    <a href="/blog-details/">
                                        <img data-cfsrc="/images/blog/blog3.jpg" alt="Image" src="https://flexa-react.envytheme.com/images/blog/blog3.jpg" />
                                    </a>
                                    <div class="blog-content">
                                        <ul>
                                            <li>13 April 2020</li>
                                            <li>
                                                <a href="/index6/#">By Admin</a>
                                            </li>
                                        </ul>
                                        <a href="/blog-details/">
                                            <h3>Where And How To Watch Live Stream Today</h3>
                                        </a>
                                        <a class="read-more" href="/blog-details/">Read More <i class="bx bx-plus">
                                        </i>
                                        </a>
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
