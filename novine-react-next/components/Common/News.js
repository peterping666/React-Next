import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
        "<i class='fas fa-chevron-left'></i>",
        "<i class='fas fa-chevron-right'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        1024: {
            items: 3,
        }
    }
}

class News extends Component {
    state = { 
        display: false,
        panel: true
    };

    componentDidMount(){ 
        this.setState({ display: true }) 
    }

    render() {
        return (
            <section className="news-area ptb-60">
                <div className="container">
                    <div className="section-title">
                        <h2><span className="dot"></span> Comero News</h2>
                    </div>

                    <div className="row">
                        {this.state.display ? <OwlCarousel 
                            className="news-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="col-lg-12 col-md-12">
                                <div className="single-news-post">
                                    <div className="news-image">
                                        <Link href="#">
                                            <a>
                                                <img src={require("../../images/blog-img1.jpg")} alt="image" />
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="news-content">
                                        <h3>
                                            <Link href="#">
                                                <a>Styling White Jeans after Labor Day</a>
                                            </Link>
                                        </h3>
                                        <span className="author">By <a href="#">Admin</a></span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <Link href="#">
                                            <a className="btn btn-light">Read More</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-news-post">
                                    <div className="news-image">
                                        <Link href="#">
                                            <a>
                                                <img src={require("../../images/blog-img2.jpg")} alt="image" />
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="news-content">
                                        <h3>
                                            <Link href="#">
                                                <a>Styling White Jeans after Labor Day</a>
                                            </Link>
                                        </h3>
                                        <span className="author">By <a href="#">Admin</a></span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <Link href="#">
                                            <a className="btn btn-light">Read More</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-news-post">
                                    <div className="news-image">
                                        <Link href="#">
                                            <a>
                                                <img src={require("../../images/blog-img1.jpg")} alt="image" />
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="news-content">
                                        <h3>
                                            <Link href="#">
                                                <a>Styling White Jeans after Labor Day</a>
                                            </Link>
                                        </h3>
                                        <span className="author">By <a href="#">Admin</a></span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <Link href="#">
                                            <a className="btn btn-light">Read More</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-news-post">
                                    <div className="news-image">
                                        <Link href="#">
                                            <a>
                                                <img src={require("../../images/blog-img2.jpg")} alt="image" />
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="news-content">
                                        <h3>
                                            <Link href="#">
                                                <a>Styling White Jeans after Labor Day</a>
                                            </Link>
                                        </h3>
                                        <span className="author">By <a href="#">Admin</a></span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <Link href="#">
                                            <a className="btn btn-light">Read More</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-news-post">
                                    <div className="news-image">
                                        <Link href="#">
                                            <a>
                                                <img src={require("../../images/blog-img1.jpg")} alt="image" />
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="news-content">
                                        <h3>
                                            <Link href="#">
                                                <a>Styling White Jeans after Labor Day</a>
                                            </Link>
                                        </h3>
                                        <span className="author">By <a href="#">Admin</a></span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <Link href="#">
                                            <a className="btn btn-light">Read More</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel> : ''}
                    </div>
                </div>
            </section>
        );
    }
}

export default News;
