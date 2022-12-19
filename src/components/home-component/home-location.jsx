
import React, { PureComponent, Fragment } from 'react';
import { Container, Col, Row } from 'bootstrap-4-react';
import loactionImage1 from './../../assets/My City Centre.svg';
import loactionImage2 from './../../assets/Miracle Garden.svg';
import loactionImage3 from './../../assets/Butterfly Garden.svg';
import loactionImage4 from './../../assets/Dubai Airport.svg';
import loactionImage5 from './../../assets/Global Village.svg';
import loactionImage6 from './../../assets/Mall Of Emirates.svg';
import loactionImage7 from './../../assets/Burj Khalifa.svg';
import loactionImage8 from './../../assets/Dubai Airport.svg';
import loactionImage9 from './../../assets/The Palm.svg';
import loactionImage10 from './../../assets/Marquis_Signature_Landing_Assets-24.svg';
import loactionImage11 from './../../assets/Marquis_Signature_Landing_Assets-25.svg';
import loactionImage12 from './../../assets/Marquis_Signature_Landing_Assets-26.svg';

class HomeLocation extends PureComponent {

    render() {
        return (
            <Fragment>
                <section className="homelocation-sec" id="homelocation-sec">
                    <Container fluid className="wrap homelocation-container">
                        <Row className="location-heading-row">
                            <Col md={7} className="location-heading-col">
                                <div className="location-heading-div" data-aos='fade-up'>
                                    <h2 className="location-heading darkBlue">Location</h2>
                                    <h5 className="location-heading-text" data-aos='fade-up'>e World’s <span className="whiteColor">Dream Location</span></h5>

                                    <p className="para-text whiteColor">You can reach the happening places in Dubai in a matter of minutes.
                                        Shopping,entertainment, leisure, educational institutions or anything you desire is close by.
                                        So close that, all it takes is a short drive. So, be ready to live life to the fullest</p>
                                    {/* <p className="para-text" data-aos='fade-up'>You can reach the happening places in Dubai in a matter of minutes. Shopping,entertainment, leisure, educational institutions or
                                        anything you desire is close by. So close that, all it takes is a short drive. So, be ready to live life to the fullest.</p> */}
                                </div>
                            </Col>
                        </Row>

                        <Row className="locations-spacing-row">
                            <Col md={12} lg={12} xl={12} sm={12} className="locations-spacing-col">
                                <Row className="locations-images-row">
                                    <Col md={2} className="locations-images-col">
                                        <div className="locations-images-div loc-img1" data-aos='fade-up'>
                                            <div className="overlay"></div>
                                            <img src={loactionImage1} className="img-fluid" alt="loaction-image1" />
                                            <span className="time-text">5 MINUTES</span>
                                        </div>
                                        <div className="location-bottom-text" data-aos='fade-up'>
                                            <p>My City Centre
                                                Al Barsha</p>
                                        </div>
                                    </Col>
                                    <Col md={2} className="locations-images-col">
                                        <div className="locations-images-div loc-img2" data-aos='fade-up'>
                                            <div className="overlay"></div>
                                            <img src={loactionImage2} className="img-fluid" alt="loaction-image2" />
                                            <span className="time-text">10 MINUTES</span>
                                        </div>
                                        <div className="location-bottom-text" data-aos='fade-up'>
                                            <p>Miracle Garden</p>
                                        </div>
                                    </Col>
                                    <Col md={2} className="locations-images-col">
                                        <div className="locations-images-div loc-img3" data-aos='fade-up'>
                                            <div className="overlay"></div>
                                            <img src={loactionImage3} className="img-fluid" alt="loaction-image3" />
                                            <span className="time-text">13 MINUTES</span>
                                        </div>
                                        <div className="location-bottom-text" data-aos='fade-up'>
                                            <p>Butterfly Garden</p>
                                        </div>
                                    </Col>
                                    <Col md={2} className="locations-images-col">
                                        <div className="locations-images-div loc-img4" data-aos='fade-up'>
                                            <div className="overlay"></div>
                                            <img src={loactionImage4} className="img-fluid" alt="loaction-image4" />
                                            <span className="time-text">20 MINUTES</span>
                                        </div>
                                        <div className="location-bottom-text" data-aos='fade-up'>
                                            <p>Dubai Autodrome</p>
                                        </div>
                                    </Col>
                                    <Col md={2} className="locations-images-col">
                                        <div className="locations-images-div loc-img5" data-aos='fade-up'>
                                            <div className="overlay"></div>
                                            <img src={loactionImage5} className="img-fluid" alt="loaction-image5" />
                                            <span className="time-text">20 MINUTES</span>
                                        </div>
                                        <div className="location-bottom-text" data-aos='fade-up'>
                                            <p>Global Village</p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="locations-images-row">
                                    <Col md={2} className="locations-images-col">
                                        <div className="locations-images-div loc-img6" data-aos='fade-up'>
                                            <div className="overlay"></div>
                                            <img src={loactionImage6} className="img-fluid" alt="loaction-image6" />
                                            <span className="time-text">20 MINUTES</span>
                                        </div>
                                        <div className="location-bottom-text" data-aos='fade-up'>
                                            <p>Mall Of the Emirates </p>
                                        </div>
                                    </Col>
                                    <Col md={2} className="locations-images-col">
                                        <div className="locations-images-div loc-img7" data-aos='fade-up'>
                                            <div className="overlay"></div>
                                            <img src={loactionImage7} className="img-fluid" alt="loaction-image7" />
                                            <span className="time-text">20 MINUTES</span>
                                        </div>
                                        <div className="location-bottom-text" data-aos='fade-up'>
                                            <p>Burj Al Arab</p>
                                        </div>
                                    </Col>
                                    <Col md={2} className="locations-images-col">
                                        <div className="locations-images-div loc-img8" data-aos='fade-up'>
                                            <div className="overlay"></div>
                                            <img src={loactionImage8} className="img-fluid" alt="loaction-image8" />
                                            <span className="time-text">23 MINUTES</span>
                                        </div>
                                        <div className="location-bottom-text" data-aos='fade-up'>
                                            <p>Burj Khalifa</p>
                                        </div>
                                    </Col>
                                    <Col md={2} className="locations-images-col">
                                        <div className="locations-images-div loc-img9" data-aos='fade-up'>
                                            <div className="overlay"></div>
                                            <img src={loactionImage9} className="img-fluid" alt="loaction-image9" />
                                            <span className="time-text">24 MINUTES</span>
                                        </div>
                                        <div className="location-bottom-text" data-aos='fade-up'>
                                            <p>Dubai International
                                                Airport
                                            </p>
                                        </div>
                                    </Col>
                                    <Col md={2} className="locations-images-col">
                                        <div className="locations-images-div loc-img10" data-aos='fade-up'>
                                            <div className="overlay"></div>
                                            <img src={loactionImage10} className="img-fluid" alt="loaction-image10" />
                                            <span className="time-text">25 MINUTES</span>
                                        </div>
                                        <div className="location-bottom-text" data-aos='fade-up'>
                                            <p>The Palm</p>
                                        </div>
                                    </Col>

                                </Row>
                            </Col>
                        </Row>



                    </Container>

                    {/* <Container fluid className="padding-zero">
                        <Row>
                            <Col md={12}>
                                <div className='google-maps'>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.151612649106!2d55.2309725154474!3d25.062849943287368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6f14fc5828d1%3A0x6f1987f4d8a58415!2sMarquis%20Signature!5e0!3m2!1sen!2sin!4v1656489655731!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </Col>
                        </Row>
                    </Container> */}

                </section>
            </Fragment>
        )
    }
}


export default HomeLocation