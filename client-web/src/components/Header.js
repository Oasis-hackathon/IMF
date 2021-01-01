import React from 'react';
import { Link } from 'react-router-dom';
import SearchButton from './SearchButton';
import LoginButton from './assets/LoginButton';

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
                        <Link to="/mypage" className="link" >마이페이지</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;