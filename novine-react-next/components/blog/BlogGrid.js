import React, { Component } from 'react';
import Link from 'next/link';

export class BlogGrid extends Component {
    render() {
        return (
            <section className="news-area ptb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <Link href="/blog-details">
                                        <a><img src={require("../../images/blog1.jpg")} alt="image" /></a>
                                    </Link>

                                    <div className="post-tag">
                                        <a href="#">Technology</a>
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <span className="date">25 Feb, 2019</span>
                                    <h3><a href="#">The Most Popular New top Business Apps</a></h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.</p>
                                    <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <Link href="/blog-details">
                                        <a><img src={require("../../images/blog2.jpg")} alt="image" /></a>
                                    </Link>

                                    <div className="post-tag">
                                        <a href="#">Agency</a>
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <span className="date">27 Feb, 2019</span>
                                    <h3><a href="#">The Best Marketing top use Management Tools</a></h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.</p>
                                    <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <Link href="/blog-details">
                                        <a><img src={require("../../images/blog3.jpg")} alt="image" /></a>
                                    </Link>

                                    <div className="post-tag">
                                        <a href="#">IT</a>
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <span className="date">28 Feb, 2019</span>
                                    <h3><a href="#">3 WooCommerce Plugins to Boost Sales</a></h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.</p>
                                    <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <Link href="/blog-details">
                                        <a><img src={require("../../images/blog4.jpg")} alt="image" /></a>
                                    </Link>

                                    <div className="post-tag">
                                        <a href="#">Creative</a>
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <span className="date">29 Feb, 2019</span>
                                    <h3><a href="#">Top 21 Must-Read Blogs For Creative Agencies</a></h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.</p>
                                    <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <Link href="/blog-details">
                                        <a><img src={require("../../images/blog5.jpg")} alt="image" /></a>
                                    </Link>

                                    <div className="post-tag">
                                        <a href="#">Technology</a>
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <span className="date">25 Feb, 2019</span>
                                    <h3><a href="#">The Most Popular New top Business Apps</a></h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.</p>
                                    <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <Link href="/blog-details">
                                        <a><img src={require("../../images/blog6.jpg")} alt="image" /></a>
                                    </Link>

                                    <div className="post-tag">
                                        <a href="#">Agency</a>
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <span className="date">27 Feb, 2019</span>
                                    <h3><a href="#">The Best Marketing top use Management Tools</a></h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.</p>
                                    <a href="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="pagination-area">
                                <a href="#" className="prev page-numbers"><i className="fas fa-angle-double-left"></i></a>
                                <a href="#" className="page-numbers">1</a>
                                <span className="page-numbers current" aria-current="page">2</span>
                                <a href="#" className="page-numbers">3</a>
                                <a href="#" className="page-numbers">4</a>
                                <a href="#" className="next page-numbers"><i className="fas fa-angle-double-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default BlogGrid;
