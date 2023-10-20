import React from 'react'
import { Link } from 'react-router-dom'


export default function Shop() {
  return (
    <>
        {/* <!-- Start Product Section --> */}
        <div className="product-section">
        <div className="container">
          <div className="row">
            {/* <!-- Start Column 1 --> */}
            <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
              <h2 className="mb-4 section-title">
                Crafted with excellent material.
              </h2>
              <p className="mb-4">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate velit imperdiet dolor tempor tristique.{" "}
              </p>
              <p>
                <Link to="/shop" className="btn">
                  Explore
                </Link>
              </p>
            </div>
            {/* <!-- End Column 1 --> */}

            {/* <!-- Start Column 2 --> */}
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <Link className="product-item" to="">
                <img
                  src="images/product-1.jpg"
                  className="img-fluid product-thumbnail"
                  alt=""
                />
                <h3 className="product-title">Nike</h3>
                <strong className="product-price"> &#x20B9;5000.00</strong>

                <span className="icon-cross">
                  <img src="images/cross.svg" className="img-fluid" />
                </span>
              </Link>
            </div>
            {/* <!-- End Column 2 --> */}

            {/* <!-- Start Column 3 --> */}
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <Link className="product-item" to="cart.html">
                <img
                  src="images/product-2.jpg"
                  className="img-fluid product-thumbnail"
                  alt=""
                />
                <h3 className="product-title">Kruzo Nike</h3>
                <strong className="product-price">&#x20B9;7800.00</strong>

                <span className="icon-cross">
                  <img src="images/cross.svg" className="img-fluid" />
                </span>
              </Link>
            </div>
            {/* <!-- End Column 3 --> */}

            {/* <!-- Start Column 4 --> */}
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <Link className="product-item" to="cart.html">
                <img
                  src="images/product-3.jpg"
                  className="img-fluid product-thumbnail"
                  alt=""
                />
                <h3 className="product-title">Ergonomic sneaker</h3>
                <strong className="product-price">&#x20B9;4300.00</strong>

                <span className="icon-cross">
                  <img src="images/cross.svg" className="img-fluid" />
                </span>
              </Link>
            </div>
            {/* <!-- End Column 4 --> */}
             {/* <!-- Start Column 5 --> */}
             <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <Link className="product-item" to="cart.html">
                <img
                  src="images/product-3.jpg"
                  className="img-fluid product-thumbnail"
                  alt=""
                />
                <h3 className="product-title">Ergonomic sneaker</h3>
                <strong className="product-price">&#x20B9;4300.00</strong>

                <span className="icon-cross">
                  <img src="images/cross.svg" className="img-fluid" />
                </span>
              </Link>
            </div>
            {/* <!-- End Column 5 --> */}
            {/* <!-- Start Column 6 --> */}
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <Link className="product-item" to="">
                <img
                  src="images/product-1.jpg"
                  className="img-fluid product-thumbnail"
                  alt=""
                />
                <h3 className="product-title">Nike</h3>
                <strong className="product-price"> &#x20B9;5000.00</strong>

                <span className="icon-cross">
                  <img src="images/cross.svg" className="img-fluid" />
                </span>
              </Link>
            </div>
            {/* <!-- End Column 6 --> */}

            {/* <!-- Start Column 7 --> */}
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <Link className="product-item" to="cart.html">
                <img
                  src="images/product-2.jpg"
                  className="img-fluid product-thumbnail"
                  alt=""
                />
                <h3 className="product-title">Kruzo Nike</h3>
                <strong className="product-price">&#x20B9;7800.00</strong>

                <span className="icon-cross">
                  <img src="images/cross.svg" className="img-fluid" />
                </span>
              </Link>
            </div>
            {/* <!-- End Column 7 --> */}
             {/* <!-- Start Column 8 --> */}
             <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <Link className="product-item" to="">
                <img
                  src="images/product-1.jpg"
                  className="img-fluid product-thumbnail"
                  alt=""
                />
                <h3 className="product-title">Nike</h3>
                <strong className="product-price"> &#x20B9;5000.00</strong>

                <span className="icon-cross">
                  <img src="images/cross.svg" className="img-fluid" />
                </span>
              </Link>
            </div>
            {/* <!-- End Column 8 --> */}
               {/* <!-- Start Column 9 --> */}
               <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <Link className="product-item" to="">
                <img
                  src="images/product-1.jpg"
                  className="img-fluid product-thumbnail"
                  alt=""
                />
                <h3 className="product-title">Nike</h3>
                <strong className="product-price"> &#x20B9;5000.00</strong>

                <span className="icon-cross">
                  <img src="images/cross.svg" className="img-fluid" />
                </span>
              </Link>
            </div>
            {/* <!-- End Column 9 --> */}

            {/* <!-- Start Column 10 --> */}
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <Link className="product-item" to="cart.html">
                <img
                  src="images/product-2.jpg"
                  className="img-fluid product-thumbnail"
                  alt=""
                />
                <h3 className="product-title">Kruzo Nike</h3>
                <strong className="product-price">&#x20B9;7800.00</strong>

                <span className="icon-cross">
                  <img src="images/cross.svg" className="img-fluid" />
                </span>
              </Link>
            </div>
            {/* <!-- End Column 10 --> */}

            {/* <!-- Start Column 11 --> */}
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <Link className="product-item" to="cart.html">
                <img
                  src="images/product-3.jpg"
                  className="img-fluid product-thumbnail"
                  alt=""
                />
                <h3 className="product-title">Ergonomic sneaker</h3>
                <strong className="product-price">&#x20B9;4300.00</strong>

                <span className="icon-cross">
                  <img src="images/cross.svg" className="img-fluid" />
                </span>
              </Link>
            </div>
            {/* <!-- End Column 11 --> */}
             {/* <!-- Start Column 12 --> */}
             <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <Link className="product-item" to="cart.html">
                <img
                  src="images/product-2.jpg"
                  className="img-fluid product-thumbnail"
                  alt=""
                />
                <h3 className="product-title">Ergonomic sneaker</h3>
                <strong className="product-price">&#x20B9;4300.00</strong>

                <span className="icon-cross">
                  <img src="images/cross.svg" className="img-fluid" />
                </span>
              </Link>
            </div>
            {/* <!-- End Column 12 --> */}
            {/* <!-- Start Column 13 --> */}
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <Link className="product-item" to="">
                <img
                  src="images/product-1.jpg"
                  className="img-fluid product-thumbnail"
                  alt=""
                />
                <h3 className="product-title">Nike</h3>
                <strong className="product-price"> &#x20B9;5000.00</strong>

                <span className="icon-cross">
                  <img src="images/cross.svg" className="img-fluid" />
                </span>
              </Link>
            </div>
            {/* <!-- End Column 13 --> */}

            {/* <!-- Start Column 14 --> */}
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <Link className="product-item" to="cart.html">
                <img
                  src="images/product-2.jpg"
                  className="img-fluid product-thumbnail"
                  alt=""
                />
                <h3 className="product-title">Kruzo Nike</h3>
                <strong className="product-price">&#x20B9;7800.00</strong>

                <span className="icon-cross">
                  <img src="images/cross.svg" className="img-fluid" />
                </span>
              </Link>
            </div>
            {/* <!-- End Column 14 --> */}
             {/* <!-- Start Column 15 --> */}
             <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <Link className="product-item" to="">
                <img
                  src="images/product-1.jpg"
                  className="img-fluid product-thumbnail"
                  alt=""
                />
                <h3 className="product-title">Nike</h3>
                <strong className="product-price"> &#x20B9;5000.00</strong>

                <span className="icon-cross">
                  <img src="images/cross.svg" className="img-fluid" />
                </span>
              </Link>
            </div>
            {/* <!-- End Column 15 --> */}
             {/* <!-- Start Column 16 --> */}
             <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <Link className="product-item" to="">
                <img
                  src="images/product-3.jpg"
                  className="img-fluid product-thumbnail"
                  alt=""
                />
                <h3 className="product-title">Nike</h3>
                <strong className="product-price"> &#x20B9;5000.00</strong>

                <span className="icon-cross">
                  <img src="images/cross.svg" className="img-fluid" />
                </span>
              </Link>
            </div>
            {/* <!-- End Column 16 --> */}
          </div>
        </div>
      </div>
      {/* <!-- End Product Section --> */}
    </>
  )
}
