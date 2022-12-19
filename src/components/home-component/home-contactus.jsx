import React, { PureComponent, Fragment } from 'react';
import { Container, Col, Row, Button } from 'bootstrap-4-react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import * as apiUrl from './../../apiUrl';
//import ReCAPTCHA from "react-google-recaptcha";
import Reaptcha from 'reaptcha';
import { FaFacebookF, FaPhoneAlt, FaLinkedinIn, FaInstagram, FaEnvelope } from "react-icons/fa";


class HomeContactus extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            phone: "",
            email: "",
            message: "",
            errors: {},
            ThankYou: "",
            loading: false,
            checkbox: false,
            captcha: null,
        }


        this.validate = this.validate.bind(this);
        this.onlyAlphabets = this.onlyAlphabets.bind(this);

        this.Setname = this.Setname.bind(this);
        this.Setphone = this.Setphone.bind(this);
        this.Setemail = this.Setemail.bind(this);
        this.Setmessage = this.Setmessage.bind(this);

        this.validateform123 = this.validateform123.bind(this);
        this.SubmitForm123 = this.SubmitForm123.bind(this);

        this.ThankYouModalclose = this.ThankYouModalclose.bind(this);
        this.ThankYouModalopen = this.ThankYouModalopen.bind(this);

        this.onChange = this.onChange.bind(this);

    }

    onChange(value) {



        window.localStorage.setItem('DonateCaptchaContact', value);




        let errors = this.state.errors;
        errors["CaptchaContact"] = "";

        this.setState({ errors: errors });


    }


    ThankYouModalclose() {
        this.setState({ ThankYou: false });
    }
    ThankYouModalopen() {
        this.setState({ ThankYou: true });
    }

    Setcheckbox = event => {

        if (document.getElementById('terms_checkbox').checked) {
            this.setState({ checkbox: true });

            let errors = this.state.errors;
            errors["checkbox"] = "";

            this.setState({ errors: errors });
        } else {
            this.setState({ checkbox: false });

            let errors = this.state.errors;
            errors["checkbox"] = "";

            this.setState({ errors: errors });
        }




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



    Setemail = event => {

        this.setState({ email: event.target.value });

        let errors = this.state.errors;
        errors["email"] = "";

        this.setState({ errors: errors });


    }



    Setmessage = event => {

        this.setState({ message: event.target.value });

        let errors = this.state.errors;
        errors["message"] = "";

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
        let email = this.state.email;
        let phone = this.state.phone;
        let message = this.state.message;
        let checkbox = this.state.checkbox;
        let errors = {};
        let formIsValid = true;


        let token = window.localStorage.getItem('DonateCaptchaContact');




        if (token === null || token === 'null') {
            formIsValid = false;
            errors["CaptchaContact"] = "*Please Select The Captcha";
        }

        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (!this.state.email || regex.test(this.state.email) === false) {

            errors['email'] = "Email is not valid";
            this.setState({
                errors: errors
            });
            formIsValid = false;
        }

        if (name == "") {
            formIsValid = false;
            errors["name"] = "Please Enter The Name";
        }

        if (email == "") {
            formIsValid = false;
            errors["email"] = "Please Enter The Email Address";
        }

        if (phone == "") {
            formIsValid = false;
            errors["phone"] = "Please Enter The Mobile Number";
        }
        if (phone.length < 10 || phone.length > 10) {
            formIsValid = false;
            errors["phone"] = "Please Enter a Valid Mobile Number";
        }



        if (message == "") {
            formIsValid = false;
            errors["message"] = "Please Enter The Message";
        }




        if (checkbox == "") {
            formIsValid = false;
            errors["checkbox"] = "Please Agree To Terms & Conditions";
        }

        this.setState({ errors: errors });
        return formIsValid;
    }

    async SubmitForm123() {
        const self = this;


        if (this.validateform123()) {
            self.setState({ loading: true });


            let token = window.localStorage.getItem('DonateCaptchaContact');

            const result = await axios.post(apiUrl.apiUrl + "/submit_footer_form", { name: self.state.name, email: self.state.email, phone: self.state.phone, message: self.state.message, captcha: token });



            if (result.data == '1 record inserted') {





                window.history.pushState("contact-form-submitted", "Title", "/marquis-signature-cpc-dubai/?mail=contact-form-submitted");
                self.ThankYouModalopen();
                self.setState({

                    name: '',
                    email: '',
                    phone: '',
                    message: '',
                    checkbox: false
                });

                this.captcha.reset();

                window.localStorage.removeItem("DonateCaptchaContact");


            }

        }
    }





    render() {
        return (
            <Fragment>
                <section className="homecontactus-sec" id="homecontactus-sec">
                    <Container fluid className="homecontactus-container">
                        <Row>
                            <Col md={12} className="padding-zero">
                                <div className="contactus-div">
                                    <Row className="contactus-row">
                                        <Col md={8}>
                                            <div className='google-maps' data-aos='fade-right'>
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.151612649106!2d55.2309725154474!3d25.062849943287368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6f14fc5828d1%3A0x6f1987f4d8a58415!2sMarquis%20Signature!5e0!3m2!1sen!2sin!4v1656489655731!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                            </div>
                                        </Col>
                                        <Col md={4}>
                                            <div className="sales-heading-div">
                                                <div className="sales-heading">
                                                    <h4 className="sales-head" data-aos='fade-left'>SALES OFFICE</h4>
                                                    <h6 data-aos='fade-left'>OFFICE: #101/102, THE V BUILDING,
                                                        ARJAN, DUBAI - UAE</h6>

                                                    <p data-aos='fade-left'>  <a
                                                        href="https://www.facebook.com/marquispoint"
                                                        alt="Facebook"
                                                        target="_blank"
                                                        className="icon-facebook"
                                                    >
                                                        <FaEnvelope />
                                                    </a> CONTACT@MARQUISPOINT.COM
                                                    </p>

                                                    <p data-aos='fade-left'>  <a
                                                        href="https://www.facebook.com/marquispoint"
                                                        alt="Facebook"
                                                        target="_blank"
                                                        className="icon-facebook"
                                                    >
                                                        <FaPhoneAlt />
                                                    </a> +971 4 240 1014
                                                    </p>
                                                </div>
                                                <div className="social-links-div" data-aos='fade-left'>
                                                    <a
                                                        href="https://www.facebook.com/marquispoint"
                                                        alt="Facebook"
                                                        target="_blank"
                                                        className="icon-facebook"
                                                    >
                                                        <FaFacebookF />
                                                    </a>
                                                    <a
                                                        href="https://www.linkedin.com/company/marquis-dubai"
                                                        alt="linkedIn"
                                                        target="_blank"
                                                        className="icon-linkedIn"
                                                    >
                                                        <FaLinkedinIn />
                                                    </a>
                                                    <a
                                                        href="https://www.instagram.com/marquis.point/?igshid=YmMyMTA2M2Y="
                                                        alt="Instagram"
                                                        target="_blank"
                                                        className="icon-instagram"
                                                    >
                                                        <FaInstagram />
                                                    </a>


                                                </div>
                                            </div>

                                        </Col>


                                        {/* <Col md={6}>
                                            <div className="contact-left-col">
                                                <div className="contact-heading">
                                                    <h4 className="contact-head" data-aos='fade-right'>SCHEDULE AN EXCLUSIVE VIEWING <span>CONTACT US</span></h4>
                                                </div>
                                                <div className="contact-form-div" data-aos='fade-right'>
                                                    <Form>
                                                        <Form.Group className="form-div">
                                                            <Form.Control type="text" placeholder="Your Name" value={this.state.name} onChange={this.Setname} onKeyPress={this.onlyAlphabets} />


                                                            <span className="form-error">
                                                                {" "}
                                                                {this.state.errors["name"]}{" "}
                                                            </span>
                                                        </Form.Group>
                                                        <Form.Group className="form-div">
                                                            <Form.Control type="text" placeholder="Phone" value={this.state.phone} onChange={this.Setphone} onKeyPress={this.validate} />


                                                            <span className="form-error">
                                                                {" "}
                                                                {this.state.errors["phone"]}{" "}
                                                            </span>
                                                        </Form.Group>

                                                        <Form.Group className="form-div">
                                                            <Form.Control type="text" placeholder="Email" value={this.state.email} onChange={this.Setemail} />


                                                            <span className="form-error">
                                                                {" "}
                                                                {this.state.errors["email"]}{" "}
                                                            </span>
                                                        </Form.Group>
                                                        <Form.Group className="form-div">
                                                            <Form.Control as="textarea" rows={3} placeholder="Message" value={this.state.message} onChange={this.Setmessage} />


                                                            <span className="form-error">
                                                                {" "}
                                                                {this.state.errors["message"]}{" "}
                                                            </span>
                                                        </Form.Group>
                                                        <Form.Group>
                                                            <Form.Check type="checkbox" label="I agree with the terms of communication" id="terms_checkbox" value="1" checked={this.state.checkbox} onChange={this.Setcheckbox} />

                                                            <span className="form-error">
                                                                {" "}
                                                                {this.state.errors["checkbox"]}{" "}
                                                            </span>
                                                        </Form.Group>
                                                        <Form.Group>
                                                          

                                                            <Reaptcha sitekey="6LdUt3QgAAAAABa0w8ctOTdSBSqQWop2WIoVHJkm" onVerify={this.onChange} ref={e => (this.captcha = e)} />
                                                            <span className="form-error">{this.state.errors["CaptchaContact"]}</span>
                                                        </Form.Group>
                                                        <div className="contact-send-btn-div">
                                                            <Button className="goldernColorBtn" type="button" onClick={this.SubmitForm123}>
                                                                Send
                                                            </Button>
                                                        </div>

                                                    </Form>
                                                </div>

                                            </div>
                                        </Col>
                                        <Col md={6} className="contact-right-bg" data-aos='fade-left'>
                                            <div className="contact-sales-heading">
                                                <h4 className="contact-sales-head">SALES OFFICE</h4>
                                            </div>
                                            <div className="contact-right-address">
                                                <div className="contact-address-div">
                                                    <h6>+971 545576763</h6>
                                                    <p>Office No.305, The Icon tower, Dubai Sillicon Oasis, Dubai, UAE.</p>
                                                </div>
                                            </div>
                                        
                                        </Col> */}
                                    </Row>

                                </div>

                            </Col>
                        </Row>
                    </Container>

                </section>
                <div>
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
                </div>
            </Fragment>
        )
    }
}


export default HomeContactus