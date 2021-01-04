import React from 'react';
import { Link } from 'react-router-dom';
import DropdownLink from './DropdownLink';

const Navbar = () => {
    return (
        <div className="navbar container">
            {/* <ul className="horizontal">
                <li><Link to="/product_detail">나도살래</Link></li>
                <li><Link to="/">나도팔래</Link></li>
                <li><Link to="/">졸업작품</Link></li>
                <li><Link to="/">주문제작사이트</Link></li>
            </ul> */}
            <div className="horizontal">
                <ul className="link">
                    <Link to="/product_detail" className="dropdown-button" >
                        <li className="dropdown-container ">
                            나도살래
                            <div className="dropdown-content">
                                <DropdownLink link="/my_univ" title="우리학교" />
                                <DropdownLink link="/other_univs" title="다른학교" />
                            </div>
                        </li>
                    </Link>

                    <li><Link  to="/">나도팔래</Link></li>
                    <li><Link to="/">졸작볼래</Link></li>
                    <li><Link to="/">주문제작 사이트</Link></li>
                </ul>
            </div>
            <ul className="link">
                <li className="horizontal"><Link to="/">커뮤니티</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;