import React, { useRef, useState } from "react";
import "./product.css";
import product from "../../product.json";
import { Link } from "react-router-dom";

const products = [
    { id: 1, img: "https://m.media-amazon.com/images/G/31/img23/Wireless/Isha/JanART26/teasertiles/new/01._SS400_QL85_FMpng_.png" },
    { id: 2, img: "https://m.media-amazon.com/images/G/31/img24/Wireless/Madhav/JanART26/Apple/rev/1Ultra_Premium._SS400_QL85_FMpng_.png" },
    { id: 3, img: "https://m.media-amazon.com/images/G/31/img23/Wireless/OnePlus/JanART/JanART26/TeaserPage/01._SS400_QL85_FMpng_.png" },
    { id: 4, img: "https://m.media-amazon.com/images/G/31/img23/Wireless/shagun/AI/janart/1_Ultra_Premium._SS400_QL85_FMpng_.png" },
    { id: 5, img: "https://m.media-amazon.com/images/G/31/img23/Wireless/Isha/JanART26/teasertiles/iQOO-15._SS400_QL85_FMpng_.png" },
    { id: 6, img: "https://m.media-amazon.com/images/G/31/img24/Wireless/Madhav/JanART26/Apple/rev/2Ultra_Premium._SS400_QL85_FMpng_.png" },
    { id: 7, img: "https://m.media-amazon.com/images/G/31/img24/Wireless/Madhav/JanART26/Apple/rev/2Ultra_Premium._SS400_QL85_FMpng_.png" },
    { id: 8, img: "https://m.media-amazon.com/images/G/31/img23/Wireless/shagun/AI/janart/2_Ultra_Premium._SS400_QL85_FMpng_.png" },
    { id: 9, img: "https://m.media-amazon.com/images/G/31/img23/Wireless/OnePlus/JanART/JanART26/TeaserPage/02._SS400_QL85_FMpng_.png" },
    { id: 10, img: "https://m.media-amazon.com/images/G/31/img23/Wireless/Isha/JanART26/teasertiles/X300._SS400_QL85_FMpng_.png" },
];


const Product = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (!scrollRef.current) return;

        const cardWidth = 236; // card + gap
        scrollRef.current.scrollBy({
            left: direction === "left" ? -cardWidth * 3 : cardWidth * 3,
            behavior: "smooth",
        });
    };

    const [activeTab, setActiveTab] = useState(null);
    const currentCategoryData = activeTab ? product.categoryContent[activeTab] : null;
    const isMenuOpen = activeTab !== null && currentCategoryData !== undefined;

    return (
        <div
            className="amazon-menu-container position-relative"
            onMouseLeave={() => setActiveTab(null)}
        >

            {/* --- NAV HEADER --- */}
            <nav className="navbar-custom border-bottom">
                <div className="container-fluid px-4">
                    <ul className="nav-list d-flex flex-wrap list-unstyled m-2 gap-3">
                        <div className="link">Electronics</div>
                        {product.categories.map((cat, index) => (
                            <li
                                key={index}
                                className={`nav-item px-2 py-2 ${cat === activeTab ? 'active' : ''}`}
                                onMouseEnter={() => setActiveTab(cat)}
                            >
                                <a href="#category" className="nav-link-custom text-decoration-none">
                                    {cat}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* --- DYNAMIC MEGA MENU CONTENT --- */}
            {isMenuOpen && (
                <div className="mega-menu-wrapper">
                    <div className="mega-menu-content py-4 shadow-sm border-top">
                        <div className="container-fluid px-4">
                            <div className="row">

                                {/* 1. TEXT COLUMNS */}
                                {currentCategoryData.columns.map((col) => (
                                    <div key={col.id} className="col-12 col-md-4 col-lg-2 mb-4">
                                        {col.sections.map((section, sIndex) => (
                                            <div key={sIndex} className="menu-section mb-4">
                                                <h6 className="section-title">{section.title}</h6>
                                                <ul className="list-unstyled">
                                                    {section.items.map((item, iIndex) => (
                                                        <li key={iIndex}>
                                                            <a href="#item" className="menu-link">{item}</a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                ))}

                                {/* 2. PROMOTIONAL IMAGES */}
                                {currentCategoryData.promotions && currentCategoryData.promotions.map((promo) => (
                                    <div key={promo.id} className="col-12 col-md-4 col-lg-2 mb-4 text-center">
                                        <div className="promo-card">
                                            <div className="image-wrapper mb-2">
                                                <img
                                                    src={promo.image}
                                                    alt={promo.title}
                                                    className="img-fluid promo-img"
                                                />
                                            </div>
                                            <h6 className="promo-title mt-2">{promo.title}</h6>
                                            <a href="#promo" className="promo-link">{promo.linkText}</a>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            )}


            <div className="productPageMain">
                <div className="productPageMainLeftCategory">
                    <div className="productPageMainLeftCategoryTitle">Category</div>
                    <div className="productPageMainLeftCategoryContent">
                        <div className="productPageMainLeftCategoryContentLink">❮ Electronics</div>
                        <div className="productPageMainLeftCategoryContentTitle">Mobile & Accessories</div>
                        <Link to="/productCard" className="productPageMainLeftCategoryContentActiveLink">Mobile Accessories</Link>
                        <div className="productPageMainLeftCategoryContentLink">Mobile Broadband Devices</div>
                        <div className="productPageMainLeftCategoryContentLink">Sim Cards</div>
                        <div className="productPageMainLeftCategoryContentLink">Smartphones & Basic</div>
                        <div className="productPageMainLeftCategoryContentLink">Mobiles</div>
                        <div className="productPageMainLeftCategoryContentLink">Smartwatches</div>
                    </div>

                    <div className="filter-section">
                        <div className="filter-group">
                            <div className="filter-title">Amazon Prime</div>

                            <label className="amazon-checkbox">
                                <input type="checkbox" />
                                <span className="checkbox-box"></span>

                                <span className="prime-text">
                                    <span className="prime-check">✓</span>prime
                                </span>
                            </label>
                        </div>


                        <div className="filter-group">
                            <div className="filter-title">Delivery Day</div>

                            <label className="amazon-checkbox">
                                <input type="checkbox" />
                                <span className="checkbox-box"></span>
                                Get it by Tomorrow
                            </label>
                        </div>


                        <div className="filter-group">
                            <div className="filter-title">Brands</div>

                            <label className="amazon-checkbox">
                                <input type="checkbox" />
                                <span className="checkbox-box"></span>
                                FOLX
                            </label>
                        </div>


                        <div className="filter-group">
                            <div className="filter-title">Customer Reviews</div>

                            <div className="rating-row">
                                <span className="stars">★★★★☆</span>
                                <span className="rating-text">& Up</span>
                            </div>
                        </div>

                        <div className="filter-group">
                            <div className="filter-title">Item Condition</div>

                            <label className="amazon-checkbox">
                                <input type="checkbox" />
                                <span className="checkbox-box"></span>
                                New
                            </label>
                        </div>
                    </div>

                    <div className="productPageMainLeftCategoryPrice">
                        <div className="productPageMainLeftCategoryTitle">Price</div>
                        <div className="productPageMainLeftCategoryContentPrice">Under ₹1,000</div>
                        <div className="productPageMainLeftCategoryContentPrice">₹1,000 - ₹5,000</div>
                        <div className="productPageMainLeftCategoryContentPrice">₹5000 - ₹10,000</div>
                        <div className="productPageMainLeftCategoryContentPrice">₹10,000 - ₹20,000</div>
                        <div className="productPageMainLeftCategoryContentPrice">Over ₹20,000</div>
                    </div>

                    <div className="productPageMainLeftCategoryPrice">
                        <div className="productPageMainLeftCategoryDeal">Deals & Discounts</div>
                        <div className="productPageMainLeftCategoryContentPrice">All Discounts</div>
                        <div className="productPageMainLeftCategoryContentPrice">Buy More, Save More</div>
                        <div className="productPageMainLeftCategoryContentPrice">Coupons</div>
                        <div className="productPageMainLeftCategoryContentPrice">Today's Deals</div>
                    </div>

                    <div className="filter-group">
                        <div className="filter-title">Made for Amazon Brands</div>

                        <label className="amazon-checkbox">
                            <input type="checkbox" />
                            <span className="checkbox-box"></span>
                            Made for Amazon
                        </label>
                    </div>

                    <div className="productPageMainLeftCategoryPrice">
                        <div className="productPageMainLeftCategoryDeal">New Arrivals</div>
                        <div className="productPageMainLeftCategoryContentPrice">Last 30 days</div>
                        <div className="productPageMainLeftCategoryContentPrice">Last 90 days</div>
                    </div>

                    <div className="filter-group">
                        <div className="filter-title">Top Brands in Electronic</div>
                        <label className="amazon-checkbox">
                            <input type="checkbox" />
                            <span className="checkbox-box"></span>
                            Top Brands
                        </label>
                    </div>

                    <div className="filter-group">
                        <div className="filter-title">Availability</div>

                        <label className="amazon-checkbox">
                            <input type="checkbox" />
                            <span className="checkbox-box"></span>
                            Include Out of Stock
                        </label>
                    </div>

                    <div className="productPageMainLeftCategoryPrice">
                        <div className="productPageMainLeftCategoryDeal">Discount</div>
                        <div className="productPageMainLeftCategoryContentPrice">10% Off or more</div>
                        <div className="productPageMainLeftCategoryContentPrice">25% Off or more</div>
                        <div className="productPageMainLeftCategoryContentPrice">35% Off or more</div>
                        <div className="productPageMainLeftCategoryContentPrice">50% Off or more</div>
                        <div className="productPageMainLeftCategoryContentPrice">60% Off or more</div>
                        <div className="productPageMainLeftCategoryContentPrice">70% Off or more</div>
                    </div>

                    <div className="filter-group">
                        <div className="filter-title">Seller</div>
                        <label className="amazon-checkbox">
                            <input type="checkbox" />
                            <span className="checkbox-box"></span>
                            Cocoblu Retail
                        </label>
                        <label className="amazon-checkbox">
                            <input type="checkbox" />
                            <span className="checkbox-box"></span>
                            Wishpoint
                        </label>
                        <label className="amazon-checkbox">
                            <input type="checkbox" />
                            <span className="checkbox-box"></span>
                            Clicktech Retail Private Ltd
                        </label>
                        <label className="amazon-checkbox">
                            <input type="checkbox" />
                            <span className="checkbox-box"></span>
                            Clicktech Business
                        </label>
                        <label className="amazon-checkbox">
                            <input type="checkbox" />
                            <span className="checkbox-box"></span>
                            TheGiftKart
                        </label>
                        <label className="amazon-checkbox">
                            <input type="checkbox" />
                            <span className="checkbox-box"></span>
                            Pikkme
                        </label>
                        <label className="amazon-checkbox">
                            <input type="checkbox" />
                            <span className="checkbox-box"></span>
                            DIZORO
                        </label>
                    </div>

                    <div className="filter-group">
                        <div className="filter-title">Pay On Delivery</div>

                        <label className="amazon-checkbox">
                            <input type="checkbox" />
                            <span className="checkbox-box"></span>
                            Eligible for Pay On Delivery
                        </label>
                    </div>
                </div>

                <div className="productPageMainRightCategory">


                    <div className="productPageMainRightCategoryBanner">
                        <img
                            src="https://m.media-amazon.com/images/G/31/img23/Wireless/CatPage/Revamp2025/Navigator/Accessories.jpg"
                            alt="Banner"
                            className="productPageMainRightCategoryBannerImg"
                        />
                        <img
                            src="https://m.media-amazon.com/images/G/31/img24/Wireless/Madhav/JanART26/Apple/_Navigator.png"
                            alt="Banner"
                            className="productPageMainRightCategoryBannerImg"
                        />
                    </div>

                    <div className="productPageMainRightCategoryBigBanner">
                        <img
                            src="https://m.media-amazon.com/images/G/31/img23/Wireless/Isha/JanART26/teasertiles/new/Header_3.jpg"
                            alt="Big Banner"
                            className="productPageMainRightCategoryBigBannerImg"
                        />

                    </div>
                    <div className="productPageMainRightBanner2">
                        <img
                            src="https://m.media-amazon.com/images/G/31/img24/Wireless/Madhav/JanART26/Apple/rev/Revealed-iPhone_property_02_01_01._CB773287147_.jpg"
                            alt="Big Banner"
                            className="productPageMainRightCategoryBigBannerImg"
                        />

                        <div className="productPageMainRightCardBanner">
                            <img
                                src="https://m.media-amazon.com/images/G/31/img24/Wireless/Madhav/JanART26/Apple/iphone-17-pro-max_1._SS600_QL85_.jpg"
                                alt="Big Banner"
                                className="productPageMainRightCardBannerImg"
                            />
                            <img
                                src="https://m.media-amazon.com/images/G/31/img24/Wireless/Madhav/JanART26/Apple/iphone-17-pro-max_1._SS600_QL85_.jpg"
                                alt="Big Banner"
                                className="productPageMainRightCardBannerImg"
                            />
                            <img
                                src="https://m.media-amazon.com/images/G/31/img24/Wireless/Madhav/JanART26/Apple/iphone-17-pro-max_1._SS600_QL85_.jpg"
                                alt="Big Banner"
                                className="productPageMainRightCardBannerImg"
                            />
                        </div>
                    </div>

                    <div className="productPageMainRightBanner3">
                        <img
                            src="https://m.media-amazon.com/images/G/31/img24/Wireless/debaishx/BDOSPC/PC-_BDOS_01.jpg"
                            alt="Big Banner"
                            className="productPageMainRightBanner3Img"
                        />
                        <div className="productPageRightBannerpieces">
                            <img
                                src="https://m.media-amazon.com/images/G/31/img24/Wireless/Madhav/JanART26/Apple/rev/PC-_BDOS_02.jpg"
                                alt="Banner Piece"
                                className="productPageRightBannerPieceImg"
                            />
                            <img
                                src="https://m.media-amazon.com/images/G/31/img24/Wireless/debaishx/BDOSPC/PC-_BDOS_03.jpg"
                                alt="Banner Piece"
                                className="productPageRightBannerPieceImg"
                            />
                            <img
                                src="https://m.media-amazon.com/images/G/31/img24/Wireless/debaishx/BDOSPC/PC-_BDOS_04.jpg"
                                alt="Banner Piece"
                                className="productPageRightBannerPieceImg"
                            />
                            <img
                                src="https://m.media-amazon.com/images/G/31/img24/Wireless/debaishx/BDOSPC/PC-_BDOS_05.jpg"
                                alt="Banner Piece"
                                className="productPageRightBannerPieceImg"
                            />
                        </div>

                        <div className="productPageRightBannerpieces">
                            <img
                                src="https://m.media-amazon.com/images/G/31/img24/Wireless/debaishx/BDOSPC/PC-_BDOS_06.jpg"
                                alt="Banner Piece"
                                className="productPageRightBannerPieceImg"
                            />
                            <img
                                src="https://m.media-amazon.com/images/G/31/img24/Wireless/debaishx/BDOSPC/PC-_BDOS_07.jpg"
                                alt="Banner Piece"
                                className="productPageRightBannerPieceImg"
                            />
                            <img
                                src="https://m.media-amazon.com/images/G/31/img24/Wireless/debaishx/BDOSPC/PC-_BDOS_08.jpg"
                                alt="Banner Piece"
                                className="productPageRightBannerPieceImg"
                            />
                            <img
                                src="https://m.media-amazon.com/images/G/31/img24/Wireless/debaishx/BDOSPC/PC-_BDOS_09.jpg"
                                alt="Banner Piece"
                                className="productPageRightBannerPieceImg"
                            />
                        </div>

                        <div className="productPageRightBannerpieces">
                            <img
                                src="https://m.media-amazon.com/images/G/31/img24/Wireless/debaishx/BDOSPC/PC-_BDOS_10.jpg"
                                alt="Banner Piece"
                                className="productPageRightBannerPieceImg"
                            />
                            <img
                                src="https://m.media-amazon.com/images/G/31/img24/Wireless/debaishx/BDOSPC/PC-_BDOS_11.jpg"
                                alt="Banner Piece"
                                className="productPageRightBannerPieceImg"
                            />
                            <img
                                src="https://m.media-amazon.com/images/G/31/img24/Wireless/debaishx/BDOSPC/PC-_BDOS_12.jpg"
                                alt="Banner Piece"
                                className="productPageRightBannerPieceImg"
                            />
                            <img
                                src="https://m.media-amazon.com/images/G/31/img24/Wireless/debaishx/BDOSPC/PC-_BDOS_13.jpg"
                                alt="Banner Piece"
                                className="productPageRightBannerPieceImg"
                            />
                        </div>
                    </div>

                    <div className="productPageMainRightBanner4">
                        <img
                            src="https://m.media-amazon.com/images/G/31/img23/Wireless/Isha/JanART26/teasertiles/new/Add-to-cart_1._CB772903721_.gif"
                            alt="Big Banner"
                            className="productPageMainRightBanner4Img"
                        />
                        <div className="productPageMainRightBanner5">
                            <img
                                src="https://m.media-amazon.com/images/G/31/img23/Wireless/Isha/JanART26/teasertiles/Deals-for-your-every-budget._CB772919871_.jpg"
                                alt="Big Banner"
                                className="productPageMainRightBanner5Img"
                            />
                        </div>
                        <div className="amazon-slider-section">

                            <button
                                className="nav-btn left"
                                onClick={() => scroll("left")}
                            >
                                ❮
                            </button>

                            <div className="amazon-viewport">
                                <div className="amazon-scroll" ref={scrollRef}>
                                    {products.map((item) => (
                                        <div className="product-card" key={item.id}>
                                            <img src={item.img} alt="" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <button
                                className="nav-btn right"
                                onClick={() => scroll("right")}
                            >
                                ❯
                            </button>
                        </div>

                    </div>





                </div>


            </div>

        </div>
    );
};
export default Product;
