import React from 'react'
import './Home.css'
import Product from './Product'


function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/GWphase3/V4/Phase4_Rec_PC_Hero_1X_ENGLISH._CB416347901_.jpg" className="home_image" />

                <div className="home_row">
                    <Product />
                    <Product />
                    {/* product */}
                </div>
                <div className="home_row">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
                <div className="home_row">
                    {/* product */}
                    {/*  product*/}
                    <Product />
                    {/* product */}
                </div>

            </div>
        </div>
    )
}

export default Home
