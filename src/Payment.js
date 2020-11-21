import React, { useState, useEffect } from 'react'
import './Payment.css'
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

function Payment() {

    const [{ basket, user }, dispatch] = useStateValue();

    const stripe = useStripe()
    const elements = useElements()

    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState("")

    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)

    const [clientSecret, setclientSecret] = useState(true)

    useEffect(() => {
        //generate to special stripe secret which allow us to charge a customer

        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                //stripes expects total in the currency subunits
                url: `/payments/create?total= ${getBasketTotal(basket) * 100}`

            })
            setclientSecret(response.data.clientSecret)
        }
        getClientSecret()
    }, [basket])


    const handleSubmit = async (event) => {
        //

        event.preventDefault()
        setProcessing(true)

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).than(({ paymentIntent }) => {
            // paymentIntent = payment confirmation

            setSucceeded(true)
            setError(null)
            setProcessing(false)

            history.replace('/orders')

        })


    }

    const handleChange = event => {
        //



        //display the errors as the customer types their card detail
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "")
    }


    return (
        <div className="payment">

            <div className="payment_container">
                <h1>CheckOut (<Link to="/checkout"> {basket?.length} items</Link>)</h1>

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
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className="payment_detail_price">
                                <CurrencyFormat
                                    renderText={value => (
                                        <h3>Order Total : {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}  //part of homework
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'}

                                />

                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>

                                </button>

                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payment
