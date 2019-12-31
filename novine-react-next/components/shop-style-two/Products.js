import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../store/actions/cartActions';
import Link from 'next/link';
import ReactTooltip from 'react-tooltip'
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QuickView from '../Modal/QuickView';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    dots: false,
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
        576: {
            items: 2,
        },
        768: {
            items: 2,
        },
        1024: {
            items: 3,
        },
        1200: {
            items: 4,
        }
    }
}

class Products extends Component {

    state = {
        modalOpen: false,
        modalImage: '',
        price: 0,
        idd: null,
        display: false,
        panel: true
    };

    handleAddToCart = (id) => {
        this.props.addToCart(id); 

        toast.success('Added to the cart', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }

    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.remove("fadeInUp");
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        document.getElementById(tabNmae).className += " fadeInUp animated";
        evt.currentTarget.className += "current";
    }

    componentDidMount(){ 
        this.setState({ display: true }) 
    }

    openModal = () => {
        this.setState({ modalOpen: true });
    }

    closeModal = () => {
        this.setState({ modalOpen: false });
    }

    handleModalData = (image, price, id) => {
        this.setState({ 
            modalImage: image, 
            price: price,
            idd: id
        });
    }

    render() {
        let { products } = this.props;
        const { modalOpen } = this.state;
        return (
            <section className="all-products-area pb-60">
                <ReactTooltip  />
                <ToastContainer transition={Slide} />
                <div className="container">
                    <div className="tab products-category-tab">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <ul className="tabs">
                                    <li
                                        onClick={(e) => {e.preventDefault(); this.openTabSection(e, 'tab1')}}
                                        className="current"
                                    >
                                        <a href="#">
                                            <span className="dot"></span> Latest Products
                                        </a>
                                    </li>
                                    
                                    <li
                                        onClick={(e) => {e.preventDefault(); this.openTabSection(e, 'tab2')}}
                                        className="current"
                                    >
                                        <a href="#">
                                            <span className="dot"></span> Special Products
                                        </a>
                                    </li>
                                    
                                    <li
                                        onClick={(e) => {e.preventDefault(); this.openTabSection(e, 'tab3')}}
                                        className="current"
                                    >
                                        <a href="#">
                                            <span className="dot"></span> Featured Products
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="tab_content">
                                    <div id="tab1" className="tabs_item">
                                        <div className="row">
                                        {this.state.display ? <OwlCarousel 
                                            className="all-products-slides owl-carousel owl-theme"
                                            {...options}
                                        >
                                            {products.map((data, idx) => (
                                                <div className="col-lg-12 col-md-12" key={idx}>
                                                    <div className="single-product-box">
                                                        <div className="product-image">
                                                            <a href="#">
                                                                <img src={data.image} alt="image" />
                                                                <img src={data.imageHover} alt="image" />
                                                            </a>

                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <a 
                                                                            data-tip="Quick View" 
                                                                            data-place="left" 
                                                                            onClick={e => {
                                                                                    e.preventDefault(); 
                                                                                    this.openModal();
                                                                                    this.handleModalData(data.quickView,data.price,data.id)
                                                                                }
                                                                            }
                                                                        >
                                                                            <i className="far fa-eye"></i>
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <a data-tip="Add to Wishlist" data-place="left">
                                                                            <i className="far fa-heart"></i>
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <a data-tip="Add to Compare" data-place="left">
                                                                            <i className="fas fa-sync"></i>
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="product-content">
                                                            <h3><a href="#">{data.title}</a></h3>

                                                            <div className="product-price">
                                                                <span className="new-price">${data.price}</span>
                                                            </div>

                                                            <div className="rating">
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="far fa-star"></i>
                                                            </div>

                                                            <Link href="#">
                                                                <a 
                                                                    className="btn btn-light"
                                                                    onClick={(e) => {
                                                                        e.preventDefault(); this.handleAddToCart(data.id)
                                                                    }}
                                                                >
                                                                    Add to Cart
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                            </OwlCarousel> : ''}
                                        </div>
                                    </div>

                                    <div id="tab2" className="tabs_item">
                                        <div className="row">
                                        {this.state.display ? <OwlCarousel 
                                            className="all-products-slides owl-carousel owl-theme"
                                            {...options}
                                        >
                                            {products.map((data, idx) => (
                                                <div className="col-lg-12 col-md-12" key={idx}>
                                                    <div className="single-product-box">
                                                        <div className="product-image">
                                                            <a href="#">
                                                                <img src={data.image} alt="image" />
                                                                <img src={data.imageHover} alt="image" />
                                                            </a>

                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <a 
                                                                            data-tip="Quick View" 
                                                                            data-place="left" 
                                                                            onClick={e => {
                                                                                    e.preventDefault(); 
                                                                                    this.openModal();
                                                                                    this.handleModalData(data.quickView,data.price,data.id)
                                                                                }
                                                                            }
                                                                        >
                                                                            <i className="far fa-eye"></i>
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <a data-tip="Add to Wishlist" data-place="left">
                                                                            <i className="far fa-heart"></i>
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <a data-tip="Add to Compare" data-place="left">
                                                                            <i className="fas fa-sync"></i>
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="product-content">
                                                            <h3><a href="#">{data.title}</a></h3>

                                                            <div className="product-price">
                                                                <span className="new-price">${data.price}</span>
                                                            </div>

                                                            <div className="rating">
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="far fa-star"></i>
                                                            </div>

                                                            <Link href="#">
                                                                <a 
                                                                    className="btn btn-light"
                                                                    onClick={(e) => {
                                                                        e.preventDefault(); this.handleAddToCart(data.id)
                                                                    }}
                                                                >
                                                                    Add to Cart
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                            </OwlCarousel> : ''}

                                        </div>
                                    </div>

                                    <div id="tab3" className="tabs_item">
                                        <div className="row">
                                        {this.state.display ? <OwlCarousel 
                                            className="all-products-slides owl-carousel owl-theme"
                                            {...options}
                                        >
                                            {products.map((data, idx) => (
                                                <div className="col-lg-12 col-md-12" key={idx}>
                                                    <div className="single-product-box">
                                                        <div className="product-image">
                                                            <a href="#">
                                                                <img src={data.image} alt="image" />
                                                                <img src={data.imageHover} alt="image" />
                                                            </a>

                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <a 
                                                                            data-tip="Quick View" 
                                                                            data-place="left" 
                                                                            onClick={e => {
                                                                                    e.preventDefault(); 
                                                                                    this.openModal();
                                                                                    this.handleModalData(data.quickView,data.price,data.id)
                                                                                }
                                                                            }
                                                                        >
                                                                            <i className="far fa-eye"></i>
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <a data-tip="Add to Wishlist" data-place="left">
                                                                            <i className="far fa-heart"></i>
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <a data-tip="Add to Compare" data-place="left">
                                                                            <i className="fas fa-sync"></i>
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="product-content">
                                                            <h3><a href="#">{data.title}</a></h3>

                                                            <div className="product-price">
                                                                <span className="new-price">${data.price}</span>
                                                            </div>

                                                            <div className="rating">
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="far fa-star"></i>
                                                            </div>

                                                            <Link href="#">
                                                                <a 
                                                                    className="btn btn-light"
                                                                    onClick={(e) => {
                                                                        e.preventDefault(); this.handleAddToCart(data.id)
                                                                    }}
                                                                >
                                                                    Add to Cart
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                            </OwlCarousel> : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                { modalOpen ? <QuickView 
                    closeModal={this.closeModal} 
                    idd={this.state.idd}
                    image={this.state.modalImage} 
                    price={this.state.price}
                /> : '' }
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps= (dispatch) => {
    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Products)
