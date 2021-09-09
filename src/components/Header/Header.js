import React from 'react';
import { NavLink } from "react-router-dom";
import './Header.css';

function Header() {
    return (
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper">

                    <NavLink to="/">
                        <div className="brand-logo"><i class="fa fa-film" />Royal Cinema</div>
                    </NavLink>
                    <ul id="nav-mobile" className="right">

                        <li className="hide-on-med-and-down">
                            <NavLink activeClassName="selected" to="/search">
                                <i className="fa fa-search" />
                                Tìm kiếm
                            </NavLink>

                        </li>

                        <li className="hide-on-med-and-down" key="movie">
                            <NavLink activeClassName="selected" to="/type/movie">
                                Phim Chiếu Rạp
                            </NavLink>
                        </li>
                        <li className="hide-on-med-and-down" key="tv">
                            <NavLink activeClassName="selected" to="/type/tv">
                                TV Series
                            </NavLink>
                        </li>
                        <li className="imdb hide-on-med-and-down" key="top_imdb">
                            <NavLink activeClassName="selected" to="/type/top_imdb">
                                Top
                                <i class="fa fa-imdb" />
                            </NavLink>
                        </li>
                    </ul>



                </div>

                <div class="nav-content">
                    <ul class="tabs tabs-transparent">
                        <li class="tab">
                            <NavLink activeClassName="selected" to="/search">
                                <i className="fa fa-search" />
                                Tìm kiếm
                            </NavLink>
                        </li>
                        <li class="tab">
                            <NavLink activeClassName="selected" to="/type/movie">
                                Phim Chiếu Rạp
                            </NavLink>
                        </li>
                        <li class="tab">
                            <NavLink activeClassName="selected" to="/type/tv">
                                TV Series
                            </NavLink>
                        </li>
                        <li class="tab">
                            <NavLink activeClassName="selected" to="/type/top_imdb">
                                Top
                                <i class="fa fa-imdb" />
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;






