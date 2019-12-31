import React, { Component } from 'react';
import Link from 'next/link';
import VisibilitySensor from "react-visibility-sensor";
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    dots: true,
    autoplayHoverPause: true,
    items: 1,
    smartSpeed: 750,
    autoplay: true,
    mouseDrag: false,
    navText: [
        "<i class='fas fa-arrow-left'></i>",
        "<i class='fas fa-arrow-right'></i>"
    ]
}

class Banner extends Component {
    state = { 
        display: false    
    };

    componentDidMount(){ 
        this.setState({ display: true }) 
    }
    render() {
        return (
            <React.Fragment>
            {this.state.display ? <OwlCarousel 
                className="home-slides owl-carousel owl-theme"
                {...options}
            >
                <div className="main-banner-two">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <VisibilitySensor>
                                    {({ isVisible }) => (
                                        <div className="row align-items-center">
                                            <div className="col-lg-6">
                                                <div className="banner-image">
                                                    <div 
                                                        className={
                                                            `circle ${isVisible ? "animated zoomIn" : ''}`
                                                        }
                                                    ></div>
                                                    <img 
                                                        src={require("../../images/women.png")} 
                                                        alt="image" 
                                                        className={
                                                            isVisible ? "animated fadeInUp" : ''
                                                        }
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="main-banner-content">
                                                    <span
                                                        className={
                                                            isVisible ? "animated fadeInUp" : ''
                                                        }
                                                    >
                                                        New Inspiration 2019
                                                    </span>
                                                    <h1
                                                        className={
                                                            isVisible ? "animated fadeInUp" : ''
                                                        }
                                                    >
                                                        CLOTHING MADE FOR YOU!
                                                    </h1>
                                                    <p
                                                        className={
                                                            isVisible ? "animated fadeInUp" : ''
                                                        }
                                                    >
                                                        Trending from men and women style collection
                                                    </p>
                                                    
                                                    <Link href="#">
                                                        <a 
                                                            className={
                                                                `btn btn-primary ${isVisible ? "animated fadeInUp" : ''}`
                                                            }
                                                        >
                                                            Shop Women's
                                                        </a>
                                                    </Link>

                                                    <Link href="#">
                                                        <a 
                                                            className={
                                                                `btn btn-light ${isVisible ? "animated fadeInUp" : ''}`
                                                            }
                                                        >
                                                            Shop Men's
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </VisibilitySensor>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="main-banner-two">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <VisibilitySensor>
                                    {({ isVisible }) => (
                                        <div className="row align-items-center">
                                            <div className="col-lg-6">
                                                <div className="banner-image">
                                                    <div 
                                                        className={
                                                            `circle ${isVisible ? "animated zoomIn" : ''}`
                                                        }
                                                    ></div>
                                                    <img 
                                                        src={require("../../images/women2.png")} 
                                                        alt="image" 
                                                        className={
                                                            isVisible ? "animated fadeInUp" : ''
                                                        }
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="main-banner-content">
                                                    <span
                                                        className={
                                                            isVisible ? "animated fadeInUp" : ''
                                                        }
                                                    >
                                                        New Inspiration 2019
                                                    </span>
                                                    <h1
                                                        className={
                                                            isVisible ? "animated fadeInUp" : ''
                                                        }
                                                    >
                                                        CLOTHING MADE FOR YOU!
                                                    </h1>
                                                    <p
                                                        className={
                                                            isVisible ? "animated fadeInUp" : ''
                                                        }
                                                    >
                                                        Trending from men and women style collection
                                                    </p>
                                                    
                                                    <Link href="#">
                                                        <a 
                                                            className={
                                                                `btn btn-primary ${isVisible ? "animated fadeInUp" : ''}`
                                                            }
                                                        >
                                                            Shop Women's
                                                        </a>
                                                    </Link>

                                                    <Link href="#">
                                                        <a 
                                                            className={
                                                                `btn btn-light ${isVisible ? "animated fadeInUp" : ''}`
                                                            }
                                                        >
                                                            Shop Men's
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </VisibilitySensor>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="main-banner-two">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <VisibilitySensor>
                                    {({ isVisible }) => (
                                        <div className="row align-items-center">
                                            <div className="col-lg-6">
                                                <div className="banner-image">
                                                    <div 
                                                        className={
                                                            `circle ${isVisible ? "animated zoomIn" : ' '}`
                                                        }
                                                    ></div>
                                                    <img 
                                                        src={require("../../images/women.png")} 
                                                        alt="image" 
                                                        className={
                                                            isVisible ? "animated fadeInUp" : ''
                                                        }
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="main-banner-content">
                                                    <span
                                                        className={
                                                            isVisible ? "animated fadeInUp" : ''
                                                        }
                                                    >
                                                        New Inspiration 2019
                                                    </span>
                                                    <h1
                                                        className={
                                                            isVisible ? "animated fadeInUp" : ''
                                                        }
                                                    >
                                                        CLOTHING MADE FOR YOU!
                                                    </h1>
                                                    <p
                                                        className={
                                                            isVisible ? "animated fadeInUp" : ''
                                                        }
                                                    >
                                                        Trending from men and women style collection
                                                    </p>
                                                    
                                                    <Link href="#">
                                                        <a 
                                                            className={
                                                                `btn btn-primary ${isVisible ? "animated fadeInUp" : ''}`
                                                            }
                                                        >
                                                            Shop Women's
                                                        </a>
                                                    </Link>

                                                    <Link href="#">
                                                        <a 
                                                            className={
                                                                `btn btn-light ${isVisible ? "animated fadeInUp" : ''}`
                                                            }
                                                        >
                                                            Shop Men's
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </VisibilitySensor>
                            </div>
                        </div>
                    </div>
                </div>
            </OwlCarousel> : ''}
            </React.Fragment>
        );
    }
}

export default Banner;
