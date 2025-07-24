import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.aboutSection}>
      <div className="container py-5">
        <h1 className="text-center mb-5 text-white">ABOUT COMPONENT</h1>
        <div className="row justify-content-center">
          <div className="col-12 col-md-5 mb-4">
            <p className="text-white fs-5 text-start">
              Freelancer is a free bootstrap theme created by Route. The download
              includes the complete source files including HTML, CSS, and JavaScript
              as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
          <div className="col-12 col-md-5 mb-4">
            <p className="text-white fs-5 text-start">
              Freelancer is a free bootstrap theme created by Route. The download
              includes the complete source files including HTML, CSS, and JavaScript
              as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

