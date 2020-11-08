import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <div className="header">
            {/* header logo  */}
            <img src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" className="header_logo" />

            {/* header search bar */}
            <div className="header_search" >
                <input className="header_searchInput" type="text" placeholder="serch" />
                <SearchIcon className="header_searchIcon" />
            </div>

            {/* header navbar */}
            <div className="header_nav" >

                {/* header navbar option 1 */}
                <div className="header_option" >
                    <span className="header_option_line_one" >
                        Hello guest
                    </span>
                    <span className="header_option_line_two" >
                        Sign-in
                    </span>
                </div>

                {/* header navbar option 2 */}
                <div className="header_option" >
                    <span className="header_option_line_one" >
                        Your
                    </span>
                    <span className="header_option_line_two" >
                        & Order
                    </span>
                </div>

                {/* header navbar option 3 */}
                <div className="header_option" >
                    <span className="header_option_line_one" >
                        Your
                    </span>
                    <span className="header_option_line_two" >
                        Prime
                    </span>
                </div>
                {/* header option basket */}
                <div className="header_option_basket">
                    <ShoppingBasketIcon />
                    <span className="header_option_line_two header_basket_count" >
                        0
                    </span>

                </div>

            </div>



        </div>
    )
}

export default Header
