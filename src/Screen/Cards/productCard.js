import React from 'react';
import "./productCard.css";
import productData from './productCard.json';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/actions';
import { toast, ToastContainer } from 'react-toastify';

function ProductCard() {

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items)
    const handelAddToCart = (item) => {
        toast.success("Successfuly Added in Cart", {
            position: "bottom-center"
        })
        dispatch(addToCart(item));

    }
    return (
        <div className="productPageResult">
            <div className="productResult">
                1-12 of over 70,000 results for <span className="resultSpan">Mobiles & Accessories</span>
            </div>

            <div className="productItem">
                {productData.map((item) => (
                    <div className="productItemOne" key={item.id}>
                        <div className="productItemImage">
                            <img src={item.image} alt={item.name} className="productItemImg" />
                        </div>

                        <div className="productItemName">
                            <div>{item.name}</div>

                            <div className="ratting">
                                {item.rating} <span className="rattingStar">★★★★☆</span>({item.reviewCount})
                            </div>
                            <div className="productBought">
                                {item.boughtCount}
                            </div>

                            <div className="productItemPrice">
                                <div className="currencytext">₹</div>
                                <div className="productItemRate">
                                    <div className="productItemRateDetail">
                                        {item.price}
                                        <span className="rateOff">M.R.P: ₹{item.mrp} </span>
                                        <span className="percentageOff">({item.discount})</span>
                                    </div>
                                    <div className="addCart" onClick={() => { handelAddToCart(item) }}>Add To Cart</div>
                                </div>
                            </div>

                            <div className="productDiscount">
                                <span className="productPercent">{item.saveExtra}</span> with Coupon
                            </div>

                            <div className="freeDelivery">
                                FREE delivery<span className="freeDeliverDay"> {item.deliveryDate}</span>
                            </div>
                            <div className="freeDelivery">
                                Or fastest delivery<span className="freeDeliverDay">{item.fastestDelivery}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <ToastContainer />
        </div>

    );
}

export default ProductCard;
