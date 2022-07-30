import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Nav = () => {
    return (
        <>
            <nav>
                <figure className="logo click">
                    <img src={logo} alt="" className="logo__image" />
                </figure>
                <ul className="nav__links--list">
                    <li className="nav__link">
                        <Link
                            to="/"
                            className="nav__link--anchor link__hover-effect"
                        >Home</Link>
                    </li>
                    <li className="nav__link">
                        <Link
                            to="/browse"
                            className="nav__link--anchor link__hover-effect"
                        >Browse</Link>
                    </li>
                    <li className="nav__link">
                        <Link
                            to="/watchlist"
                            className="nav__link--anchor link__hover-effect"
                        >Watchlist</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Nav;
