import React from "react";
import "./css/Nav.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg shadow fixed-top">
      <div className="container-fluid">
        <h1>kk</h1>
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
          <ul className="navbar-nav me-auto ms-5 mb-2 mb-lg-0  navbar">
            <li className="nav-item">
              <a style={{ color: "black" }} className="nav-link" href="#home">
               
                {/* <i className="fa-solid fa-house-user"></i> */}
                 Home
              </a>
            </li>
            <li className="nav-item">
              <a style={{ color: "black" }} className="nav-link" href="#about">
                {/* <i className="fa-solid fa-user"></i>  */}
                About
              </a>
            </li>
            <li className="nav-item">
              <a style={{ color: "black" }} className="nav-link" href="#skills">
               
                {/* <i className="fa-solid fa-image"></i>  */}Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                style={{ color: "black" }}
                className="nav-link"
                href="#portfolio"
              >
                {/* <i className="fa-solid fa-address-card"></i> */}
                 Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                style={{ color: "black" }}
                className="nav-link"
                href="#Contact"
              >
             
                {/* <i className="fa-solid fa-phone"></i> */}
                 ContactMe
              </a>
            </li>
          
          </ul>
          {/* <a className="navbar-brand fw-bolder fs-4 mx-auto" href="d">Kishor</a> */}
          {/* <button classNameName='btn btn-outline-primary ms-auto px-4 rounded-pill'><i className="fa-solid fa-right-to-bracket"></i>  Login</button>
<button classNameName='btn btn-outline-primary ms-2 px-4 rounded-pill'><i className="fa-solid fa-user-plus"></i>   Register</button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
