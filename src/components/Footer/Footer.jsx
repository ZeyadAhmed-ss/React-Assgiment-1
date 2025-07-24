import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row py-5 justify-content-center text-center text-white">
          <div className="col-md-4 mb-4">
            <h5>LOCATION</h5>
            <p>
              2215 John Daniel Drive
              <br />
              Clark, MO 65243
            </p>
          </div>

          <div className="col-md-4 mb-4">
            <h5>AROUND THE WEB</h5>
            <div className="d-flex justify-content-center gap-3 mt-3">
              <a
                href="#"
                className={`${styles.icon} d-flex justify-content-center align-items-center rounded-circle`}
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className={`${styles.icon} d-flex justify-content-center align-items-center rounded-circle`}
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className={`${styles.icon} d-flex justify-content-center align-items-center rounded-circle`}
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="#"
                className={`${styles.icon} d-flex justify-content-center align-items-center rounded-circle`}
              >
                <i className="fas fa-globe"></i>
              </a>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <h5>ABOUT FREELANCER</h5>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </div>

      <div className={`${styles.footerBottom} text-center py-3`}>
        <p className="m-0">Copyright © Your Website 2021</p>
      </div>
    </footer>
  );
}
