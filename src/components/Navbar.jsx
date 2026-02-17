import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPortfolioDropdownOpen, setIsPortfolioDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
    setIsPortfolioDropdownOpen(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg app-navbar">
        <div className="container">
          <Link className="navbar-brand" to="/" onClick={closeMobileMenu}>
            <img
              src="/wp-content/uploads/Logo-2-1-1.webp"
              alt="rmaac logo"
              loading="eager"
            />
          </Link>
          <button
            className="navbar-toggler app-navbar-toggler"
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-controls="navbarText"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse app-navbar-collapse ${isMobileMenuOpen ? "show" : ""}`}
            id="navbarText"
          >
            <ul className="navbar-nav ms-auto col-sm-9 justify-content-between me-auto">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link fw-medium text-light ${isActive ? "active" : ""}`
                  }
                  to="/"
                  onClick={closeMobileMenu}
                  end
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link fw-medium text-light ${isActive ? "active" : ""}`
                  }
                  to="/about"
                  onClick={closeMobileMenu}
                >
                  About Us
                </NavLink>
              </li>
              <li
                className="nav-item dropdown"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <NavLink
                  className={({ isActive }) =>
                    `nav-link dropdown-toggle text-light fw-medium ${isActive ? "active" : ""}`
                  }
                  to="/servicespage"
                  onClick={closeMobileMenu}
                >
                  What We Offer
                </NavLink>
                {/* Conditional rendering for the dropdown menu */}
                <ul
                  className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}
                  style={{ marginTop: 0 }}
                >
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/itsolutionspage"
                      onClick={closeMobileMenu}
                    >
                      REAL ESTATE DEVELOPMENT & IT SOLUTIONS
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/digitalmarketingpage"
                      onClick={closeMobileMenu}
                    >
                      Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/appdevelopmentpage"
                      onClick={closeMobileMenu}
                    >
                      App Development
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/realestatepgae"
                      onClick={closeMobileMenu}
                    >
                      Real Estate & Investor Platforms
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className="nav-item dropdown"
                onMouseEnter={() => setIsPortfolioDropdownOpen(true)}
                onMouseLeave={() => setIsPortfolioDropdownOpen(false)}
              >
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link dropdown-toggle text-light fw-medium ${isActive ? "active" : ""}`
                    }
                    to="/portfoliopage"
                    onClick={closeMobileMenu}
                  >
                    Portfolio
                  </NavLink>
                  <ul
                    className={`dropdown-menu ${isPortfolioDropdownOpen ? "show" : ""}`}
                    style={{ marginTop: 0 }}
                  >
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/automationpage"
                        onClick={closeMobileMenu}
                      >
                        Automation & Cybersecurity
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/digitalsuccesspage"
                        onClick={closeMobileMenu}
                      >
                        Digital Success
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/realestateportfoliopage"
                        onClick={closeMobileMenu}
                      >
                        Real Estate
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    
                    
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/healthcarepage"
                        onClick={closeMobileMenu}
                      >
                        Health Care
                      </Link>
                    </li>
                  </ul>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-light fw-medium"
                  to="/ourapproachpage"
                  onClick={closeMobileMenu}
                >
                  Our Approach
                </Link>
              </li>
            </ul>
            <Link
              className="navbar-text text-light fw-medium border-bottom border-top p-3 mt-3 mt-md-0 app-navbar-contact"
              to="/contactpage"
              onClick={closeMobileMenu}
              style={{ textDecoration: 'none' }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
