import React from 'react';
import './Footer.css'
import facebook from '../frontendAssist/assets/images/icon/facebook.png'
import linkdin from '../frontendAssist/assets/images/icon/LINKEDIN.png'
import insta from '../frontendAssist/assets/images/icon/INSTA.png'
import footer_logo from '../frontendAssist/assets/images/logo/footer-Logo.png'

function Footer() {
  return (
    <div>
      {/* Footer start */}
      <section className="footer pt-4">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-2 px-lg-5 px-2 text-lg-center text-start mb-4">
              <a href="/">
                <img src={footer_logo} alt="contact sales" />
              </a>
            </div>
            <div className="col-md-2">
              <h3>Features</h3>
              <ul>
                <li><a href="home#featurs" target="_blank">Connect Anything</a></li>
                <li><a href="home#featurs" target="_blank">Access Management</a></li>
                <li><a href="home#featurs" target="_blank">Dashboard</a></li>
                <li><a href="home#featurs" target="_blank">Alerts</a></li>
              </ul>
            </div>

            <div className="col-md-2">
              <h3>Developers</h3>
              <ul>
                <li><a href="#" target="_blank">Documentation</a></li>
                <li><a href="#" target="_blank">Open Source</a></li>
                <li><a href="#" target="_blank">API Status</a></li>
              </ul>
            </div>

            <div className="col-md-2">
              <h3>Resources</h3>
              <ul>
                <li><a href="about.html" target="_blank">About</a></li>
                <li><a href="#" target="_blank">Case Study</a></li>
                <li><a href="#" target="_blank">Security</a></li>
                <li><a href="#" target="_blank">Careers</a></li>
              </ul>
            </div>

            <div className="col-md-2">
              <h3>Social Links</h3>
              <div className="social-links">
                <a href="https://www.instagram.com/explore/tags/ardracloud/" target="_blank">
                  <img src={insta} className="i1 mx-1" alt="..." width="25px" height="25px" />
                </a>
                <a href="https://www.facebook.com/ardracloud" target="_blank">
                  <img src={facebook} className="i2 mx-1" alt="..." width="25px" height="25px" />
                </a>
                <a href="https://www.linkedin.com/company/ardracloud/" target="_blank">
                  <img src={linkdin} className="i3 mx-1" alt="..." width="25px" height="25px" />
                </a>

                {/* now is not active */}

                
                {/* <a href="https://www.reddit.com/r/ArdraCloud/" target="_blank">
                  <img src="frontend/assets/images/icon/reddit.png" className="i4 mx-1" alt="..." width="25px" height="25px" />
                </a> */}
                {/* <a href="https://discord.com/invite/4RZnZq4Z" target="_blank">
                  <img src="frontend/assets/images/icon/discord.png" className="i5 mx-1" alt="..." width="25px" height="25px" />
                </a> */}
              </div>
            </div>
            <div className="col-md-12 my-2 text-center">
              <p>© 2024 All Rights Reserved By ArdraAI.Inc Terms Of Use | Privacy Policy </p>
            </div>
          </div>
        </div>
      </section>
      {/* Footer End */}
    </div>
  );
}

export default Footer;
