import React, { PureComponent, Fragment } from 'react';
import { Container, Col, Row, Button } from 'bootstrap-4-react';
// import leftImage from './../../assets/banner-bottom-img.svg';
// import Btnimage from './../../assets/Marquis_Signature-btnimg.jpg';
import Form from "react-bootstrap/Form";
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import pdffile from './../../assets/Marquis Signature Brochure - Final.pdf';
import * as apiUrl from './../../apiUrl';
//import ReCAPTCHA from "react-google-recaptcha";
import Reaptcha from 'reaptcha';

class HomeBanner extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            formmodal: false,
            name: "",
            phone: "",
            email:"",
            message:"",           
            errors: {},
            captcha: null,
            checkbox: false,          
        }
        this.formModalclose = this.formModalclose.bind(this);
        this.formModalopen = this.formModalopen.bind(this);

        this.validate = this.validate.bind(this);

        this.Setname = this.Setname.bind(this);
        this.Setphone = this.Setphone.bind(this);
        this.Setemail = this.Setemail.bind(this);
        this.Setmessage = this.Setmessage.bind(this);


        this.validateform123 = this.validateform123.bind(this);
        this.BannerForm = this.BannerForm.bind(this);

        this.ThankYouModalclose = this.ThankYouModalclose.bind(this);
        this.ThankYouModalopen = this.ThankYouModalopen.bind(this);
        this.onChangeBanner = this.onChangeBanner.bind(this);
    }

    onChangeBanner(value) {


        window.localStorage.setItem('DonateCaptchaContactBanner', value);
        let errors = this.state.errors;
        errors["Captcha123"] = "";

        this.setState({ errors: errors });

    }


    Setname = event => {

        this.setState({ name: event.target.value });

        let errors = this.state.errors;
        errors["name"] = "";

        this.setState({ errors: errors });


    }

    Setemail = event => {

        this.setState({ email: event.target.value });

        let errors = this.state.errors;
        errors["email"] = "";

        this.setState({ errors: errors });


    }

    Setphone = event => {

        this.setState({ phone: event.target.value });

        let errors = this.state.errors;
        errors["phone"] = "";

        this.setState({ errors: errors });


    }

    Setmessage = event => {

        this.setState({ message: event.target.value });

        let errors = this.state.errors;
        errors["message"] = "";

        this.setState({ errors: errors });


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

        let email = this.state.email;

        let message = this.state.message;

        let checkbox = this.state.checkbox;


        let errors = {};
        let formIsValid = true;

        let token = window.localStorage.getItem('DonateCaptchaContactBanner');

        if (token === null || token === 'null') {
            formIsValid = false;
            errors["Captcha123"] = "*Please Select The Captcha";
        }



        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (!this.state.email || regex.test(this.state.email) === false) {

            errors['email'] = "Email is not valid";
            this.setState({
                errors: errors
            });
            formIsValid = false;
        }
        if(email == ""){
            formIsValid = false;
            errors["email"] = "Please Enter The Email Address";
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

    async BannerForm() {
        const self = this;
        if (this.validateform123()) {
            self.setState({ loading: true });

            let token = window.localStorage.getItem('DonateCaptchaContactBanner');

            
            // console.log(token);

            const obj ={
                name:this.state.name,
                email:this.state.email,
                phone:this.state.phone,
                message:this.state.message,
                token:token  

              };
             
              axios.post('http://localhost/galleriaapi/phpmailer.php',obj)
              .then(res=> console.log(res.data))
              .catch(error => {
                console.log(error.response);
            });


            

            // const result = await axios.post(apiUrl.apiUrl + "/submit_download_form", { name: self.state.name, phone: self.state.phone, captcha: token });



            // if (result.data == '1 record inserted') {



            //     this.captcha.reset();

            //     window.localStorage.removeItem("DonateCaptcha456");
            //     window.history.pushState("brochure-downloaded-home-banner", "Title", "/marquis-signature-cpc-dubai/?mail=brochure-downloaded-home-banner");
            //     self.downloadFile();
            //     self.ThankYouModalopen();
                self.setState({

                    name: '',
                    phone: '',
                    email: '',
                    message: '',
                    checkbox: false

                });

                this.captcha.reset();

                window.localStorage.removeItem("DonateCaptchaContactBanner");


            // }

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
    formModalopen() {
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
                <section className="banner-sec" id="banner-sec">
                    <div className="overlay"></div>
                    <div className="form-div">
                        <Container fluid className="form-div-container">
                            <Row className="form-div-row">
                                <Col md={6}>
                                    <div className="form-div-content">
                                        {/* <h4 className="mondiaBold">A neoteric 7-storey <span className="goldenColor">apartment</span> that raises the benchmark of <span className="goldenColor">luxury living.</span></h4> */}
                                        <h4 className="mondiaBold">Glimpse into the future of luxury living with this 9-storey modern marvel.</h4>
                                        <h6>1, 2 & 3 BHK Apartment starting from AED 842,000</h6>
                                        <p>Post Handover Payment Plan</p>
                                    </div>
                                </Col>
                                <Col md={5}>

                                    <div className="banner-form-div">
                                        {/* <div className="banner-form-heading">
                                            <h4 className="banner-form-head">SCHEDULE AN EXCLUSIVE VIEWING <span>CONTACT US</span></h4>
                                        </div> */}
                                        <div className="contact-form-div">
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
                                                    {/*   <ReCAPTCHA
                                                    sitekey="6LdUt3QgAAAAABa0w8ctOTdSBSqQWop2WIoVHJkm"
                                                    onChange={this.onChange}


                                                /> */}

                                                    <Reaptcha sitekey="6LeTGIUjAAAAAOvE0c8UArczATZOmeKGZrVFAg_C" onVerify={this.onChangeBanner} ref={e => (this.captcha = e)} />
                                                    <span className="form-error">{this.state.errors["Captcha123"]}</span>
                                                </Form.Group>
                                                <div className="contact-send-btn-div">
                                                    <Button className="goldernColorBtn" type="button" onClick={this.BannerForm}>
                                                        Send
                                                    </Button>
                                                </div>

                                            </Form>
                                        </div>

                                    </div>
                                </Col>

                            </Row>
                        </Container>
                    </div>

                    <div className="bottom-div">
                        <Container fluid className="wrap bottom-container padding-zero">
                            <Row>
                                <Col md={5} className="left-col padding-zero">
                                    {/* <div className="left-image" data-aos='fade-up'>
                                        <img src={leftImage} className="left-img-src img-fluid" alt="text-img" />
                                    </div> */}

                                </Col>
                                <Col md={7} className="right-col padding-zero">
                                    {/* <div className="banner-bottom-btn" onClick={this.formModalopen}>
                                        <div className="broucher-btn" data-aos='fade-up'>
                                            <img src={Btnimage} className="right-img-src img-fluid" alt="text-img" />
                                            <p>Download <span className="goldenColor">Brochure</span></p>
                                        </div>

                                    </div> */}

                                </Col>
                            </Row>
                        </Container>
                    </div>

                </section>
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
                                                        {/*  <ReCAPTCHA
                                                            sitekey="6LdUt3QgAAAAABa0w8ctOTdSBSqQWop2WIoVHJkm"
                                                            onChange={this.onChange}


                                                        /> */}

                                                        <Reaptcha sitekey="6LdUt3QgAAAAABa0w8ctOTdSBSqQWop2WIoVHJkm" onVerify={this.onChange} ref={e => (this.captcha = e)} />
                                                        <span className="form-error">{this.state.errors["Captcha456"]}</span>
                                                    </Form.Group>

                                                    <div className="button-div">

                                                        <Button type="button" className="goldernColorBtn" onClick={this.SubmitForm12}>   *Download Booklet </Button>
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


export default HomeBanner

