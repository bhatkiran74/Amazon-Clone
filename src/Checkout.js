import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import SubTotal from './SubTotal'

function Checkout() {

    const [{ basket, user }, dispatch] = useStateValue();



    return (
        <div className="checkout">
            <div className="checkout_left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/digital/adrive/images/2020/HOL/prints/APH_prints_HOL-20_cards-stripe_20-off._TTH_.jpg" className="checkout_left_ad" alt="" />

                <div >

                    <h2>Hello !!! {user?.email}</h2>
                    <h1 className="checkout_left_title">Your Shopping Basket</h1>

                    {basket.map(item => (

                        <CheckoutProduct

                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}




                        />

                    ))}



                </div>

            </div>
            <div className="checkout_right">
                <SubTotal />
            </div>



        </div>
    )
}

export default Checkout
