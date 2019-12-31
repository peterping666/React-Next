import React, { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { addQuantityWithNumber } from '../../store/actions/cartActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SizeGuide from './SizeGuide';
import Shipping from './Shipping';

class ProductContent extends Component {
    state = {
        qty: 1,
        max: 10,
        min: 1,
        sizeGuide: false,
        shipModal: false
    };

    handleAddToCartFromView = () => {
        this.props.addQuantityWithNumber(8, this.state.qty); 

        toast.success('Added to the cart', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }

    IncrementItem = () => {
        this.setState(prevState => {
            if(prevState.qty < 10) {
                return {
                    qty: prevState.qty + 1
                }
            } else {
                return null;
            }
        });
    }

    DecreaseItem = () => {
        this.setState(prevState => {
            if(prevState.qty > 1) {
                return {
                    qty: prevState.qty - 1
                }
            } else {
                return null;
            }
        });
    }

    openSizeGuide = () => {
        this.setState({ sizeGuide: true });
    }

    closeSizeGuide = () => {
        this.setState({ sizeGuide: false });
    }

    openShipModal = () => {
        this.setState({ shipModal: true });
    }

    closeShipModal = () => {
        this.setState({ shipModal: false });
    }

    render() {
        const { sizeGuide, shipModal } = this.state;
        return (
            <React.Fragment>
                <div className="col-lg-6 col-md-6">
                    <ToastContainer />
                    <div className="product-details-content">
                        <h3>Belted chino trousers polo</h3>

                        <div className="price">
                            <span className="new-price">$191.00</span>
                        </div>

                        <div className="product-review">
                            <div className="rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                            <Link href="#">
                                <a className="rating-count">3 reviews</a>
                            </Link>
                        </div>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>

                        <ul className="product-info">
                            <li><span>Vendor:</span> <a href="#">Lereve</a></li>
                            <li><span>Availability:</span> <a href="#">In stock (7 items)</a></li>
                            <li><span>Product Type:</span> <a href="#">T-Shirt</a></li>
                        </ul>

                        <div className="product-color-switch">
                            <h4>Color:</h4>

                            <ul>
                                <li><a href="#" title="Black" className="color-black"></a></li>
                                <li><a href="#" title="White" className="color-white"></a></li>
                                <li className="active"><a href="#" title="Green" className="color-green"></a></li>
                                <li><a href="#" title="Yellow Green" className="color-yellowgreen"></a></li>
                                <li><a href="#" title="Teal" className="color-teal"></a></li>
                            </ul>
                        </div>

                        <div className="product-size-wrapper">
                            <h4>Size:</h4>

                            <ul>
                                <li><a href="#">XS</a></li>
                                <li className="active"><a href="#">S</a></li>
                                <li><a href="#">M</a></li>
                                <li><a href="#">XL</a></li>
                                <li><a href="#">XXL</a></li>
                            </ul>
                        </div>

                        <div className="product-info-btn">
                            <Link href="#">
                                <a
                                    onClick={e => {
                                        e.preventDefault(); 
                                        this.openSizeGuide();
                                    }}
                                >
                                    <i className="fas fa-crop"></i> Size guide
                                </a>
                            </Link>
                            <Link href="#">
                                <a
                                    onClick={e => {
                                        e.preventDefault(); 
                                        this.openShipModal();
                                    }}
                                >
                                    <i className="fas fa-truck"></i> Shipping
                                </a>
                            </Link>
                            <a href="#"><i className="far fa-envelope"></i> Ask about this product</a>
                        </div>

                        <div className="product-add-to-cart">
                            <div className="input-counter">
                                <span 
                                    className="minus-btn"
                                    onClick={this.DecreaseItem}
                                >
                                    <i className="fas fa-minus"></i>
                                </span>
                                <input 
                                    type="text" 
                                    value={this.state.qty}
                                    min={this.state.min}
                                    max={this.state.max} 
                                    onChange={e => this.setState({ qty: e.target.value })}
                                />
                                <span 
                                    className="plus-btn"
                                    onClick={this.IncrementItem}
                                >
                                    <i className="fas fa-plus"></i>
                                </span>
                            </div>

                            <button 
                                type="submit" 
                                className="btn btn-primary"
                                onClick={this.handleAddToCartFromView}
                            >
                                <i className="fas fa-cart-plus"></i> Add to Cart
                            </button>
                        </div>

                        <div className="wishlist-compare-btn">
                            <a href="#" className="btn btn-light"><i className="far fa-heart"></i> Add to Wishlist</a>
                            <a href="#" className="btn btn-light"><i className="fas fa-balance-scale"></i> Add to Compare</a>
                        </div>

                        <div className="buy-checkbox-btn">
                            <div className="item">
                                <input className="inp-cbx" id="cbx" type="checkbox" />
                                <label className="cbx" htmlFor="cbx">
                                    <span>
                                        <svg width="12px" height="10px" viewBox="0 0 12 10">
                                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                        </svg>
                                    </span>
                                    <span>I agree with the terms and conditions</span>
                                </label>
                            </div>

                            <div className="item">
                                <a href="#" className="btn btn-primary">Buy it now!</a>
                            </div>
                        </div>

                        <div className="custom-payment-options">
                            <span>Guaranteed safe checkout:</span>

                            <div className="payment-methods">
                                <a href="#">
                                    <img src={require("../../images/payment-image/1.svg")} alt="image" />
                                </a>
                                <a href="#">
                                    <img src={require("../../images/payment-image/2.svg")} alt="image" />
                                </a>
                                <a href="#">
                                    <img src={require("../../images/payment-image/3.svg")} alt="image" />
                                </a>
                                <a href="#">
                                    <img src={require("../../images/payment-image/4.svg")} alt="image" />
                                </a>
                                <a href="#">
                                    <img src={require("../../images/payment-image/5.svg")} alt="image" />
                                </a>
                                <a href="#">
                                    <img src={require("../../images/payment-image/6.svg")} alt="image" />
                                </a>
                                <a href="#">
                                    <img src={require("../../images/payment-image/7.svg")} alt="image" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                { sizeGuide ? <SizeGuide 
                    closeSizeGuide={this.closeSizeGuide} 
                /> : '' }
                { shipModal ? <Shipping closeShipModal={this.closeShipModal} /> : '' }
            </React.Fragment>
        );
    }
}

const mapDispatchToProps= (dispatch)=>{
    return {
        addQuantityWithNumber: (id, qty) => {dispatch(addQuantityWithNumber(id, qty))}
    }
}

export default connect(
    null,
    mapDispatchToProps
)(ProductContent)