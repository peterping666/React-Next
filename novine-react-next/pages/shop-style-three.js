import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import AddsModal from '../components/Modal/AddsModal';
import Banner from '../components/shop-style-three/Banner';
import OfferArea from '../components/shop-style-three/OfferArea';
import Facility from '../components/shop-style-three/Facility';
import Products from '../components/shop-style-three/Products';
import CategoryProducts from '../components/shop-style-three/CategoryProducts';
import TrendingProducts from '../components/shop-style-three/TrendingProducts';
import BestSeller from '../components/shop-style-three/BestSellers';
import Testimonials from '../components/Common/Testimonials';
import News from '../components/Common/News';
import Subscribe from '../components/Common/Subscribe';
import Partner from '../components/Common/Partner';
import InstagramPhoto from '../components/Common/InstagramPhoto';

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Banner />
                <OfferArea />
                <Facility />
                <Products />
                <CategoryProducts />
                <TrendingProducts />
                <BestSeller />
                <Testimonials />
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
