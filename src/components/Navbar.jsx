import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <nav className="navbar navbar-expand-lg pt-4">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src="wp-content/uploads/2026/01/Logo-2-1.webp" alt="rmaac logo" loading='eager'/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav ms-auto col-sm-9 justify-content-between me-auto">
                            <li className="nav-item">
                                <a className="nav-link active fw-medium text-light" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-medium text-light" href="/about">About Us</a>
                            </li>
                            <li
                                className="nav-item dropdown"
                                onMouseEnter={() => setIsOpen(true)}
                                onMouseLeave={() => setIsOpen(false)}>
                                <a
                                    className="nav-link dropdown-toggle text-light fw-medium"
                                    href="#"
                                    role="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setIsOpen(!isOpen);
                                    }}>
                                    What We Offer
                                </a>
                                {/* Conditional rendering for the dropdown menu */}
                                <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`} style={{ marginTop: 0 }}>
                                    <li><a className="dropdown-item" href="#service1">REAL ESTATE DEVELOPMENT</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#service2">IT SOLUTIONS</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#service3">DIGITAL MARKETING</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#service3">APPS DEVELOPMENT</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light fw-medium" href="#">Porfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light fw-medium" href="#">Our Approach</a>
                            </li>
                        </ul>
                        <span className="navbar-text text-light fw-medium border-bottom border-top p-3">
                            Contact Us
                        </span>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
