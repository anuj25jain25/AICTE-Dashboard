import React from 'react';
import {Link} from 'react-router-dom';
import SearchBar from './searchBar';

class NavBarr extends React.Component {
    render() {
        return (
            <div>
                <nav className="row navbar no-gutters fixed-top navbar-expand-lg navbar-dark">
                    <div className="col-6 col-sm-3">
                    <Link className="navbar-brand" to="/">AICTE</Link>
                    </div>
                    <div className="col-6 col-sm-3 order-sm-3">
                    </div>
                    <div className="col-12 col-sm-6 order-sm-2">
                    <SearchBar/>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBarr;