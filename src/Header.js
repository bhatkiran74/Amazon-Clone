import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase'


function Header() {

    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {

        if (user) {
            auth.signOut()
        }


    }

    return (
        <div className="header">
            {/* header logo  */}
            <Link to="/">
                <img src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="" className="header_logo" />

            </Link>

            {/* header search bar */}
            <div className="header_search" >
                <input className="header_searchInput" type="text" placeholder="serch" />
                <SearchIcon className="header_searchIcon" />
            </div>

            {/* header navbar */}
            <div className="header_nav" >

                {/* header navbar option 1 */}
                <Link to={!user && '/login'}>

                    <div onClick={handleAuthentication} className="header_option" >
                        <span className="header_option_line_one" >
                            Hello guest
                    </span>
                        <span className="header_option_line_two" >
                            {user ? 'SignOut' : 'SignIn'}
                        </span>
                    </div>
                </Link>

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
                <Link to="/checkout"> <div className="header_option_basket">
                    <ShoppingBasketIcon />
                    <span className="header_option_line_two header_basket_count" >
                        {basket?.length}
                    </span>

                </div></Link>

            </div>



        </div>
    )
}

export default Header
