import React from "react";
import { Link } from "react-router-dom";
import Shop from "./Shop";


export default function Navbar() {
  return (
    <>
      {/* <!-- Start Header/Navigation --> */}
      <nav
        className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
        arial-label="Furni navigation bar"
      >
        <div className="container">
          <Link className="navbar-brand" to="">
            BestFit Shoes<span>.</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsFurni"
            aria-controls="navbarsFurni"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsFurni">
            <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item active">
                <Link className="nav-link" to="./Home.jsx">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="./Shop.jsx">
                  Shop
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="About.js">
                  About us
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="Services.jsx">
                  Services
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="Blog.jsx">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="Contact.jsx">
                  Contact us
                </Link>
              </li>
            </ul>

            <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              <li>
                <Link className="nav-link" to="#">
                  <img src="images/user.svg " alt="" />
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="">
                  <img src="images/cart.svg " alt="" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- End Header/Navigation --> */}

      {/* <!-- Start Hero Section --> */}
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>
                  Modern comfort <span clsas="d-block">Design Shoes</span>
                </h1>
                <p className="mb-4">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate velit imperdiet dolor tempor
                  tristique.
                </p>
                <p>
                  <Link to="" className="btn btn-secondary me-2">
                    Shop Now
                  </Link>
                  <Link to="#" className="btn btn-white-outline">
                    Explore
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="hero-img-wrap">
                <img src="images/couch.png" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- End Hero Section --> */}
	  <Shop/>
    </>
  );
}
