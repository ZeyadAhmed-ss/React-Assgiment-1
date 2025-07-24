import React from "react";
import style from "./contact.module.css";

export default function Contact() {
  return (
    <div className="container my-5">
      <h1 className="text-center">CONATCTT SECTION</h1>
      <div className="decoration mx-auto mb-4"></div>

      <form className="row g-3 justify-content-center">
        <div className="col-12 col-md-8">
          <input
            type="text"
            placeholder="userName"
            className={`form-control ${style.customInput}`}
          />
        </div>
        <div className="col-12 col-md-8">
          <input type="text" placeholder="userAge" className={`form-control ${style.customInput}`} />
        </div>
        <div className="col-12 col-md-8">
          <input
            type="email"
            placeholder="userEmail"
            className={`form-control ${style.customInput}`}
          />
        </div>
        <div className="col-12 col-md-8">
          <input
            type="password"
            placeholder="userPassword"
            className={`form-control ${style.customInput}`}
          />
        </div>
        <div className="col-12 col-md-8">
          <button
            type="submit"
            className="btn"
            style={{ backgroundColor: "#1ABC9C", color: "white" }}
          >
            send Message
          </button>
        </div>
      </form>
    </div>
  );
}
