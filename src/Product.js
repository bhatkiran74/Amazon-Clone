import React from 'react'
import './Product.css'
import GradeIcon from '@material-ui/icons/Grade';
import { green } from '@material-ui/core/colors';

function Product({ title, image, price, rating }) {
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating" >
                    {
                        Array(rating).fill().map((_, i) => (
                            // <p>💝</p>
                            <GradeIcon style={{ color: green[500] }} />
                        ))
                    }


                </div>

            </div>
            <img src={image} alt="" />
            <button>Add Cart</button>




        </div>
    )
}

export default Product
