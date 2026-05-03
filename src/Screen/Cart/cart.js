import React, { useState, useEffect } from 'react'
import './cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/actions/actions';
import { clearCart } from '../../redux/actions/actions';
import { toast, ToastContainer } from 'react-toastify';

function Cart() {

    const [cartItem, setCartItem] = useState([]);
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    let a = 0;
    let cost = cartItems.map((item) => {
        return a = a + item.price
    })

    useEffect(() => {
        setCartItem(cartItems);
    }, [cartItems])

    const handelRemoveFromCart = (id) => {
        toast.error("Item Removed From Cart", {
            position: "bottom-center"
        })

        dispatch(removeFromCart(id));
    }
    const handelClearCart = () => {
        dispatch(clearCart());
        toast.info("Cart Cleared", {
            position: "top-center"
        });
    }

    return (
        <div className='cart'>
            <div className='topLeftCart'>
                <div className='topLeftCartTitle'>Shopping Cart</div>
                <div className='deSelectItem' onClick={handelClearCart}>Deselect all items</div>
                <div className='cartItemPrice'>Price</div>

                <div className='cartItem'>
                    {
                        cartItem.map((item, ind) => {
                            return (
                                <div className='cartItemBlock'>
                                    <div className='cartItemleftBlock'>
                                        <div className='cartItemLeftBlockImage'>
                                            <img className='cartItemLeftBlockImg' src={item.image}></img>
                                        </div>
                                        <div className='cartItemLeftBlockDetails'>
                                            <div className='cartItemProductName'>{item.name}</div>
                                            <div className='stockCart'>In Stock</div>
                                            <div className='freeShipping'>Elligible for Free Shopping</div>
                                            <div className='amazonLogo'> <img className='amazonLogoimg' src='https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png'></img></div>
                                            <div className='removebtn' onClick={() => { handelRemoveFromCart(item.id) }}>Remove From Basket</div>
                                        </div>
                                    </div>
                                    <div className='itemPrice'>
                                        RS{item.price}
                                    </div>
                                </div>
                            );
                        })
                    }


                </div>
            </div>


            <div className='topRightCart'>
                <div className='subTotalTitle'>Subtotal({cartItem.length} items) : <span className='subTotalTitleSpan'>RS {a}</span></div>
                <div className='addGift'>
                    <input type='checkbox'></input>
                    <div>This Order Contain a gift</div>
                </div>
                <div className='proceed'>Proceed to Buy</div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Cart
