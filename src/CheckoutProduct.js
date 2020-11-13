import React from 'react'
import './CheckoutProduct.css'

function CheckoutProduct({ id, title, image, price, rating }) {
    return (
        <div className="checkoutProduct">
            <img src={image} alt="" className="checkoutProduct_image" />

            <div className="checkoutProduct_info">
                <p className="checkoutProduct_info_title">{title}</p>
                <p className="checkoutProduct_info_price">
                    <small>$</small>
                    <strong>{price}</strong>

                </p>
                <div className="checkoutProduct_info_rating" >
                    {
                        Array(rating).fill().map((_, i) => (
                            <p>⭐</p>
                        ))
                    }
                </div>
                <button>Remove From Basket</button>

            </div>




        </div>
    )
}

export default CheckoutProduct
