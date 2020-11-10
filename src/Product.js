import React from 'react'
import './Product.css'


function Product() {
    return (
        <div className="product">
            <div className="product_info">
                <p>The Lean of Startup</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>199.9</strong>
                </p>
                <div className="product_rating" >
                    <p>💝</p>
                    <p>💝</p>
                    <p>💝</p>

                </div>

            </div>
            <img src="https://m.media-amazon.com/images/I/31Td2leGx6L.__AC_SY200_.jpg" />
            <button>Add Cart</button>




        </div>
    )
}

export default Product
