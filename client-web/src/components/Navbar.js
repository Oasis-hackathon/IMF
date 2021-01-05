import React from 'react';
import { Link } from 'react-router-dom';
import DropdownLink from './DropdownLink';

const Navbar = () => {
    return (
        <div className="navbar container">
            <div className="horizontal">
                <ul className="link">
                    <li className="dropdown-container ">
                            <div className="dropdown-button">나도살래</div>
                            
                            <div className="dropdown-content">
                                <DropdownLink link="/show_products/my_univ" title="우리학교" />
                                <DropdownLink link="/show_products/other" title="다른학교" />
                            </div>
                    </li>

                    <li><Link to="/posting_page">나도팔래</Link></li>
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