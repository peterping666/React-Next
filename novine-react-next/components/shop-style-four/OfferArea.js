import React, { Component } from 'react';
import Link from 'next/link';

class OfferArea extends Component {
    render() {
        return (
            <section className="products-offer-area ptb-60">
                <div className="container">
                    <div className="products-offer-content">
                        <span>Limited Time Offer</span>
                        <h1>-40% Off</h1>
                        <p>Get The Best Deals Now</p>
                        <Link href="#">
                            <a className="btn btn-primary">Discover Now</a>
                        </Link>
                    </div>
                </div>
            </section>
        );
    }
}

export default OfferArea;
