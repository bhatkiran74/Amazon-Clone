import React from 'react'
import './Product.css'
import GradeIcon from '@material-ui/icons/Grade';
import { green } from '@material-ui/core/colors';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    console.log("this is basket", basket)

    const addToBasket = () => {
        //dispatch item into the data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        })


    }


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
            <button onClick={addToBasket}>Add To Basket</button>




        </div>
    )
}

export default Product
