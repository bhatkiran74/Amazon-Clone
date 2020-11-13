import React from 'react'
import './SubTotal.css'
import CurrencyFormat from 'react-currency-format';


function SubTotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat

                renderText={value => (
                    <>
                        <p>
                            {/* part of homework */}
                            Subtotal (0 items ) :
                            <strong> 0</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" /> This Order Contain A Gift

                        </small>
                    </>
                )}
                decimalScale={2}
                value={0}  //part of homework
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}

            />
            <button>Proceed to CheckOut</button>
        </div>
    )
}

export default SubTotal
