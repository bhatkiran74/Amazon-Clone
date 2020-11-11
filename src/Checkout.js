import React from 'react'
import './Checkout.css'

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/digital/adrive/images/2020/HOL/prints/APH_prints_HOL-20_cards-stripe_20-off._TTH_.jpg" className="checkout_left_ad" alt="" />

                <div >
                    <h1 className="checkout_left_title">Your Shopping Basket</h1>
                </div>

            </div>
            <div className="checkout_right">
                <h1>sub total</h1>
            </div>



        </div>
    )
}

export default Checkout
