import React, { PureComponent, Fragment } from 'react';
import { Container, Col, Row, Button } from 'bootstrap-4-react';
import { Tabs, Tab } from 'react-bootstrap';
import Form from "react-bootstrap/Form";
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
// Swiper
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import floorPlanImage1 from './../../assets/Floorplan_Assets-01.jpg';
import floorPlanImage2 from './../../assets/Floorplan_Assets-02.jpg';
import floorPlanImage3 from './../../assets/Floorplan_Assets-03.jpg';
import floorPlanImage4 from './../../assets/Floorplan_Assets-04.jpg';
import floorPlanImage5 from './../../assets/Floorplan_Assets-05.jpg';
import floorPlanImage6 from './../../assets/Floorplan_Assets-06.jpg';
import floorPlanImage7 from './../../assets/Floorplan_Assets-07.jpg';
import floorPlanImage8 from './../../assets/Floorplan_Assets-08.jpg';
import floorPlanImage9 from './../../assets/Marquis_Galleria_Assets-14.png';
import pdffile from './../../assets/Marquis Signature Brochure - Final.pdf';
import * as apiUrl from './../../apiUrl';
import Reaptcha from 'reaptcha';
SwiperCore.use([Navigation, Autoplay, Pagination]);
class HomeFloorplan extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            formmodal: false,
            name: "",
            phone: "",
            errors: {},
            captcha: null,
            plan_type: "",
            plan_value: "",

        }
        this.formModalclose = this.formModalclose.bind(this);
        this.formModalopen = this.formModalopen.bind(this);

        this.validate = this.validate.bind(this);

        this.Setname = this.Setname.bind(this);
        this.Setphone = this.Setphone.bind(this);
        this.validateform123 = this.validateform123.bind(this);
        this.SubmitForm123 = this.SubmitForm123.bind(this);

        this.ThankYouModalclose = this.ThankYouModalclose.bind(this);
        this.ThankYouModalopen = this.ThankYouModalopen.bind(this);

        this.onChange = this.onChange.bind(this);
    }

    onChange(value) {



        window.localStorage.setItem('DonateCaptchaFloorPlan', value);




        let errors = this.state.errors;
        errors["CaptchaFloorPlan"] = "";

        this.setState({ errors: errors });


    }


    Setname = event => {

        this.setState({ name: event.target.value });

        let errors = this.state.errors;
        errors["name"] = "";

        this.setState({ errors: errors });


    }

    Setphone = event => {

        this.setState({ phone: event.target.value });

        let errors = this.state.errors;
        errors["phone"] = "";

        this.setState({ errors: errors });


    }

    validate = evt => {
        var theEvent = evt || window.event;

        // Handle paste
        if (theEvent.type === 'paste') {
            key = evt.clipboardData.getData('text/plain');
        } else {
            // Handle key press
            var key = theEvent.keyCode || theEvent.which;
            key = String.fromCharCode(key);
        }
        var regex = /[0-9]|\./;
        if (!regex.test(key)) {
            theEvent.returnValue = false;
            if (theEvent.preventDefault) theEvent.preventDefault();
        }
    }

    onlyAlphabets = evt => {
        try {
            if (window.event) {
                var charCode = window.event.keyCode;
            }
            else if (evt) {
                var charCode = evt.which;
            }
            else { return true; }
            if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || (charCode == 32))
                return true;
            else
                evt.preventDefault();;
        }
        catch (err) {
            alert(err.Description);
        }
    }

    validateform123() {



        let name = this.state.name;

        let phone = this.state.phone;

        let errors = {};
        let formIsValid = true;

        let token = window.localStorage.getItem('DonateCaptchaFloorPlan');




        if (token === null || token === 'null') {
            formIsValid = false;
            errors["CaptchaFloorPlan"] = "*Please Select The Captcha";
        }



        if (name == "") {
            formIsValid = false;
            errors["name"] = "Please Enter The Name";
        }



        if (phone == "") {
            formIsValid = false;
            errors["phone"] = "Please Enter The Mobile Number";
        }
        if (phone.length < 10 || phone.length > 10) {
            formIsValid = false;
            errors["phone"] = "Please Enter a Valid Mobile Number";
        }





        this.setState({ errors: errors });
        return formIsValid;
    }

    async SubmitForm123() {
        const self = this;
        if (this.validateform123()) {
            self.setState({ loading: true });

            let token = window.localStorage.getItem('DonateCaptchaFloorPlan')


            const result = await axios.post(apiUrl.apiUrl + "/submit_download_form", { name: self.state.name, phone: self.state.phone, captcha: token });



            if (result.data == '1 record inserted') {



                this.captcha.reset();

                if (this.state.plan_type != "") {
                    window.history.pushState("home-floor-plan", "Title", "/marquis-signature-cpc-dubai/?mail=home-floor-plan-" + this.state.plan_type.toLowerCase() + "-" + this.state.plan_value.toLowerCase());
                }
                else {
                    window.history.pushState("home-floor-plan", "Title", "/marquis-signature-cpc-dubai/?mail=home-floor-plan-" + this.state.plan_value.toLowerCase());
                }


                window.localStorage.removeItem("DonateCaptchaFloorPlan");

                self.downloadFile();
                self.ThankYouModalopen();
                self.setState({

                    name: '',

                    phone: '',


                });


            }

        }
    }


    ThankYouModalclose() {
        this.setState({ ThankYou: false });
    }
    ThankYouModalopen() {
        this.setState({ ThankYou: true });
    }


    formModalclose() {
        this.setState({ formmodal: false });
    }
    formModalopen(plan_type, plan_value, e) {

        this.setState({ plan_type: plan_type });
        this.setState({ plan_value: plan_value });

        this.setState({ formmodal: true });
    }

    downloadFile = () => {



        const link = document.createElement('a');
        link.href = pdffile;
        link.setAttribute(
            'download',
            `Marquis Signature Brochure - Final.pdf`,
        );

        // Append to html link element page
        document.body.appendChild(link);

        // Start download
        link.click();

        // Clean up and remove the link
        link.parentNode.removeChild(link);

    }



    render() {
        return (
            <Fragment>
                <section className="homefloorplan-sec lightBlueBG" id="homefloorplan-sec">
                    <Container fluid className="wrap">
                        <Row className="common-heading-row">
                            <Col md={12} className="common-heading-col">
                                <div className="common-heading-div" data-aos='fade-up'>
                                    <h2 className="large-heading">Floor Plans</h2>
                                    <h5 className="heading-text darkBlue" data-aos='fade-up'>Floor <span className="goldenColor">Plans</span></h5> 
                                </div>

                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <div className="golden-bg-head">
                                    <h5 className="">LAYOUT OPTIONS </h5>
                                    <h2 className=" ">CHOOSE YOUR APARTMENT  </h2>  
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} className="floor-plans-rows-div">
                                <Tabs defaultActiveKey="other">
                                    <Tab eventKey="onebedroom" title="ONE BEDROOM">
                                        <div className="tabs-card-div">

                                            <Swiper className="floorplans-swiper" navigation={true}
                                                grabCursor={true}
                                                autoplay={false}
                                                speed={1000} spaceBetween={100} slidesPerView={2} loop={true} draggable={true} breakpoints={{
                                                    320: {
                                                        slidesPerView: 1,
                                                    },
                                                    768: {
                                                        slidesPerView: 1,
                                                    },
                                                    992: {
                                                        slidesPerView: 2,
                                                    },
                                                    1024: {
                                                        slidesPerView: 2,
                                                    },

                                                }}>
                                                <SwiperSlide>
                                                    <div className="tabs-card-col">
                                                        <div className="tabs-card">
                                                            <img src={floorPlanImage9} className="img-fluid" alt="loaction-image1" />
                                                        </div>
                                                        <div className="tabs-card-content">
                                                            <h5>1BHK</h5>
                                                            <p>Our cosy 1BHK apartments are designed to enable a compact lifestyle, integrated with a plethora of tasteful elements.</p>
                                                            <Button className="goldernColorBtn" onClick={(e) => this.formModalopen("ONE-BEDROOM", "1BHK", e)}>Download</Button>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>

                                            </Swiper>
                                            {/* <Row className="tabs-card-row">
                                                <Col md={4}>
                                                    <div className="tabs-card-col" data-aos='fade-up'>
                                                        <div className="tabs-card">
                                                            <img src={floorPlanImage9} className="img-fluid" alt="loaction-image1" />
                                                        </div>
                                                        <div className="tabs-card-content">
                                                            <h5>1BHK</h5>
                                                            <p>Our cosy 1BHK apartments are designed to enable a compact lifestyle, integrated with a plethora of tasteful elements.</p>
                                                            <Button className="goldernColorBtn" onClick={(e) => this.formModalopen("ONE-BEDROOM", "1BHK", e)}>Download</Button>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row> */}
                                        </div>
                                    </Tab>


                                    <Tab eventKey="twobedroom" title="TWO BEDROOM">
                                        <div className="tabs-card-div">
                                            <Swiper className="floorplans-swiper" navigation={true}
                                                grabCursor={true}
                                                autoplay={false}
                                                speed={1000} spaceBetween={100} slidesPerView={2} loop={true} draggable={true} breakpoints={{
                                                    320: {
                                                        slidesPerView: 1,
                                                    },
                                                    768: {
                                                        slidesPerView: 1,
                                                    },
                                                    992: {
                                                        slidesPerView: 2,
                                                    },
                                                    1024: {
                                                        slidesPerView: 2,
                                                    },

                                                }}>
                                                <SwiperSlide>
                                                    <div className="tabs-card-col">
                                                        <div className="tabs-card">
                                                            <img src={floorPlanImage6} className="img-fluid" alt="loaction-image2" />
                                                        </div>
                                                        <div className="tabs-card-content">
                                                            <h5>Type 1</h5>
                                                            <p>This 1,363 sq.ft apartment is the very picture of luxury, with the living spaces opening out into balconies.</p>
                                                            <Button className="goldernColorBtn" onClick={(e) => this.formModalopen("TWO-BEDROOM", "Type-1", e)}>Download</Button>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="tabs-card-col">
                                                        <div className="tabs-card">
                                                            <img src={floorPlanImage7} className="img-fluid" alt="loaction-image3" />
                                                        </div>
                                                        <div className="tabs-card-content">
                                                            <h5>Type 2</h5>
                                                            <p>With two massive ensuite bedrooms, this lavish 1,196 sq.ft apartment is the perfect home for your small family.</p>
                                                            <Button className="goldernColorBtn" onClick={(e) => this.formModalopen("TWO-BEDROOM", "Type-2", e)}>Download</Button>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="tabs-card-col">
                                                        <div className="tabs-card">
                                                            <img src={floorPlanImage8} className="img-fluid" alt="loaction-image4" />
                                                        </div>
                                                        <div className="tabs-card-content">
                                                            <h5>Type 3</h5>
                                                            <p>This 1,291 sq.ft apartment will satisfy all your desires to indulge in a type of never-before-seen luxury living.</p>
                                                            <Button className="goldernColorBtn" onClick={(e) => this.formModalopen("TWO-BEDROOM", "Type-3", e)}>Download</Button>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
                                            {/* <Row className="tabs-card-row">
                                                <Col md={4}>
                                                    <div className="tabs-card-col">
                                                        <div className="tabs-card">
                                                            <img src={floorPlanImage6} className="img-fluid" alt="loaction-image2" />
                                                        </div>
                                                        <div className="tabs-card-content">
                                                            <h5>Type 1</h5>
                                                            <p>This 1,363 sq.ft apartment is the very picture of luxury, with the living spaces opening out into balconies.</p>
                                                            <Button className="goldernColorBtn" onClick={(e) => this.formModalopen("TWO-BEDROOM", "Type-1", e)}>Download</Button>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col md={4}>
                                                    <div className="tabs-card-col">
                                                        <div className="tabs-card">
                                                            <img src={floorPlanImage7} className="img-fluid" alt="loaction-image3" />
                                                        </div>
                                                        <div className="tabs-card-content">
                                                            <h5>Type 2</h5>
                                                            <p>With two massive ensuite bedrooms, this lavish 1,196 sq.ft apartment is the perfect home for your small family.</p>
                                                            <Button className="goldernColorBtn" onClick={(e) => this.formModalopen("TWO-BEDROOM", "Type-2", e)}>Download</Button>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col md={4}>
                                                    <div className="tabs-card-col">
                                                        <div className="tabs-card">
                                                            <img src={floorPlanImage8} className="img-fluid" alt="loaction-image4" />
                                                        </div>
                                                        <div className="tabs-card-content">
                                                            <h5>Type 3</h5>
                                                            <p>This 1,291 sq.ft apartment will satisfy all your desires to indulge in a type of never-before-seen luxury living.</p>
                                                            <Button className="goldernColorBtn" onClick={(e) => this.formModalopen("TWO-BEDROOM", "Type-3", e)}>Download</Button>
                                                        </div>
                                                    </div>
                                                </Col>

                                            </Row> */}
                                        </div>
                                    </Tab>
                                    <Tab eventKey="threebedroom" title="THREE BEDROOM">
                                        <div className="tabs-card-div">
                                            <Swiper className="floorplans-swiper" navigation={true}
                                                grabCursor={true}
                                                autoplay={false}
                                                speed={1000} spaceBetween={100} slidesPerView={2} loop={true} draggable={true} breakpoints={{
                                                    320: {
                                                        slidesPerView: 1,
                                                    },
                                                    768: {
                                                        slidesPerView: 1,
                                                    },
                                                    992: {
                                                        slidesPerView: 2,
                                                    },
                                                    1024: {
                                                        slidesPerView: 2,
                                                    },

                                                }}>
                                                <SwiperSlide>
                                                    <div className="tabs-card-col">
                                                        <div className="tabs-card">
                                                            <img src={floorPlanImage5} className="img-fluid" alt="loaction-image5" />
                                                        </div>
                                                        <div className="tabs-card-content">
                                                            <h5>3BHK</h5>
                                                            <p>This 1,996 sq.ft luxury apartment complete with a private deck and plunge pool is your own slice of heaven.</p>
                                                            <Button className="goldernColorBtn" onClick={(e) => this.formModalopen("THREE-BEDROOM", "3BHK", e)}>Download</Button>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>

                                            </Swiper>
                                            {/* <Row className="tabs-card-row"> 
                                                <Col md={4}>
                                                    <div className="tabs-card-col">
                                                        <div className="tabs-card">
                                                            <img src={floorPlanImage5} className="img-fluid" alt="loaction-image5" />
                                                        </div>
                                                        <div className="tabs-card-content">
                                                            <h5>3BHK</h5>
                                                            <p>This 1,996 sq.ft luxury apartment complete with a private deck and plunge pool is your own slice of heaven.</p>
                                                            <Button className="goldernColorBtn" onClick={(e) => this.formModalopen("THREE-BEDROOM", "3BHK", e)}>Download</Button>
                                                        </div>
                                                    </div>
                                                </Col> 
                                            </Row> */}
                                        </div>
                                    </Tab>
                                    <Tab eventKey="other" title="FLOOR PLAN">
                                        <div className="tabs-card-div">
                                            <Swiper className="floorplans-swiper" navigation={true}
                                                grabCursor={true}
                                                autoplay={false}
                                                speed={1000} spaceBetween={100} slidesPerView={2} loop={true} draggable={true} breakpoints={{
                                                    320: {
                                                        slidesPerView: 1,
                                                    },
                                                    768: {
                                                        slidesPerView: 1,
                                                    },
                                                    992: {
                                                        slidesPerView: 2,
                                                    },
                                                    1024: {
                                                        slidesPerView: 2,
                                                    },

                                                }}>
                                                <SwiperSlide>
                                                    <div className="tabs-card-col">
                                                        <div className="tabs-card">
                                                            <img src={floorPlanImage4} className="img-fluid" alt="loaction-image6" />
                                                        </div>
                                                        <div className="tabs-card-content">
                                                            <h5>First Floor Plan</h5>
                                                            <p>The first floor includes 11 apartments - six 1BHK, four 2BHK and one 3BHK.</p>
                                                            <Button className="goldernColorBtn" onClick={(e) => this.formModalopen("", "First-Floor-Plan", e)}>Download</Button>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="tabs-card-col">
                                                        <div className="tabs-card">
                                                            <img src={floorPlanImage3} className="img-fluid" alt="loaction-image7" />
                                                        </div>
                                                        <div className="tabs-card-content">
                                                            <h5>Second Floor Plan</h5>
                                                            <p>The second floor includes 17 apartments - twelve 1BHK, three 2BHK and two 3BHK.</p>
                                                            <Button className="goldernColorBtn" onClick={(e) => this.formModalopen("", "Second-Floor-Plan", e)}>Download</Button>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="tabs-card-col">
                                                        <div className="tabs-card">
                                                            <img src={floorPlanImage2} className="img-fluid" alt="loaction-image8" />
                                                        </div>
                                                        <div className="tabs-card-content">
                                                            <h5>Third & Fourth Floor Plan</h5>
                                                            <p>The third & fourth floors include 16 apartments - twelve 1BHK, three 2BHK and one 3BHK.</p>
                                                            <Button className="goldernColorBtn" onClick={(e) => this.formModalopen("", "Third-&-Fourth-Floor-Plan", e)}>Download</Button>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="tabs-card-col">
                                                        <div className="tabs-card">
                                                            <img src={floorPlanImage1} className="img-fluid" alt="loaction-image9" />
                                                        </div>
                                                        <div className="tabs-card-content">
                                                            <h5>Fifth & Sixth Floor Plan</h5>
                                                            <p>The fifth & sixth floors includes 13 apartments - seven 1BHK, five 2BHK and one 3BHK.</p>
                                                            <Button className="goldernColorBtn" onClick={(e) => this.formModalopen("", "Fifth-&-Sixth-Floor-Plan", e)}>Download</Button>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>

                                            </Swiper>
                                            {/* <Row className="tabs-card-row">
                                                <Col md={4}>
                                                    <div className="tabs-card-col">
                                                        <div className="tabs-card">
                                                            <img src={floorPlanImage4} className="img-fluid" alt="loaction-image6" />
                                                        </div>
                                                        <div className="tabs-card-content">
                                                            <h5>First Floor Plan</h5>
                                                            <p>The first floor includes 11 apartments - six 1BHK, four 2BHK and one 3BHK.</p>
                                                            <Button className="goldernColorBtn" onClick={(e) => this.formModalopen("", "First-Floor-Plan", e)}>Download</Button>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col md={4}>
                                                    <div className="tabs-card-col">
                                                        <div className="tabs-card">
                                                            <img src={floorPlanImage3} className="img-fluid" alt="loaction-image7" />
                                                        </div>
                                                        <div className="tabs-card-content">
                                                            <h5>Second Floor Plan</h5>
                                                            <p>The second floor includes 17 apartments - twelve 1BHK, three 2BHK and two 3BHK.</p>
                                                            <Button className="goldernColorBtn" onClick={(e) => this.formModalopen("", "Second-Floor-Plan", e)}>Download</Button>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col md={4}>
                                                    <div className="tabs-card-col">
                                                        <div className="tabs-card">
                                                            <img src={floorPlanImage2} className="img-fluid" alt="loaction-image8" />
                                                        </div>
                                                        <div className="tabs-card-content">
                                                            <h5>Third & Fourth Floor Plan</h5>
                                                            <p>The third & fourth floors include 16 apartments - twelve 1BHK, three 2BHK and one 3BHK.</p>
                                                            <Button className="goldernColorBtn" onClick={(e) => this.formModalopen("", "Third-&-Fourth-Floor-Plan", e)}>Download</Button>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col md={4}>
                                                    <div className="tabs-card-col">
                                                        <div className="tabs-card">
                                                            <img src={floorPlanImage1} className="img-fluid" alt="loaction-image9" />
                                                        </div>
                                                        <div className="tabs-card-content">
                                                            <h5>Fifth & Sixth Floor Plan</h5>
                                                            <p>The fifth & sixth floors includes 13 apartments - seven 1BHK, five 2BHK and one 3BHK.</p>
                                                            <Button className="goldernColorBtn" onClick={(e) => this.formModalopen("", "Fifth-&-Sixth-Floor-Plan", e)}>Download</Button>
                                                        </div>
                                                    </div>
                                                </Col>

                                            </Row> */}
                                        </div>


                                    </Tab>
                                </Tabs>
                            </Col>
                        </Row>
                    </Container>



                    <div>
                        <Modal show={this.state.formmodal} onHide={() => this.formModalclose()} size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered className="download-modal">
                            <Modal.Header className="download-modal-header" closeButton> </Modal.Header>

                            <Modal.Body className="download-modal-body">

                                <div className="container download-modal-container">
                                    <div className="row download-modal-row">
                                        <div className="col-md-10">
                                            <div className="download-modal-content">
                                                <div className="download-modal-heading">
                                                    <h5>DOWNLOAD THE FULL BROCHURE OF THE MARQUIS SIGNATURE RESIDENTIAL COMPLEX</h5>
                                                    <p>The download will start after Filling out the form</p>
                                                </div>
                                                <div className="download-modal-form">
                                                    <Form>
                                                        <Form.Group className="mb-3">
                                                            <Form.Control type="text" placeholder="Your Name *" value={this.state.name} onChange={this.Setname} onKeyPress={this.onlyAlphabets} />

                                                            <span className="form-error">
                                                                {" "}
                                                                {this.state.errors["name"]}{" "}
                                                            </span>
                                                        </Form.Group>

                                                        <Form.Group className="mb-3">
                                                            <Form.Control type="text" placeholder="Your Phone Number *" value={this.state.phone} onChange={this.Setphone} onKeyPress={this.validate} />

                                                            <span className="form-error">
                                                                {" "}
                                                                {this.state.errors["phone"]}{" "}
                                                            </span>
                                                        </Form.Group>
                                                        <Form.Group className="mb-3">
                                                            <Reaptcha sitekey="6LdUt3QgAAAAABa0w8ctOTdSBSqQWop2WIoVHJkm" onVerify={this.onChange} ref={e => (this.captcha = e)} />
                                                            <span className="form-error">{this.state.errors["CaptchaFloorPlan"]}</span>
                                                        </Form.Group>
                                                        <div className="button-div">

                                                            <Button type="button" className="goldernColorBtn" onClick={this.SubmitForm123}>   *Download Booklet </Button>
                                                        </div>
                                                    </Form>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>


                            </Modal.Body>

                        </Modal>
                    </div>
                </section>

                {/* <div>
                    <Modal show={this.state.ThankYou} onHide={() => this.ThankYouModalclose()} size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered className="page-load-modal">
                        <Modal.Header className="page-load-modal-header" closeButton> </Modal.Header>

                        <Modal.Body className="page-load-modal">

                            <div className="container first-modal-container">
                                <div className="row first-modal-row">
                                    <div className="col-md-10">
                                        <div className="first-modal-content">
                                            <div className="first-modal-heading">
                                                <h5 id="ThankYouMessage">Form Submitted Successfully</h5>
                                            </div>
                                            <div className="first-modal-form">

 
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div> 
                        </Modal.Body>

                    </Modal>
                </div> */}
            </Fragment>
        )
    }
}


export default HomeFloorplan