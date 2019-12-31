import React, { Component } from 'react';

class LeftFilter extends Component {
    state = {
        display: false,
        currentSelection: false,
        collection: false,
        brand: false,
        size: false,
        price: false,
        color: false,
        popular: false
    };

    closeLeftFilter = () => {
        this.props.onClick(this.state.display);
    }

    handleToggle = (e, evt) => {
        e.preventDefault();

        if (evt == "currentSelection"){
            this.setState({
                currentSelection: !this.state.currentSelection
            })
        } else if (evt == "collection"){
            this.setState({
                collection: !this.state.collection
            })
        } else if (evt == "brand"){
            this.setState({
                brand: !this.state.brand
            })
        } else if (evt == "size"){
            this.setState({
                size: !this.state.size
            })
        } else if (evt == "price"){
            this.setState({
                price: !this.state.price
            })
        }  else if (evt == "color"){
            this.setState({
                color: !this.state.color
            })
        } else if (evt == "popular"){
            this.setState({
                popular: !this.state.popular
            })
        }
    }
    render() {
        let { currentSelection, collection, brand, size, price, color, popular } = this.state;
        return (
            <div 
                className="modal left fade productsFilterModal show" 
                style={{
                    display: "block", paddingRight: "16px"
                }}
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <button 
                            type="button" 
                            className="close" 
                            data-dismiss="modal" 
                            aria-label="Close"
                            onClick={this.closeLeftFilter}
                        >
                            <span aria-hidden="true">
                                <i className="fas fa-times"></i> Close
                            </span>
                        </button>

                        <div className="modal-body">
                            <div className="woocommerce-sidebar-area">
                                <div className={`collapse-widget filter-list-widget ${currentSelection ? '' : 'open'}`}>
                                    <h3 
                                        className={`collapse-widget-title ${currentSelection ? '' : 'active'}`}
                                        onClick={e => this.handleToggle(e, "currentSelection")}
                                    >
                                        Current Selection

                                        <i className="fas fa-angle-up"></i>
                                    </h3>

                                    <div className={`selected-filters-wrap-list ${currentSelection ? 'block' : 'none'}`}>
                                        <ul>
                                            <li><a href="#">44</a></li>
                                            <li><a href="#">XI</a></li>
                                            <li><a href="#">Clothing</a></li>
                                            <li><a href="#">Shoes</a></li>
                                            <li><a href="#">Accessories</a></li>
                                        </ul>

                                        <div className="delete-selected-filters">
                                            <a href="#"><i className="far fa-trash-alt"></i> <span>Clear All</span></a>
                                        </div>
                                    </div>
                                </div>

                                <div className={`collapse-widget collections-list-widget ${collection ? '' : 'open'}`}>
                                    <h3 
                                        className={`collapse-widget-title ${collection ? '' : 'active'}`}
                                        onClick={e => this.handleToggle(e, "collection")}
                                    >
                                        Collections

                                        <i className="fas fa-angle-up"></i>
                                    </h3>

                                    <ul className={`collections-list-row ${collection ? 'block' : 'none'}`}>
                                        <li className="active"><a href="#">Women’s</a></li>
                                        <li><a href="#">Men</a></li>
                                        <li><a href="#">Clothing</a></li>
                                        <li><a href="#">Shoes</a></li>
                                        <li><a href="#">Accessories</a></li>
                                        <li><a href="#">Uncategorized</a></li>
                                    </ul>
                                </div>

                                <div className={`collapse-widget brands-list-widget ${brand ? '' : 'open'}`}>
                                    <h3 
                                        className={`collapse-widget-title ${brand ? '' : 'active'}`}
                                        onClick={e => this.handleToggle(e, "brand")}
                                    >
                                        Brands

                                        <i className="fas fa-angle-up"></i>
                                    </h3>

                                    <ul className={`brands-list-row ${brand ? 'block' : 'none'}`}>
                                        <li className="active"><a href="#">Adidas</a></li>
                                        <li><a href="#">Nike</a></li>
                                        <li><a href="#">Reebok</a></li>
                                        <li><a href="#">Shoes</a></li>
                                        <li><a href="#">Ralph Lauren</a></li>
                                        <li><a href="#">Delpozo</a></li>
                                    </ul>
                                </div>

                                <div className={`collapse-widget size-list-widget ${size ? '' : 'open'}`}>
                                    <h3 
                                        className={`collapse-widget-title ${size ? '' : 'active'}`}
                                        onClick={e => this.handleToggle(e, "size")}
                                    >
                                        Size

                                        <i className="fas fa-angle-up"></i>
                                    </h3>

                                    <ul className={`size-list-row ${size ? 'block' : 'none'}`}>
                                        <li><a href="#">20</a></li>
                                        <li><a href="#">24</a></li>
                                        <li><a href="#">36</a></li>
                                        <li><a href="#">30</a></li>
                                        <li className="active"><a href="#">XS</a></li>
                                        <li><a href="#">S</a></li>
                                        <li><a href="#">M</a></li>
                                        <li><a href="#">L</a></li>
                                        <li><a href="#">L</a></li>
                                        <li><a href="#">XL</a></li>
                                    </ul>
                                </div>

                                <div className={`collapse-widget price-list-widget ${price ? '' : 'open'}`}>
                                    <h3 
                                        className={`collapse-widget-title ${price ? '' : 'active'}`}
                                        onClick={e => this.handleToggle(e, "price")}
                                    >
                                        Price

                                        <i className="fas fa-angle-up"></i>
                                    </h3>

                                    <ul className={`price-list-row ${price ? 'block' : 'none'}`}>
                                        <li><a href="#">$10 - $100</a></li>
                                        <li className="active"><a href="#">$100 - $200</a></li>
                                        <li><a href="#">$200 - $300</a></li>
                                        <li><a href="#">$300 - $400</a></li>
                                        <li><a href="#">$400 - $500</a></li>
                                        <li><a href="#">$500 - $600</a></li>
                                    </ul>
                                </div>

                                <div className={`collapse-widget color-list-widget ${color ? '' : 'open'}`}>
                                    <h3 
                                        className={`collapse-widget-title ${color ? '' : 'active'}`}
                                        onClick={e => this.handleToggle(e, "color")}
                                    >
                                        Color

                                        <i className="fas fa-angle-up"></i>
                                    </h3>

                                    <ul className={`color-list-row ${color ? 'block' : 'none'}`}>
                                        <li><a href="#" title="Black" className="color-black"></a></li>
                                        <li><a href="#" title="Red" className="color-red"></a></li>
                                        <li><a href="#" title="Yellow" className="color-yellow"></a></li>
                                        <li><a href="#" title="White" className="color-white"></a></li>
                                        <li><a href="#" title="Blue" className="color-blue"></a></li>
                                        <li><a href="#" title="Green" className="color-green"></a></li>
                                        <li><a href="#" title="Yellow Green" className="color-yellowgreen"></a></li>
                                        <li><a href="#" title="Pink" className="color-pink"></a></li>
                                        <li><a href="#" title="Violet" className="color-violet"></a></li>
                                        <li><a href="#" title="Blue Violet" className="color-blueviolet"></a></li>
                                        <li><a href="#" title="Lime" className="color-lime"></a></li>
                                        <li><a href="#" title="Plum" className="color-plum"></a></li>
                                        <li><a href="#" title="Teal" className="color-teal"></a></li>
                                    </ul>
                                </div>

                                <div className={`collapse-widget tag-list-widget ${popular ? '' : 'open'}`}>
                                    <h3 
                                        className={`collapse-widget-title ${popular ? '' : 'active'}`}
                                        onClick={e => this.handleToggle(e, "popular")}
                                    >
                                        Popular Tags

                                        <i className="fas fa-angle-up"></i>
                                    </h3>

                                    <ul className={`tags-list-row ${popular ? 'block' : 'none'}`}>
                                        <li><a href="#">Vintage</a></li>
                                        <li><a href="#">Black</a></li>
                                        <li className="active"><a href="#">Discount</a></li>
                                        <li><a href="#">Good</a></li>
                                        <li><a href="#">Jeans</a></li>
                                        <li><a href="#">Summer</a></li>
                                        <li><a href="#">Winter</a></li>
                                    </ul>
                                </div>

                                <div className="collapse-widget aside-products-widget">
                                    <h3 className="aside-widget-title">
                                        Popular Products
                                    </h3>

                                    <div className="aside-single-products">
                                        <div className="products-image">
                                            <a href="#">
                                                <img src={require("../../images/img2.jpg")} alt="image" />
                                            </a>
                                        </div>

                                        <div className="products-content">
                                            <span><a href="#">Men's</a></span>
                                            <h3><a href="#">Belted chino trousers polo</a></h3>

                                            <div className="product-price">
                                                <span className="new-price">$191.00</span>
                                                <span className="old-price">$291.00</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="aside-single-products">
                                        <div className="products-image">
                                            <a href="#">
                                                <img src={require("../../images/img3.jpg")} alt="image" />
                                            </a>
                                        </div>

                                        <div className="products-content">
                                            <span><a href="#">Men's</a></span>
                                            <h3><a href="#">Belted chino trousers polo</a></h3>

                                            <div className="product-price">
                                                <span className="new-price">$191.00</span>
                                                <span className="old-price">$291.00</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="aside-single-products">
                                        <div className="products-image">
                                            <a href="#">
                                                <img src={require("../../images/img4.jpg")} alt="image" />
                                            </a>
                                        </div>

                                        <div className="products-content">
                                            <span><a href="#">Men's</a></span>
                                            <h3><a href="#">Belted chino trousers polo</a></h3>

                                            <div className="product-price">
                                                <span className="new-price">$191.00</span>
                                                <span className="old-price">$291.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="collapse-widget aside-trending-widget">
                                    <div className="aside-trending-products">
                                        <img src={require("../../images/bestseller-hover-img1.jpg")} alt="image" />

                                        <div className="category">
                                            <h4>Top Trending</h4>
                                            <span>Spring/Summer 2018 Collection</span>
                                        </div>

                                        <a href="#"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LeftFilter;
