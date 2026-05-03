import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg bg-dark">

            <div className="container-fluid">
                <button
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    className="navbar-toggler"
                    data-bs-target="#navbarNav"
                    data-bs-toggle="collapse"
                    type="button">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="menu-btn" onClick={() => setOpen(!open)}>
                        <div className={`menu-icon ${open ? "open" : ""}`}>
                            <span />
                            <span />
                            <span />
                        </div>
                        <span className="menu-text">All</span>
                    </div>
                    <div className={`overlay ${open ? "show" : ""}`} onClick={() => setOpen(false)}></div>
                    <div className={`sidebar ${open ? "open" : ""}`}>
                        <div className="sidebar-header">
                            <h3>Hello, sign in</h3>
                            <span className="close-btn" onClick={() => setOpen(false)}>✖</span>
                        </div>

                        <div className="sidebar-section">
                            <h4>Trending</h4>
                            <a href="#">Bestsellers</a>
                            <a href="#">New Releases</a>
                            <a href="#">Movers and Shakers</a>
                        </div>


                        <div className="sidebar-section">
                            <h4>Digital Content and Devices</h4>
                            <a href="#">Echo & Alexa</a>
                            <a href="#">Fire TV</a>
                            <a href="#">Kindle E-Readers & eBooks</a>
                            <a href="#">Audible Audiobooks</a>
                            <a href="#">Amazon Prime Video</a>
                        </div>
                        <div className="sidebar-section">
                            <h4>Shop by Category</h4>
                            <a href="#">Mobiles, Computer</a>
                            <a href="#">TV, Appliance, Electronic</a>
                            <a href="#">Men's Fashion</a>
                            <a href="#">Women's Fashion</a>
                            <a href="#">See all </a>
                        </div>
                        <div className="sidebar-section">
                            <h4>Help & Setting</h4>
                            <a href="#">Your Account</a>
                            <a href="#">Customer Service</a>
                            <a href="#">Sign in</a>

                        </div>
                    </div>
                    <li className="nav-item">
                        <a className="nav-link" href="">MX Player</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">Sell</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Bestseller</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Today's Deals</a>
                    </li>
                    <li li className="nav-item">
                        <Link to={'/product'}className="nav-link" href="">Mobiles</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">
                            Prime
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Customer Service</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">New Releases</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Electronics</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Fashion</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Home & Kitchen</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Amazon Pay</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Computers</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Books</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Home</a>
                    </li>


                </div>
            </div>
        </nav>

    );
}

export default Nav;



