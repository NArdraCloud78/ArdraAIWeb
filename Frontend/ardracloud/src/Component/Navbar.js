import logo from '../frontendAssist/assets/images/logo/Logo.png'

import React from 'react';
import './Navbar.css'
function Navbar() {
  return (
    <div>
      {/* Navbar start */}
      <section className="header stricky py-2 mb-4  shadow-sm">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav justify-content-center">
                      <li className="nav-item mx-1">
                        <a className="nav-link active" aria-current="page" href="/"><img
                        
                          src={logo} alt="..." />
                         </a>
                      </li>
                      <li className="nav-item py-2">
                        <a className="nav-link active" aria-current="page"
                          href="/products">Products</a>
                      </li>
                      <li className="nav-item py-2">
                        <a className="nav-link" href="/about">About Us</a>
                      </li>
                      <li className="nav-item py-2">
                        <a className="nav-link" href="/design">Developers</a>
                      </li>
                      
                      <li className="nav-item py-2">
                        <a className="nav-link" href="/pricing">Pricing</a>
                      </li>

                      <li className="nav-item py-2">
                        <a className="nav-link" href="/contactus">Contact Us</a>
                      </li>

                      <li className="nav-item py-2">
                        <a href="https://app.ardracloud.com/" className="btn loginBtn"
                          type="submit">Sign In</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* Navbar end */}
    </div>
  );
}

export default Navbar;
