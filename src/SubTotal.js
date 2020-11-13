import React from 'react'
import './SubTotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';


function SubTotal() {

    const [{ basket }, dispatch] = useStateValue();



    return (
        <div className="subtotal">
            <CurrencyFormat

                renderText={value => (
                    <>
                        <p>
                            {/* part of homework */}
                            Subtotal ({basket.length} items ) :
                <strong> {value}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" /> This Order Contain A Gift

                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}  //part of homework
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}

            />
            <button>Proceed to CheckOut</button>
        </div>
    )
}

export default SubTotal
