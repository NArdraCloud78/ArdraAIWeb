import React from 'react';
import './Home.css'
import data_centric from '../frontendAssist/assets/images/data-centric.png'
import connect_anything from '../frontendAssist/assets/images/icon/Connect-Anything.png'
import developer from '../frontendAssist/assets/images/developer.png'
import ContactForm from '../Component/ContactForm';
function Home() {
  return (
    <div>
      {/* Banner start */}
      <section className="banner mb-3 ">
        <div className="container">
          <div className="row">
            <div className="col-md-6 order-lg-0 order-1">
              <div className="header-holder">
                <div className="animatoion1">
                  <span id="bg1"></span>
                </div>
                <h1 className="mb-3">Any device. <br />Any data.<br />Secured.</h1>
                <p><span>Ardra Cloud is a no-code IoT app builder platform for teams looking to scale up their IoT delivery. Build in minutes and share the dashboard with your clients or users with a full stack Admin panel.
                </span></p>
                <p><span>These are used for making digital twins, energy monitoring, Genset/machine automation, industrial automation, and every application which needs hardware to send data to the cloud securely.</span></p>
              </div>
              <div className="col-md-12 order-lg-1 order-0">
                <a href="https://app.ardracloud.com/" target="_blank" className="btn startBtn me-5 py-2">Get Started</a>
                <a href="home#con-sales">Contact Sales <img src="frontend/assets/images/icon/right-angle.png" className="ms-2"
                  alt="contact sales" /></a>
              </div>
            </div>
            <div className="col-md-6">
              <span id="bg2"></span>
              <div className="col-md-8 col-6 mx-auto">
                <div className="animation-holder">
                  <span id="circle"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       {/* Banner end */}

       {/* tructed By start */}

    <section className="trusted-by  mb-3 ">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="heading-holder">
              <h2>Trusted By</h2>
              <span className="line"></span>
            </div>
          </div>
          <div className="col-md-12">
            <ul className="nav justify-content-between">
              <li className="nav-item text-center mx-1">
                <a className="nav-link active" href="#"><img src="frontend/assets/images/icon/Oil-%26-NG.png" alt="contact sales" /><span>Oil & NG</span></a>
              </li>
              <li className="nav-item text-center mx-1">
                <a className="nav-link" href="#"><img src="frontend/assets/images/icon/Energy-companies.png" alt="contact sales" /> <span>Energy Companies</span></a>
              </li>
              <li className="nav-item text-center mx-1">
                <a className="nav-link" href="#"><img src="frontend/assets/images/icon/SOLAR.png" alt="contact sales" /> <span>Solar, EV</span></a>
              </li>
              <li className="nav-item text-center mx-1">
                <a className="nav-link" href="#"><img src="frontend/assets/images/icon/EMISSION.png" alt="contact sales" /><span>Emission Monitoring</span></a>
              </li>
              <li className="nav-item text-center mx-1">
                <a className="nav-link" href="#"><img src="frontend/assets/images/icon/Industrial-Automation.png" alt="contact sales" /> <span>Industrial Automation</span></a>
              </li>
            </ul>
          </div>
          <div className="col-md-12 text-center my-5">
            <a href="home#con-sales" className="btn connectBtn py-2">Contact Sales</a>
          </div>
        </div>
      </div>
    </section>
    {/* trusted by end */}

    {/* <!-- data centric start --> */}

    <section className="data-centric mb-3 ">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="header-holder">
              <p>Integrated solutions for all your needs</p>
              <h3 className="mb-3">Data-Centric <br />IoT life cycle</h3>
              <span>Users can build with our no-code builder platform - usually reducing development time from days to minutes and the engineering team to just a developer.</span>
            </div>
            <div className="col-md-12">
              <a href="home#con-sales" className="btn connectBtn me-5 py-2" type="button">Connect Sales</a>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <div className="img-holder p-3">
              <img src={data_centric} className="img-fluid" alt="data-centric" />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- data centric end --> */}


    {/* product start */}

    <section className="feature mb-3 " id="features">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 feature-div">
                        <div className="d-lg-flex d-block">
                            <div className="icon-holder">
                                <img src={connect_anything} alt="Connect Anything" />
                            </div>
                            <div className="text-holder">
                                <h4>Connect Anything</h4>
                                <span>Any device with a network can be connected to ardrasync</span>
                                <div className="col-md-12 my-2">
                                    <a href="#con-sales">Contact Sales <img src="frontend/assets/images/icon/right-angle.png" className="ms-2" alt="contact sales" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 feature-div">
                        <div className="d-lg-flex d-block">
                            <div className="icon-holder">
                                <img src="frontend/assets/images/icon/Access-Management.png" alt="Access Management" />
                            </div>
                            <div className="text-holder">
                                <h4>Access Management</h4>
                                <span>Manage devices, users, data, dashboard at one place</span>
                                <div className="col-md-12 my-2">
                                    <a href="#con-sales">Contact Sales <img src="frontend/assets/images/icon/right-angle.png" className="ms-2" alt="contact sales" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 feature-div">
                        <div className="d-lg-flex d-block">
                            <div className="icon-holder">
                                <img src="frontend/assets/images/icon/Dashboard.png" alt="Dashboard" />
                            </div>
                            <div className="text-holder">
                                <h4>Dashboard</h4>
                                <span>All the data and controls on one screen - reporting and KPI’s</span>
                                <div className="col-md-12 my-2">
                                    <a href="#con-sales">Contact Sales <img src="frontend/assets/images/icon/right-angle.png" className="ms-2" alt="contact sales" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 feature-div">
                        <div className="d-lg-flex d-block">
                            <div className="icon-holder">
                                <img src="frontend/assets/images/icon/Alerts.png" alt="Alerts" />
                            </div>
                            <div className="text-holder">
                                <h4>Alerts</h4>
                                <span>Set up alerts for events or automate </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

         {/* product end */}

         {/* developer design start*/ }
         <section className="developer-design py-4 mb-3 " id="design">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-4">
                        <div className="header-holder">
                            <p>Developer-first design</p>
                            <span className="line"></span>
                            <h3 className="my-1">A unified platform with modern APIs</h3>
                        </div>
                    </div>
                    <div className="col-md-6 py-5">
                        <div className="text-holder">
                            <p>Ardra Provides a single, elegant interface that abstracts dozens of integrations.</p>
                        </div>
                        <div className="col-md-12 mb-5">
                            <button type="button" className="btn readBtn me-4 py-2"><a href="#">Read the docs</a></button>
                            <a href="#">Get your API key</a>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="icon-holder text-center">
                                    I
                                </div>
                                <div className="text-holder me-lg-5 me-0">
                                    <span>Restful APIs, JSON Responses and Normalized objects.</span>
                                </div>
                            </div>
                            {/* Repeat similar structure for other items */}
                        </div>
                    </div>
                    <div className="col-md-6 text-center">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="img-holder p-3">
                                    <img src={developer} className="img-fluid" alt="developer" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

          {/* Ardra Sync Section */}
          <section className="ardra-sync py-4 mb-3 " id="sync">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4">
                            <div className="header-holder mb-4">
                                <p>Ardra Sync</p>
                                <h3 className="my-1">Hardware & Software integrations? <span>NO SWEAT.</span></h3>
                            </div>
                            <div className="content-holder">
                                <p>Ardra Provides a single, elegant interface that abstracts dozens of integrations.</p>
                            </div>
                        </div>
                        <div className="col-md-12 text-center mb-5">
                            <button type="button" className="btn addBtn">Add Ardra Sync to your hardware</button>
                        </div>
                        <div className="col-md-6 feature-div">
                            <div className="d-lg-flex d-block">
                                <div className="icon-holder">
                                    <img src="frontend/assets/images/icon/ONE-API.png" alt="One API" />
                                </div>
                                <div className="text-holder">
                                    <h4>One API</h4>
                                    <span>Connect any hardware device within minutes.</span>
                                    <div className="col-md-12 my-2">
                                        <a href="#con-sales">Contact Sales <img src="frontend/assets/images/icon/right-angle.png" className="ms-2" alt="contact sales" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 feature-div">
                            <div className="d-lg-flex d-block">
                                <div className="icon-holder">
                                    <img src="frontend/assets/images/icon/ONE-Protocol.png" alt="One Protocol" />
                                </div>
                                <div className="text-holder">
                                    <h4>One protocol</h4>
                                    <span>Tracks hardware with unique IDs </span>
                                    <div className="col-md-12 my-2">
                                        <a href="#con-sales">Contact Sales <img src="frontend/assets/images/icon/right-angle.png" className="ms-2" alt="contact sales" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Ardra Sync Section End */}

            {/* Pure Admin Section */}
            <section className="ardra-sync py-4  mb-3" id="sync">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4">
                            <div className="header-holder mb-4">
                                <p>Pure Admin</p>
                                <h3 className="my-1">Complete control over your data</h3>
                            </div>
                            <div className="content-holder">
                                <p>Ardra Provides a single, elegant interface that abstracts dozens of integrations.</p>
                            </div>
                        </div>
                        <div className="col-md-12 text-center mb-5">
                            <a href="#" className="btn addBtn">Add Pure Admin to your hardware</a>
                        </div>
                        <div className="col-md-6 feature-div">
                            <div className="d-lg-flex d-block">
                                <div className="icon-holder">
                                    <img src="frontend/assets/images/icon/Access-Contol.png" alt="Access control" />
                                </div>
                                <div className="text-holder">
                                    <h4>Access control</h4>
                                    <span>Manage devices, projects and dashboard with who can access</span>
                                    <div className="col-md-12 my-2">
                                        <a href="#con-sales">Contact Sales <img src="frontend/assets/images/icon/right-angle.png" className="ms-2" alt="contact sales" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 feature-div">
                            <div className="d-lg-flex d-block">
                                <div className="icon-holder">
                                    <img src="frontend/assets/images/icon/Auto-Contol.png" alt="Auto control" />
                                </div>
                                <div className="text-holder">
                                    <h4>Auto control</h4>
                                    <span>Set up your rules for automation, control and reporting</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Pure Admin Section End */}

            {/* Why Ardra Section */}
            <section className="why  mb-3 ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="header-holder py-5">
                                <p>Why Ardra</p>
                                <h3 className="mb-4">Engineer your<br />imagination </h3>
                                <span className="mb-4">In the past , building an enterprise solution was complex, time-consuming and unsecure.</span>
                                <span className="mb-4">With Ardra you can stand out with the next-level power of UX Engineering in IoT and AI.</span>
                                <span className="mb-4">Start building your next project and expand your market.</span>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="img-holder p-5 text-center">
                                <div className="ratio ratio-21x9">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ZihL83OnYaQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Why Ardra Section End */}
                      {/* Testimonial Section */}
                      <section className="testimonial mb-3 ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-5">
                            <div className="header-holder">
                                <p>Powered By Ardra</p>
                                <h3 className="mb-4">Case Studies</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 ms-auto">
                            <div className="list-group" id="list-tab" role="tablist">
                                <a className="list-group-item list-group-item-action active" id="list-home-list"
                                    data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">
                                    <div className="d-flex">
                                        <div className="img-holder">
                                            <img src="frontend/assets/images/icon/small-star.png" alt="StoreEMS" />
                                        </div>
                                        <div className="name-holder ms-3">
                                            <h5>StoreEMS</h5>
                                            <span>ArdraEDGE hardware - EMS1.0</span>
                                        </div>
                                    </div>
                                </a>
                                {/* Repeat for other case studies */}
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="tab-content px-3" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="list-home" role="tabpanel"
                                    aria-labelledby="list-home-list">
                                    <div className="text-holder">
                                        <p>Customer-facing smart energy monitoring system for growing teams of energy consultants, utilities, and managers. Our innovative cloud-based enterprise energy management dashboard lets you manage, monitor, and analyze energy use online in one place.</p>
                                        <p>For energy professionals, consultants, facility managers, everyone.</p>
                                        <div className="col-md-12 my-2">
                                            <a href="#con-sales">Contact Sales <img src="frontend/assets/images/icon/right-angle.png" className="ms-2"
                                                    alt="contact sales" /></a>
                                        </div>
                                    </div>
                                </div>
                                {/* Add content for other case studies */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Testimonial Section End */}

            {/* Contact Us Section */}
            <section   className='contact-us mb-3'>
            <div class="row">
                    <div class="col-md-12 mb-5">
                        <div class="header-holder">
                            <p>Contact Our</p>
                            <h3 class="mb-4">Sales</h3>
                        </div>
                    </div>
                </div>

              <div className='row' >
              <div className='col-md-5' >
              <ContactForm/>
              </div>

              </div>
                
            </section>



  



    </div>
  );
}

export default Home;
