import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Nav() {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-dark ${styles.navbarCustom}`}
      >
        <div className="container">
          <NavLink
            className={`navbar-brand fw-bold ${styles.brandText}`}
            to="/"
          >
            START FRAMEWORK
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `nav-link fw-bold ${styles.linkCustom} ${
                      styles.ElementsText
                    } ${
                      isActive ? styles.activeLink : ""
                    }`
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/portfolio"
                  className={({ isActive }) =>
                    `nav-link fw-bold ${styles.linkCustom} ${
                      styles.ElementsText
                    } ${isActive ? styles.activeLink : ""}`
                  }
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `nav-link fw-bold ${styles.linkCustom} ${
                      styles.ElementsText
                    } ${
                      isActive ? styles.activeLink : ""
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
