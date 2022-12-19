import React, { PureComponent, Fragment } from 'react'; 
import { Container, Col, Row } from 'bootstrap-4-react';  
import iconImg1 from './../../assets/Marquis_Galleria_Assets-20.png';   
import iconImg2 from './../../assets/Marquis_Galleria_Assets-22.png';  
import iconImg3 from './../../assets/Marquis_Galleria_Assets-23.png';  
import iconImg4 from './../../assets/Marquis_Galleria_Assets-24.png';  
// import iconImg5 from './../../assets/Icon 100x100-05.svg';
class HomePaymentPlans extends PureComponent {
 
    render() { 
        return ( 
            <Fragment>   
                <section className="payment-sec" id="payment-sec">
                    <Container fluid className="wrap">
                        <Row className="common-heading-row">
                            <Col md={12} className="common-heading-col">
                                <div className="common-heading-div" data-aos='fade-up'>
                                <h2 className="payment-heading darkBlue">A LIFESTYLE TO FALL IN LOVE WITH</h2>
                                </div> 
                            </Col>
                        </Row> 
                    </Container>
                    <Container fluid className="payment-sec-container">
                        
                        <Row className="payment-sec-row">
                            <Col md={4}>
                                <div className="payment-side-head-div" data-aos='fade-up'>
                                     <div className="payment-side-head">
                                            <h5 className="whiteColor">
                                            A <span className="blackColor">LIFESTYLE</span> TO FALL IN <span className="blackColor">LOVE</span> WITH
                                            </h5>
                                            <p className="whiteColor">starting from aed 842,000
pricing & payment plan
post handover payment plan</p>
                                     </div>
                                </div>
                            </Col>
                            <Col md={2} className="payment-sec-col">
                                <div className="payment-div" data-aos='fade-up'>
                                    <div className="payment-div-img">
                                        <img src={iconImg1} className="img-fluid" alt="paymenticon" />
                                    </div>
                                    <div className="payment-div-content small-paraText">
                                        <p>20% Down Payment</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={2} className="payment-sec-col">
                                <div className="payment-div" data-aos='fade-up'>
                                    <div className="payment-div-img">
                                        <img src={iconImg2} className="img-fluid" alt="paymenticon" />
                                    </div>
                                    <div className="payment-div-content">
                                        <p>14% During Construction (1% per month)</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={2} className="payment-sec-col ">
                                <div className="payment-div" data-aos='fade-up'>
                                    <div className="payment-div-img">
                                        <img src={iconImg3} className="img-fluid" alt="paymenticon" />
                                    </div>
                                    <div className="payment-div-content small-paraText">
                                        <p>24% on Completion</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={2} className="payment-sec-col">
                                <div className="payment-div" data-aos='fade-up'>
                                    <div className="payment-div-img">
                                        <img src={iconImg4} className="img-fluid" alt="paymenticon" />
                                    </div>
                                    <div className="payment-div-content">
                                        <p> Balance 40% Post Completion in 24 months</p>
                                    </div>
                                </div>
                            </Col> 
                        </Row>
                    </Container>
                       
                </section>
          </Fragment> 
        )
      }
}


  export default HomePaymentPlans
