import React, { Component } from 'react';
import Link from 'next/link';

class Banner extends Component {
    render() {
        return (
            <div className="main-banner main-banner-three item-bg4">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="main-banner-content white-color">
                                <span>New Inspiration 2019</span>
                                <h1>CLOTHING MADE FOR YOU!</h1>
                                <p>Trending from men and women style collection</p>

                                <Link href="#">
                                    <a className="btn btn-primary">Shop Women's</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;
