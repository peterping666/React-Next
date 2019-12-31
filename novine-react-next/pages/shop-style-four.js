import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import AddsModal from '../components/Modal/AddsModal';
import News from '../components/Common/News';
import Subscribe from '../components/Common/Subscribe';
import Partner from '../components/Common/Partner';
import InstagramPhoto from '../components/Common/InstagramPhoto';
import Banner from '../components/shop-style-four/Banner';
import Facility from '../components/shop-style-four/Facility';
import TrendingProducts from '../components/shop-style-four/TrendingProducts';
import BestSeller from '../components/shop-style-four/BestSellers';
import OfferArea from '../components/shop-style-four/OfferArea';

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Banner />
                <Facility />
                <TrendingProducts />
                <BestSeller />
                <OfferArea />
                <News />
                <Subscribe />
                <Partner />
                <InstagramPhoto />
                <Footer />
                <AddsModal />
            </React.Fragment>
        );
    }
}

export default Index;
