import React from 'react';
import { Link } from 'react-router-dom';
import DropdownLink from './DropdownLink';

const Navbar = () => {
    return (
        <div className="navbar container">
            <div className="horizontal">

            <div className="dropdown-container ">
                <Link to="/product_detail" className="dropdown-button" >나도살래</Link>
                <div className="dropdown-content">
                    <DropdownLink link="/my_univ" title="우리학교" />
                    <DropdownLink link="/other_univs" title="다른학교" />
                </div>
            </div>

                <div className="vertical-devider" />
                <Link to="/">나도팔래</Link>
                <div className="vertical-devider" />
                <Link to="/">졸작볼래</Link>
                <div className="vertical-devider" />
                <Link to="/">주문제작 사이트</Link>
            </div>
            <div className="horizontal">
                <Link to="/">커뮤니티</Link>
            </div>
        </div>
    )
}

export default Navbar;