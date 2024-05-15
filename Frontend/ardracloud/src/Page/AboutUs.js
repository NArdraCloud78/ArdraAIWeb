import React from 'react';

const AboutUs = () => {
    return (
        <div>
            {/* Banner start */}
            <span id="bakcg1"></span>
            <section className="about-us">
                {/* about-us content start */}
                <section className="about-us-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9 mx-auto text-center mb-5">
                                <div className="heading-holder">
                                    <h1>ArdraIOT</h1>
                                </div>
                                <div className="text-holder">
                                    <p>It is a framework for IoT applications.</p>
                                    <p><b>Hardware + Software = Edge device + cloud</b></p>
                                </div>
                            </div>

                            <div className="row mb-5">
                                <div className="col-md-4 mx-auto text-center mb-4">
                                    <div className="heading-holder">
                                        <h2>Any device <span></span></h2>
                                    </div>
                                </div>
                                <div className="col-md-4 mx-auto text-center mb-4">
                                    <div className="heading-holder">
                                        <h2>Any Data <span></span></h2>
                                    </div>
                                </div>
                                <div className="col-md-4 mx-auto text-center mb-4">
                                    <div className="heading-holder">
                                        <h2>Secured <span></span></h2>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-9 mx-auto text-center mb-4">
                                <div className="heading-holder">
                                    <h1>About Us</h1>
                                </div>
                                <div className="text-holder">
                                    <p>Founded in 2018, we are a technology consultant company helping companies including fortune 500 clients with our hardware and software solutions.</p>
                                </div>
                            </div>
                            <div className="col-md-9 mx-auto text-center mb-4">
                                <div className="heading-holder">
                                    <h2>Established in 2018</h2>
                                </div>
                                <div className="text-holder">
                                    <p>We are a team of Engineers, Data scientists and developers from Germany, US and India who are experts in Industrial AI - Model predictive controlling - IoT and Sustainability. Our product is SaaS based for Industry 4.0 applications with following key features:</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* about-us content end */}
                {/* year section start */}
                <section className="year">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-2">
                                <div className="year-holder">
                                    <div className="icon-holder mx-auto">
                                        <img src="frontend/assets/images/icon/star.png" alt=".." />
                                    </div>
                                    <div className="content-holder">
                                        <h3><span></span> Hardware agnosticism </h3>
                                    </div>
                                </div>
                            </div>
                            {/* Other year-holder divs */}
                        </div>
                    </div>
                    <span id="bakcg1"></span>
                </section>
                {/* year section end */}
                {/* Servicing Markets start */}
                <section className="servicing-markets">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-md-9 mx-auto text-center mb-4">
                                <div className="heading-holder">
                                    <h3>Servicing Markets</h3>
                                </div>
                                <div className="text-holder mb-5"></div>
                                <div className="col-md-10 mx-auto">
                                    <div className="row justify-content-between">
                                        {/* APAC, MENA, US, Europe */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Servicing Markets section end */}
                {/* team section start */}
                <section className="team">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-md-9 mx-auto text-center mb-4">
                                <div className="heading-holder">
                                    <h3>Meet our team <span></span></h3>
                                </div>
                            </div>
                        </div>
                        <div className="row" id="cards">
                            <div className="container py-2">
                                {/* Team cards */}
                                <div className="row">
                                    {/* Team members */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* team section end */}
            </section>
            {/* about-us  end*/}
            {/* testimonial End */}
        </div>
    );
};

export default AboutUs;
