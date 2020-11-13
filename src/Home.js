import React from 'react'
import './Home.css'
import Product from './Product'


function Home() {
    return (
        <div className="home">
            <div className="home_container">

                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/GWphase3/V4/Phase4_Rec_PC_Hero_1X_ENGLISH._CB416347901_.jpg" alt="" className="home_image" />

                <div className="home_row">
                    <Product
                        id={1}
                        title="Coolnut 31200mAh Power Bank/Mini Inverter/Power Backup for All Laptops,Tablets,Smart Phones,WiFi Routers"
                        image="https://m.media-amazon.com/images/I/51VWv9qu44L._AC_UL320_.jpg"
                        price={299}
                        rating={5}

                    />
                    <Product
                        id={2}
                        title="OnePlus 8 Pro (Ultramarine Blue 12GB RAM+256GB Storage)"
                        image="https://m.media-amazon.com/images/I/412Yk7LIQzL.__AC_SY200_.jpg"
                        price={299}
                        rating={5}

                    />
                    <Product
                        id={3}
                        title="Juârez Acoustic Guitar, 38 Inch Cutaway, 038C with Bag, Strings, Pick and Strap, Black"
                        image="https://images-eu.ssl-images-amazon.com/images/I/71y1TJbygLL._AC_UL200_SR200,200_.jpg"
                        price={299}
                        rating={5}

                    />
                    {/* product */}
                </div>
                <div className="home_row">
                    <Product
                        id={4}
                        title="iBELL Demolition Hammer IBL DH10-78,1150W,4100RPM,230V,17MM - 6 Months Warranty"
                        image="https://images-eu.ssl-images-amazon.com/images/I/41QM98S6TGL._AC_SX184_.jpg"
                        price={299}
                        rating={5}

                    />
                    <Product
                        id={5}
                        title="iBELL Demolition Hammer IBL DH10-78,1150W,4100RPM,230V,17MM - 6 Months Warranty"
                        image="https://images-eu.ssl-images-amazon.com/images/I/41QM98S6TGL._AC_SX184_.jpg"
                        price={299}
                        rating={5}

                    />
                    <Product
                        id={6}
                        title="iBELL Demolition Hammer IBL DH10-78,1150W,4100RPM,230V,17MM - 6 Months Warranty"
                        image="https://images-eu.ssl-images-amazon.com/images/I/41QM98S6TGL._AC_SX184_.jpg"
                        price={299}
                        rating={5}

                    />
                    <Product
                        id={7}
                        title="iBELL Demolition Hammer IBL DH10-78,1150W,4100RPM,230V,17MM - 6 Months Warranty"
                        image="https://images-eu.ssl-images-amazon.com/images/I/41QM98S6TGL._AC_SX184_.jpg"
                        price={299}
                        rating={5}

                    />
                </div>
                <div className="home_row">
                    <Product
                        id={8}
                        title="Coolnut 31200mAh Power Bank/Mini Inverter/Power Backup for All Laptops,Tablets,Smart Phones,WiFi Routers"
                        image="https://m.media-amazon.com/images/I/51VWv9qu44L._AC_UL320_.jpg"
                        price={299}
                        rating={2}

                    />
                    <Product
                        id={9}
                        title="Coolnut 31200mAh Power Bank/Mini Inverter/Power Backup for All Laptops,Tablets,Smart Phones,WiFi Routers"
                        image="https://m.media-amazon.com/images/I/51VWv9qu44L._AC_UL320_.jpg"
                        price={299}
                        rating={2}

                    />
                </div>

            </div>
        </div>
    )
}

export default Home
