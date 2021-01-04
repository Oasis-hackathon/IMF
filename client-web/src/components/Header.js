import React from 'react';
import { Link } from 'react-router-dom';
import SearchButton from './SearchButton';
import LoginButton from './assets/LoginButton';
import DropdownLink from './DropdownLink';

const Header = () => {
    return (
        <header>
            <div className="header container">
                <Link to="/" >
                    <img className="logo" src={window.location.origin + "/images/logo.png"} alt="logo" />
                </Link>
                <div className="header-inner horizontal">
                    <div id="search-top-container">
                        <form className="horizontal">
                            <input type="text" id="search-top-textfield" />
                            <SearchButton />
                        </form>
                    </div>
                    <div className="horizontal">
                        <LoginButton />
                        <div className="vertical-devider" />
                        <div className="dropdown-container ">
                            <div className="link dropdown-button">마이페이지</div>
                            <div className="dropdown-content">
                                <DropdownLink link="/myInfo" title="내 정보"/>
                                <DropdownLink link="/cart" title="장바구니" />
                                <DropdownLink link="/wish" title="Wish 목록" />
                                <DropdownLink link="/myOrder" title="주문보기" />
                                <DropdownLink link="/myProduct" title="상품관리" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;