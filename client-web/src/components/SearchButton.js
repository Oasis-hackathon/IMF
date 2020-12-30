import React from 'react';

const SearchButton = () => {
    return (
        <button className="submit-button" type="submit">
            <img className="search-icon" src={window.location.origin + `/images/search.png`} alt="search-icon" />
        </button>
    )
}

export default SearchButton;