import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar container">
            <ul className="horizontal">
                <li><Link to="/product_detail">나도살래</Link></li>
                <li><Link to="/">나도팔래</Link></li>
                <li><Link to="/">졸업작품</Link></li>
                <li><Link to="/">주문제작사이트</Link></li>
            </ul>
            <div className="horizontal">
                <Link to="/">커뮤니티</Link>
            </div>
        </div>
    )
}

export default Navbar;