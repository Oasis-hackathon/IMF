import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar container">
            <div className="horizontal">
                <Link to="/">구경할래</Link>
                <div className="vertical-devider" />
                <Link to="/">문의사항</Link>
            </div>
            <div className="horizontal">
                <Link to="/">나도 팔래</Link>
            </div>
        </div>
    )
}

export default Navbar;