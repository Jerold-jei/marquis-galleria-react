import React, { PureComponent, Fragment } from 'react';
import { Container, Col, Row, Button } from 'bootstrap-4-react';
import { Link } from 'react-scroll';
import Logo from './../../assets/Marquis_Galleria_Logo-01.svg';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import pdffile from './../../assets/Marquis Signature Brochure - Final.pdf';
import * as apiUrl from './../../apiUrl';
import { PhoneNumberFormat, PhoneNumberUtil } from 'google-libphonenumber';
import { InputGroup } from 'bootstrap-4-react/lib/components';
//import ReCAPTCHA from "react-google-recaptcha";
import Reaptcha from 'reaptcha';

class Footer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            formmodal: false,
            becomeanagentmodal: false,
            // name: "",
            // phone: "",
            // errors: {},
            // section_title: "",
            // section_description: "",
            errors: {},
            data: {
            },

            firstname: "",
            lastname: "",
            email: "",
            mobile: "",
            // message: "",
            designation: "",
            nationality: "",
            countries: [],
            cities: [],
            selected_country: "",
            selected_city: "",
            selected_nationality: "",
            country_code: "",
            color: "",
            address: "",
            captcha: null,
            // captcha1: null,
        }
        this.formModalclose = this.formModalclose.bind(this);
        this.formModalopen = this.formModalopen.bind(this);

        this.validate = this.validate.bind(this);

        this.Setfirstname = this.Setfirstname.bind(this);
        this.Setlastname = this.Setlastname.bind(this);
        this.Setselected_nationality = this.Setselected_nationality.bind(this);
        this.Setdestination = this.Setdestination.bind(this);
        this.Setselected_country = this.Setselected_country.bind(this);
        this.Setselected_city = this.Setselected_city.bind(this);
        this.Setemail = this.Setemail.bind(this);
        this.Setmobile = this.Setmobile.bind(this);
        this.Setaddress = this.Setaddress.bind(this);

        this.handleValidation = this.handleValidation.bind(this); 
        this.upload = this.upload.bind(this);

        // this.validateform123 = this.validateform123.bind(this);
        // this.SubmitForm123 = this.SubmitForm123.bind(this);

        this.ThankYouModalclose = this.ThankYouModalclose.bind(this);
        this.ThankYouModalopen = this.ThankYouModalopen.bind(this);

        this.agentModalclose = this.agentModalclose.bind(this);
        this.agentModalopen = this.agentModalopen.bind(this);


        this.onChangeMobile = this.onChangeMobile.bind(this);

        this.onChangeFooter = this.onChangeFooter.bind(this);
        // this.onChange123 = this.onChange123.bind(this);



    }


    onChangeFooter(value) {

        window.localStorage.setItem('DonateCaptcha', value);
        let errors = this.state.errors;
        errors["Captcha"] = "";

        this.setState({ errors: errors });

    }


    // onChange123(value) {



    //     window.localStorage.setItem('DonateCaptcha123', value);




    //     let errors = this.state.errors;
    //     errors["Captcha123"] = "";

    //     this.setState({ errors: errors });


    // }


    componentDidMount() {



        axios.post(apiUrl.apiUrl + '/fetch_countries')
            .then(res =>

                this.setState({
                    countries: res.data,


                })

            );
        console.log(this.state);





    }

    handleChangeCountry = selected_country => event => {


        let dataxx = event.target.value;
        const result = this.state.countries.filter(x => x.id > 0 && x.id == dataxx).map(x => x.phonecode);




        this.setState({
            [selected_country]: event.target.value
        });

        let errors = this.state.errors;
        errors["country"] = "";

        axios.post(apiUrl.apiUrl + '/fetch_cities/' + event.target.value)
            .then(res =>

                this.setState({
                    cities: res.data,
                    country_code: result

                })

            );

        this.setState({ errors: errors });
    };


    onChangeMobile(event) {
        this.setState({
            mobile: event.target.value
        });
        this.validatePhoneNumber('+' + this.state.country_code + ' ' + event.target.value);

        let errors = this.state.errors;
        this.state.message = "";

        this.setState({ errors: errors });
    }


    agentModalclose() {
        this.setState({ becomeanagentmodal: false });
    }
    agentModalopen() {
        this.setState({ becomeanagentmodal: true });




    }

    Setfirstname = event => {

        this.setState({ firstname: event.target.value });

        let errors = this.state.errors;
        errors["firstname"] = "";

        this.setState({ errors: errors });


    }

    Setlastname = event => {

        this.setState({ lastname: event.target.value });

        let errors = this.state.errors;
        errors["lastname"] = "";

        this.setState({ errors: errors });


    }

    Setselected_nationality = event => {

        this.setState({ selected_nationality: event.target.value });

        let errors = this.state.errors;
        errors["nationality"] = "";

        this.setState({ errors: errors });


    }

    Setdestination = event => {

        this.setState({ destination: event.target.value });

        let errors = this.state.errors;
        errors["destination"] = "";

        this.setState({ errors: errors });


    }

    Setselected_country = event => {

        this.setState({ selected_country: event.target.value });

        let errors = this.state.errors;
        errors["country"] = "";

        this.setState({ errors: errors });


    }

    Setselected_city = event => {

        this.setState({ selected_city: event.target.value });

        let errors = this.state.errors;
        errors["cities"] = "";

        this.setState({ errors: errors });


    }

    Setemail = event => {

        this.setState({ email: event.target.value });

        let errors = this.state.errors;
        errors["email"] = "";

        this.setState({ errors: errors });


    }
    Setmobile = event => {

        this.setState({ mobile: event.target.value });

        let errors = this.state.errors;
        errors["message"] = "";

        this.setState({ errors: errors });


    }
    Setaddress = event => {

        this.setState({ address: event.target.value });

        let errors = this.state.errors;
        errors["address"] = "";

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

    // validateform123() {



    //     let name = this.state.name;

    //     let phone = this.state.phone;

    //     let errors = {};
    //     let formIsValid = true;



    //     let token = window.localStorage.getItem('DonateCaptcha123');




    //     if (token === null || token === 'null') {
    //         formIsValid = false;
    //         errors["Captcha123"] = "*Please Select The Captcha";
    //     }



    //     if (name == "") {
    //         formIsValid = false;
    //         errors["name"] = "Please Enter The Name";
    //     }



    //     if (phone == "") {
    //         formIsValid = false;
    //         errors["phone"] = "Please Enter The Mobile Number";
    //     }
    //     if (phone.length < 10 || phone.length > 10) {
    //         formIsValid = false;
    //         errors["phone"] = "Please Enter a Valid Mobile Number";
    //     }





    //     this.setState({ errors: errors });
    //     return formIsValid;
    // }

    // async SubmitForm123() {
    //     const self = this;


    //     if (this.validateform123()) {
    //         self.setState({ loading: true });


    //         let token = window.localStorage.getItem('DonateCaptcha123');

    //         const result = await axios.post(apiUrl.apiUrl + "/submit_download_form", { name: self.state.name, phone: self.state.phone, captcha: token });



    //         if (result.data == '1 record inserted') {


    //             this.captcha1.reset();

    //             window.localStorage.removeItem("DonateCaptcha123");
    //             window.history.pushState("brochure-downloaded-home-footer", "Title", "/marquis-signature-cpc-dubai/?mail=brochure-downloaded-home-footer"); 

    //             self.downloadFile();
    //             self.ThankYouModalopen();
    //             self.setState({

    //                 name: '',

    //                 phone: '',


    //             });


    //         }

    //     }
    // }


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

    getValidNumber(phoneNumber) {
        const phoneUtil = PhoneNumberUtil.getInstance();
        const parsedNumber = phoneUtil.parse(phoneNumber);
        return phoneUtil.format(parsedNumber, PhoneNumberFormat.INTERNATIONAL)
    }



    validatePhoneNumber(phoneNumber) {
        /*
        Phone number validation using google-libphonenumber
        */
        let valid = false;
        try {
            const phoneUtil = PhoneNumberUtil.getInstance();
            valid = phoneUtil.isValidNumber(phoneUtil.parse(phoneNumber));
        } catch (e) {
            valid = false;
        }
        if (valid) {
            this.setState({
                //message: 'Phone number ' + this.getValidNumber(phoneNumber) + ' is valid',
                color: 'green'
            });
        } else {
            this.setState({
                message: 'Phone number ' + phoneNumber + ' is not valid',
                color: 'red'
            });
        }
    }

    handleValidation() {


        let firstname = this.state.firstname;
        let lastname = this.state.lastname;
        let email = this.state.email;

        let mobile = this.state.mobile;
        let address = this.state.address;
        let designation = this.state.designation;

        let nationality = this.state.selected_nationality;
        let country = this.state.selected_country;
        let city = this.state.selected_city;

        let errors = {};
        let formIsValid = true;


        let token = window.localStorage.getItem('DonateCaptcha');




        if (token === null || token === 'null') {
            formIsValid = false;
            errors["Captcha"] = "*Please Select The Captcha";
        }


        if (firstname == "") {
            formIsValid = false;
            errors["firstname"] = "*Please Enter Your First Name";
        }

        if (lastname == "") {
            formIsValid = false;
            errors["lastname"] = "*Please Enter Your Last Name";
        }

        // const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        // if (regex.test(email) == false) {

            // errors['email'] = "*Email is not valid";
            // this.setState({
            //     errors: errors
            // });
            // formIsValid = false;

        //     formIsValid = false;
        //     errors["email"] = "*Email is not valid";
        // }

        if (email == "") {
            formIsValid = false;
            errors["email"] = "*Please Enter Your Email";
        }

        var re = /\S+@\S+\.\S+/;




        if (re.test(email) == false) {

            formIsValid = false;
            errors["email"] = "*Please Enter a Valid Email Address";

        }



        if (mobile == "") {
            formIsValid = false;
            this.state.message = "*Please Enter Your Mobile Number";
            this.state.color = 'red';
        }

        var a = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(mobile);


        if (a == false) {
            formIsValid = false;
            errors["mobile"] = "*Please Enter a Valid Mobile Number";
        }

        if (address == "") {
            formIsValid = false;
            errors["address"] = "*Please Enter Your address";
        }
        if (designation == "") {
            formIsValid = false;
            errors["designation"] = "*Please Enter Your Designation Applied For";
        }

        if (city == "") {
            formIsValid = false;
            errors["cities"] = "*Please Enter Your City";
        }

        if (country == "") {
            formIsValid = false;
            errors["country"] = "*Please Select Your Country";
        }
        if (nationality == "") {
            formIsValid = false;
            errors["nationality"] = "*Please Select Your Nationality";
        }


        this.setState({ errors: errors });
        return formIsValid;
    }


    handleChange = selected_country => event => {


        let dataxx = event.target.value;
        const result = this.state.countries.filter(x => x.id > 0 && x.id == dataxx).map(x => x.phonecode);




        this.setState({
            [selected_country]: event.target.value
        });

        let errors = this.state.errors;
        errors["country"] = "";

        axios.post(apiUrl.apiUrl + '/forms/fetch_cities/' + event.target.value)
            .then(res =>

                this.setState({
                    cities: res.data,
                    country_code: result

                })

            );

        this.setState({ errors: errors });
    };



    handleChangeCity123 = selected_city => event => {
        this.setState({
            [selected_city]: event.target.value,
        });

        let errors = this.state.errors;
        errors["cities"] = "";




        this.setState({ errors: errors });
    };


    handleChangeCity = event => {


        this.setState({ selected_city: event.target.value });


        let errors = this.state.errors;
        errors["cities"] = "";

        this.setState({ errors: errors });

    }





    handleChangeNationality = selected_nationality => event => {
        this.setState({
            [selected_nationality]: event.target.value,
        });

        let errors = this.state.errors;
        errors["nationality"] = "";




        this.setState({ errors: errors });
    };


    upload = (e) => {

        const self = this;

        if (self.handleValidation(e)) {

            self.setState({ loading: true });

            // let country_code = self.state.country_code;
            // let mobile = self.state.mobile;

            let token = window.localStorage.getItem('DonateCaptcha');

            let countries = this.state.countries;

            // console.log(countries);

            const agentobj ={
                firstname:this.state.firstname,
                lastname:this.state.lastname,
                email:this.state.email,
                mobile:this.state.mobile,              
                designation:this.state.designation,
                selected_city:this.state.selected_city,
                selected_country:this.state.selected_country,
                selected_nationality:this.state.selected_nationality,
                address:this.state.address,
                countries:this.state.countries,
                token:token  

              };
             
              axios.post('http://localhost/galleriaapi/agent_form.php',agentobj)
              .then(res=> console.log(res.data))
              .catch(error => {
                console.log(error.response);

                
            });
            
            self.setState({

                firstname: '',
                lastname: '',
                email: '',
                mobile:'',
                designation:'',
                selected_city:'',
                selected_country:'',
                selected_nationality:'',
                address:''
                
            });

            this.captcha.reset();

            window.localStorage.removeItem("DonateCaptcha");
         

            // axios.post(apiUrl.apiUrl + "/save_agent_form", { firstname: self.state.firstname, lastname: self.state.lastname, email: self.state.email, mobile: "+" + country_code + "" + mobile, address: self.state.address, designation: self.state.designation, nationality: self.state.selected_nationality, country: self.state.selected_country, city: self.state.selected_city, captcha: token }).then(response => {
            //     this.setState({


            //         firstname: "",
            //         lastname: "",
            //         email: "",
            //         mobile: "",
            //         message: "",
            //         designation: "",
            //         selected_city: "",
            //         selected_country: "",
            //         selected_nationality: "",
            //         address: "",
            //     });


                // this.captcha.reset();

                // window.localStorage.removeItem("DonateCaptcha");
                // window.history.pushState("agent-form-submitted", "Title", "/marquis-signature-cpc-dubai/?mail=agent-form-submitted");

                // this.setState({ redirect: true });


            // });




            //e.preventDefault();
        }

    }

    closeModalDialog() {
        document.getElementById('myModal').style.display = 'none';
    }


    onChangeFirstName = event => {


        this.setState({ firstname: event.target.value });


        let errors = this.state.errors;
        errors["firstname"] = "";

        this.setState({ errors: errors });

    }

    onChangeLastname = event => {


        this.setState({ lastname: event.target.value });


        let errors = this.state.errors;
        errors["lastname"] = "";

        this.setState({ errors: errors });

    }

    onChangeEmail = event => {


        this.setState({ email: event.target.value });


        let errors = this.state.errors;
        errors["email"] = "";

        this.setState({ errors: errors });

    }
    onChangeMobile123 = event => {


        this.setState({ mobile: event.target.value });


        let errors = this.state.errors;
        errors["mobile"] = "";

        this.setState({ errors: errors });

    }

    onChangeMessage = event => {


        this.setState({ message: event.target.value });


        let errors = this.state.errors;
        errors["message"] = "";

        this.setState({ errors: errors });

    }


    onChangeDesignation = event => {


        this.setState({ designation: event.target.value });


        let errors = this.state.errors;
        errors["designation"] = "";

        this.setState({ errors: errors });

    }


    onChangeAddress = event => {


        this.setState({ address: event.target.value });


        let errors = this.state.errors;
        errors["address"] = "";

        this.setState({ errors: errors });

    }


    // addhashtourlforcontactbuttonclicked(){
    //     window.history.pushState("contact-button-clicked", "Title", "/marquis-signature-cpc-dubai/?mail=contact-button-clicked");

    // }

    // addhashtourlforcontactbuttonclickedfooter(){
    //     window.history.pushState("footer-contact-button-clicked", "Title", "/marquis-signature-cpc-dubai/?mail=footer-contact-button-clicked");

    // }



    render() {
        return (
            <Fragment>
                <section className="become-an-agent">
                    <Container fluid className="padding-zero">
                        <Row>
                            <Col md={12}>
                                <div className="become-an-agent-button" onClick={this.agentModalopen}>
                                    <p>Click here to Become an agent</p>
                                </div>

                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="marquis-footer">
                    <Container fluid className="wrap footer-logo-container" >
                        <Row className="footer-logo-row">
                            <Col md={4} className="broucher-col">

                                {/* <div className="footer-broucher-link" onClick={this.formModalopen}>
                                    <div className="footer-broucher-circle">
                                        <span className="">PDF</span>
                                        <p>Download Brochure</p>
                                    </div>
                                </div> */}

                            </Col>
                            <Col md={4} className="logo-col">

                                <div className="logo-div">
                                    <img src={Logo} className="img-fluid bgLogo" alt="Marquislogo1" />
                                </div>

                            </Col>
                            <Col md={4} className="social-links-col">
                                {/* <div className="social-links-div">
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


                                </div> */}
                            </Col>
                        </Row>
                        <Row className="footer-links-row">
                            <Col md={12} className="footer-links-col">
                                <ul className="footer-links-list">
                                    <li><Link key="homefeatures-sec" to="homefeatures-sec" spy={true} smooth={true} className="nav-link"> FEATURES </Link></li>
                                    <li> <Link key="homeamenities-sec" to="homeamenities-sec" spy={true} smooth={true} className="nav-link">AMENITIES</Link></li>
                                    <li> <Link key="homehighlights-sec" to="homehighlights-sec" spy={true} smooth={true} className="nav-link">HIGHLIGHTS</Link></li>
                                    <li> <Link key="homefloorplan-sec" to="homefloorplan-sec" spy={true} smooth={true} className="nav-link">FLOOR PLANS</Link></li>
                                    <li>  <Link key="homelocation-sec" to="homelocation-sec" spy={true} smooth={true} className="nav-link">LOCATIONS</Link></li>
                                    <li>  <Link key="homecontactus-sec" to="homecontactus-sec" spy={true} smooth={true} className="nav-link" onClick={this.addhashtourlforcontactbuttonclickedfooter}>CONTACT US</Link></li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                    <Container fluid className="wrap copy-right-container">
                        <Row className="copy-right-row">
                            <Col md={6} className="left-col">
                                <p>©Copyright 2022. Marquis Galleria. All rights reserved.</p>
                            </Col>
                            <Col md={6} className="right-col">
                                <a
                                    href="terms-conditions"
                                    className="links leftborder-links"
                                >
                                    <p> TERMS & CONDITIONS </p>
                                </a>
                                <a
                                    href="privacy-policy"
                                    className="links leftborder-links"
                                >
                                    <p> PRIVACY POLICY </p>
                                </a>
                                <a
                                    href="https://www.tablonoir.com/"
                                    className="links leftborder-links" target="_blank"
                                >
                                    <p> MADE BY TABLONOIR</p>
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <div className="becomeAgent">
                    <Link to='homecontactus-sec'><Button className="goldernColorBtn btn-block" onClick={this.addhashtourlforcontactbuttonclicked}>Contact Us</Button> </Link>
                </div>
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

                                                        {/* <ReCAPTCHA
                                                            sitekey="6LdUt3QgAAAAABa0w8ctOTdSBSqQWop2WIoVHJkm"
                                                            onChange={this.onChange123}
                                                            elementid="abc123"

                                                        /> */}

                                                        <Reaptcha sitekey="6LdUt3QgAAAAABa0w8ctOTdSBSqQWop2WIoVHJkm" onVerify={this.onChange123} ref={e => (this.captcha1 = e)} />

                                                        <span className="form-error">{this.state.errors["Captcha123"]}</span>
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


                {/* Become an agent modal popup section */}
                <div>
                    <Modal show={this.state.becomeanagentmodal} onHide={() => this.agentModalclose()} size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered className="download-modal agent-modal">
                        <Modal.Header className="download-modal-header" closeButton> </Modal.Header>

                        <Modal.Body className="download-modal-body">

                            <div className="container download-modal-container">
                                <div className="row download-modal-row">
                                    <div className="col-md-12 col-lg-10">
                                        <div className="download-modal-content">
                                            <div className="download-modal-heading">
                                                {/* <h5>Become an Agent</h5> */}
                                                <p>Are you interested in working for our company as an agent? Register below and we will get back to you shortly.</p>
                                            </div>
                                            <div className="download-modal-form">
                                                <Form>
                                                    <Row>
                                                        <Form.Group key="one" className="mb-1 col-md-6">
                                                            <Form.Control type="text" placeholder="First Name *" value={this.state.firstname}
                                                                onChange={this.onChangeFirstName} />

                                                            <span className="form-error">{this.state.errors["firstname"]}</span>
                                                        </Form.Group>

                                                        <Form.Group key="two" className="mb-1 col-md-6">
                                                            <Form.Control type="text" placeholder="Last Name *" value={this.state.lastname}
                                                                onChange={this.onChangeLastname} />
                                                            <span className="form-error">{this.state.errors["lastname"]}</span>


                                                        </Form.Group>

                                                        <Form.Group className="mb-1 col-md-6">
                                                            <Form.Select className="form-control" id="nationality" value={this.state.selected_nationality}
                                                                onChange={this.handleChangeNationality('selected_nationality')}
                                                            >
                                                                <option>Nationality*</option>


                                                                {this.state.countries.map(option => (
                                                                    <option value={option.id} key={option.name}>{option.name}</option>
                                                                ))}


                                                            </Form.Select>
                                                            <span className="form-error">{this.state.errors["nationality"]}</span>
                                                        </Form.Group>
                                                        <Form.Group className="mb-1 col-md-6">
                                                            <Form.Control type="text" placeholder="Designation*" id="designation" value={this.state.designation}
                                                                onChange={this.onChangeDesignation} />
                                                            <span className="form-error">{this.state.errors["designation"]}</span>
                                                        </Form.Group>
                                                        <Form.Group className="mb-1 col-md-6">
                                                            <Form.Select className="form-control" value={this.state.selected_country}
                                                                onChange={this.handleChangeCountry('selected_country')}>
                                                                <option>Country*</option>


                                                                {this.state.countries.map(option => (
                                                                    <option value={option.id} key={option.name}>{option.name}</option>
                                                                ))}

                                                            </Form.Select>
                                                            <span className="form-error">{this.state.errors["country"]}</span>
                                                        </Form.Group>
                                                        <Form.Group className="mb-1 col-md-6">
                                                            <Form.Control type="text" placeholder="City*" id="selected_city" value={this.state.selected_city}
                                                                onChange={this.handleChangeCity} />
                                                            <span className="form-error">{this.state.errors["cities"]}</span>
                                                        </Form.Group>
                                                        <Form.Group className="mb-1 col-md-6">
                                                            <Form.Control type="text" placeholder="Email*" id="email" value={this.state.email}
                                                                onChange={this.onChangeEmail} />
                                                            <span className="form-error">{this.state.errors["email"]}</span>
                                                        </Form.Group>
                                                        <Form.Group className="mb-1 col-md-6">
                                                            <InputGroup>
                                                                <InputGroup.Prepend>
                                                                    <InputGroup.Text id="prepend-text">
                                                                        {"+" + this.state.country_code}
                                                                    </InputGroup.Text>
                                                                </InputGroup.Prepend>
                                                                <Form.Control
                                                                    type="text" placeholder="Mobile*" id="mobile" className='country-code-input' value={this.state.mobile}
                                                                    onChange={this.onChangeMobile} />
                                                                <span className="form-error">{this.state["message"]}</span>

                                                            </InputGroup>
                                                        </Form.Group>
                                                        <Form.Group className="mb-1 col-md-12">
                                                            <Form.Control type="text" placeholder="Address" id="address" value={this.state.address}
                                                                onChange={this.onChangeAddress} />
                                                            <span className="form-error">{this.state.errors["address"]}</span>
                                                        </Form.Group>


                                                        <Form.Group className="mb-1 col-md-12">





                                                            {/*  <ReCAPTCHA
                                                                    sitekey="6LdUt3QgAAAAABa0w8ctOTdSBSqQWop2WIoVHJkm"
                                                                    onChange={this.onChange}
                                                                    elementid="abc456"

                                                                /> */}

                                                            <Reaptcha sitekey="6LeTGIUjAAAAAOvE0c8UArczATZOmeKGZrVFAg_C" onVerify={this.onChangeFooter} ref={e => (this.captcha = e)} />
                                                            <span className="form-error">{this.state.errors["Captcha"]}</span>

                                                        </Form.Group>
                                                    </Row>
                                                    <div className="button-div">

                                                        <Button type="button" className="goldernColorBtn" onClick={this.upload}> Submit </Button>
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

            </Fragment>

        )
    }
}


export default Footer

 


