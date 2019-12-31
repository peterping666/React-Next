import React, { Component } from 'react';
import Link from "next/link";

class Footer extends Component {
    render() {
        return (
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <Link href="index.html">
                                        <a>
                                            <img src={require("../../images/logo.png")} alt="logo" />
                                        </a>
                                    </Link>
                                </div>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Quick Links</h3>

                                <ul className="quick-links">
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">FAQ's</a></li>
                                    <li><a href="#">Customer Services</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Information</h3>

                                <ul className="information-links">
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Sizing Guide</a></li>
                                    <li><a href="#">Customer Services</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Contact Us</h3>

                                <ul className="footer-contact-info">
                                    <li><i className="fas fa-map-marker-alt"></i> Location: 2750 Quadra Street Victoria, Canada</li>
                                    <li><i className="fas fa-phone"></i> Call Us: <a href="#">(+123) 456-7898</a></li>
                                    <li><i className="far fa-envelope"></i> Email Us: <a href="#">support@comero.com</a></li>
                                    <li><i className="fas fa-fax"></i> Fax: <a href="#">+123456</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <p>Copyrite @ 2019 Novine. All Rights Reserved</p>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <ul className="payment-card">
                                    <li>
                                        <a href="#" target="_blank">
                                            <img src={require("../../images/visa.png")} alt="image" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <img src={require("../../images/mastercard.png")} alt="image" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <img src={require("../../images/mastercard2.png")} alt="image" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <img src={require("../../images/visa2.png")} alt="image" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <img src={require("../../images/expresscard.png")} alt="image" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
