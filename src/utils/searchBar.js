import React from 'react';

const SearchBar = () => {
    return (
        <form>
            <div className="g-search-wrap"><span className="g-srch-icon"><i className="fa fa-search"></i></span><input className="g-srch" type="search" placeholder="Search" /></div>
        </form>
    )
}

export default SearchBar;