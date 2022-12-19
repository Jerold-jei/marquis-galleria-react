import React, { PureComponent, Fragment } from 'react'; 
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll'; 
import Logo from './../../assets/Marquis_Galleria_Logo-01.svg';   
class Header extends PureComponent {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         addClass: false, 
    //         navclassName: "", 
    //     }
    // } 

    // componentDidMount() {
    //     window.addEventListener("scroll", this.handleScroll);
    // }

    // handleScroll = () => {
    //     if (window.pageYOffset > 300) {
    //         if (!this.state.navclassName) {
    //             this.setState({ navclassName: "navactive" });
    //         }
    //     } else {
    //         if (this.state.navclassName) {
    //             this.setState({ navclassName: "" });
    //         }
    //     }

    // }



    addhashtourlforcontactbuttonclicked(){
        window.history.pushState("header-contact-button-clicked", "Title", "/marquis-signature-cpc-dubai/?mail=header-contact-button-clicked");

    }

    render() { 
        return (
          <Fragment>  
            {/* Header Start */} 
            {/* <Navbar fixed="top" bg="light" expand="lg" className={`marquis-navbar ${this.state.navclassName}`}> */}
            <Navbar fixed="top" bg="light" expand="lg" className="marquis-navbar">
                    <Container className="marquis-navBG">
                        <Navbar.Brand>
                            
                                <img src={Logo} className="img-fluid bgLogo" alt="Marquis-logo" />  
                           
                            
                        </Navbar.Brand>
                   
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                     
                        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav"> 
                            <Nav.Item>
                                <Link to="homefeatures-sec" spy={true} smooth={true} className="nav-link"> Features  </Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to="homeamenities-sec" spy={true} smooth={true} className="nav-link">Amenities </Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to="homehighlights-sec" spy={true} smooth={true} className="nav-link">Highlights </Link>
                            </Nav.Item> 
                            <Nav.Item>
                                <Link to="homefloorplan-sec" spy={true} smooth={true} className="nav-link">Floor Plans </Link>
                            </Nav.Item> 
                            <Nav.Item>
                                <Link to="homelocation-sec" spy={true} smooth={true} className="nav-link">Locations </Link>
                            </Nav.Item> 
                            <Nav.Item>
                                <Link to="homecontactus-sec" spy={true} smooth={true} className="nav-link goldernColorBtn text-lowercase" onClick={this.addhashtourlforcontactbuttonclicked}>Contact Us </Link>
                            </Nav.Item> 
                        </Navbar.Collapse> 


                        
                    </Container>
                </Navbar> 
          </Fragment>
          
        )
      }
}


export default Header

 