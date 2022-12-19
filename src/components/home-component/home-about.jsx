import React, { PureComponent, Fragment } from 'react'; 
import { Container, Col, Row, Button } from 'bootstrap-4-react'; 
import aboutImage1 from './../../assets/Marquis_Galleria_Assets-02.jpg';   
import aboutImage2 from './../../assets/Marquis_Galleria_Assets-03.jpg';  
import { FaRegPlayCircle } from "react-icons/fa";
import Modal from 'react-bootstrap/Modal';  
class HomeAbout extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            videomodal: false, 
        }
        this.videoModalclose = this.videoModalclose.bind(this);
        this.videoModalopen = this.videoModalopen.bind(this);
 
    }

    videoModalclose() {
        this.setState({ videomodal: false });
    }
    videoModalopen() {
        this.setState({ videomodal: true });
    }

    render() { 
        return ( 
            <Fragment>   
                <section className="homeabout-sec" id="homeabout-sec">
                    <Container fluid className="about-container first-container">
                        <Row className="about-row"> 
                            <Col md={6}>
                                <div className="img-div button-img" data-aos='fade-left'>
                                    <img src={aboutImage1} className="img-fluid" alt="about-img1" /> 
                                    <div className="bottom-button">
                                        <Button type="button" className="aboutgoldenColorBtn" onClick={this.videoModalopen}> Click Here to watch the walkthrough video  <FaRegPlayCircle /></Button>
                                    </div> 
                                </div>

                            </Col>
                            <Col md={6}>
                            <div className="text-div">
                                    <h4 data-aos='fade-left'>Welcome to a picturesque
landscape that redefines<span className="goldenColor"> modern living.</span> </h4>
                                    <p className="paraText" data-aos='fade-left'>Marquis Signature is a one-of-a-kind luxury living replete
with everything opulent and classy. It reinvents and
reconstructs the conventional way of living to bring about
a modern lifestyle like none other. In short, it’
s truly
yours, like your signature. Live life fully without missing
out on luxury, features and fun</p>
                                </div> 
                            </Col>
                        </Row> 
                    </Container>
                    <Container fluid className="about-container top-spacing">
                        <Row className="about-row column-reverse">
                            <Col md={6}>
                                <div className="text-div1">
                                    <h4 data-aos='fade-left'>It’s <span className="goldenColor">stunningly unique,</span> like your <span className="goldenColor">signature.</span></h4>
                                    <p className="paraText" data-aos='fade-left'>Marquis Signature is a one-of-a-kind luxury living replete
with everything opulent and classy. It reinvents and
reconstructs the conventional way of living to bring about
a modern lifestyle like none other. In short, it’
s truly
yours, like your signature. Live life fully without missing
out on luxury, features and fun</p>
                                </div> 
                            </Col>
                            <Col md={6}>
                                <div className="img-div1" data-aos='fade-right'>
                                    <img src={aboutImage2} className="img-fluid" alt="about-img2" /> 
                                </div>
                            </Col>
                         
                        </Row>
                    </Container>
                    <div>
                <Modal show={this.state.videomodal} onHide={()=>this.videoModalclose()}  size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered className="video-modal">   
                <Modal.Header className="video-modal-header" closeButton> </Modal.Header>  

                <Modal.Body className="video-modal-body"> 

                <div className="container video-modal-container">
                    <div className="row video-modal-row">
                        <div className="col-md-12"> 
                            <div className="video-link-div">
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/NBdayvj5xvQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
 
                        </div>
                    </div>

                  </div>


                </Modal.Body>

                </Modal>
                </div>
                </section>
          </Fragment> 
        )
      }
}


export default HomeAbout