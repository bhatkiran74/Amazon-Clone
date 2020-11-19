import React from 'react'
import './Payment.css'
import CheckoutProduct from './CheckoutProduct';

import { useStateValue } from './StateProvider';

function Payment() {

    const [{ basket, user }, dispatch] = useStateValue();





    return (
        <div className="payment">

            <div className="payment_container">
                {/*  delivery Address*/}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{!user ? 'guest' : user?.email}</p>
                        <p>GCOEJ</p>
                        <p>NH-06,Jalgaon</p>


                    </div>


                </div>
                {/*  product revies */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review Items And Delivery</h3>
                    </div>
                    <div className="payment_items">

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
                {/* payment */}
                <div className="payment_section">

                </div>
            </div>
        </div>
    )
}

export default Payment
