import React, { PureComponent, Fragment } from "react";
import { useRef, useState } from "react";
import ReactDOM from "react-dom/client";
// import { useRef } from "react";
import { Container, Col, Row } from "bootstrap-4-react";
// Swiper
// Swiper
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import featuresImage1 from "./../../assets/Marquis_Galleria_Assets-04.jpg";
import featuresImage2 from "./../../assets/Marquis_Galleria_Assets-04.jpg";
import featuresImage3 from "./../../assets/Marquis_Galleria_Assets-04.jpg";
import featuresImage4 from "./../../assets/Marquis_Galleria_Assets-04.jpg";
import featuresImage5 from "./../../assets/Marquis_Galleria_Assets-04.jpg";
import featuresImage6 from "./../../assets/Marquis_Galleria_Assets-04.jpg";
import featuresImage7 from "./../../assets/Marquis_Galleria_Assets-04.jpg";
import featuresImage8 from "./../../assets/Marquis_Galleria_Assets-04.jpg";
import featuresImage9 from "./../../assets/Marquis_Galleria_Assets-04.jpg";
import "photoswipe/dist/photoswipe.css";

import { Gallery, Item } from "react-photoswipe-gallery";

// const pagination = {
//     clickable: true,
//     renderBullet: function (index, className) {
//         return '<span class="' + className + '"><div class="circle-pagination"><svg class="circ" width="80" height="80" class="circ"><circle class="circ1" cx="20" cy="40" r="20" stroke="#000" stroke-width="1" fill="none"/><circle class="circ2" cx="20" cy="40" r="20" stroke="#000" stroke-width="1" fill="none"/><span class="number-text">' + (index + 1) + '</span></svg></div></span>';
//     }
// };
const swiper_texts = ["Elevators",
                   "Corridor",
                   "Living Room",
                   "Dining Room",
                   "Bedroom",
                   "Bathroom",
                   "Plunge Pool"];
  //  console.log('swiper_texts=',swiper_texts);

   const tableRows=swiper_texts.map(
    (element)=>{
        return(             
          <h4>{element}</h4>     
        )
    }
)

SwiperCore.use([Navigation, Autoplay, Pagination]);

class HomeFeatures extends PureComponent {
  render() {
    return (
      <Fragment>
        <section className="homefeatures-sec" id="homefeatures-sec">
          <Container fluid className="wrap">
            <Row className="common-heading-row">
              <Col md={8} className="common-heading-col">
                <div className="common-heading-div" data-aos="fade-up">
                  <h2 className="large-heading blackColor">FEATURES</h2>
                  <h5 className="heading-text blackColor" data-aos="fade-up">
                    TOP NOTCH{" "}
                    <span
                      className="heading-text goldenColor"
                      data-aos="fade-up"
                    >
                      {" "}
                      FEATURES
                    </span>
                  </h5>
                </div>
              </Col>
            </Row>
          </Container>
          <Container fluid className="padding-zero features-swiper-container">
            <Row>
              {/* <Col md={1}></Col> */}
              <Col md={12}>
                <Gallery>
                  <div className="features-swiper-div">
                    <Swiper
                      className="features-swiper"
                      // navigation={false}
                      grabCursor={true}
                      autoplay={true}
                      speed={1000}
                      spaceBetween={30}
                      slidesPerView={2.1}
                      loop={true}
                      draggable={true}
                      centeredSlides={true}
                      pagination={{
                        el: ".swiper-pagination",
                        type: "progressbar",                       
                      }}
                      navigation={{
                        nextEl: ".features-next",
                        prevEl: ".features-prev",
                      }}
                      breakpoints={{
                        320: {
                          slidesPerView: 1,
                        },
                        768: {
                          slidesPerView: 1.5,
                        },
                      }}
                    >
                      <SwiperSlide>
                        <div className="features-div">
                          <Row className="features-row">
                            <Col md={12}>
                              <div className="features-img">
                                <Item
                                  original={featuresImage1}
                                  thumbnail={featuresImage1}
                                  width="1100"
                                  height="650"
                                >
                                  {({ ref, open }) => (
                                    <img
                                      ref={ref}
                                      onClick={open}
                                      src={featuresImage1}
                                    />
                                  )}
                                </Item>
                                {/* <img src={featuresImage1} className="img-fluid" alt="features-img" />  */}
                                {/* <div className="feature-slide-bottom-text"> */}
                                <div className="feature-text">
                                  <h4>SWIMMING POOL</h4>
                                </div>
                                {/* </div> */}
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="features-div">
                          <Row className="features-row">
                            <Col md={12}>
                              <div className="features-img">
                                <Item
                                  original={featuresImage2}
                                  thumbnail={featuresImage2}
                                  width="1100"
                                  height="650"
                                >
                                  {({ ref, open }) => (
                                    <img
                                      ref={ref}
                                      onClick={open}
                                      src={featuresImage2}
                                    />
                                  )}
                                </Item>
                                {/* <img src={featuresImage2} className="img-fluid" alt="features-img" />  */}
                                {/* <div className="feature-slide-bottom-text"> */}
                                <div className="feature-text">
                                  <h4>Living room</h4>
                                </div>
                                {/* </div> */}
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="features-div">
                          <Row className="features-row">
                            <Col md={12}>
                              <div className="features-img">
                                <Item
                                  original={featuresImage3}
                                  thumbnail={featuresImage3}
                                  width="1100"
                                  height="650"
                                >
                                  {({ ref, open }) => (
                                    <img
                                      ref={ref}
                                      onClick={open}
                                      src={featuresImage3}
                                    />
                                  )}
                                </Item>
                                {/* <img src={featuresImage3} className="img-fluid" alt="features-img" />  */}
                                {/* <div className="feature-slide-bottom-text"> */}
                                <div className="feature-text">
                                  <h4>Double height designer lobby</h4>
                                </div>
                                {/* </div> */}
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="features-div">
                          <Row className="features-row">
                            <Col md={12}>
                              <div className="features-img">
                                <Item
                                  original={featuresImage4}
                                  thumbnail={featuresImage4}
                                  width="1100"
                                  height="650"
                                >
                                  {({ ref, open }) => (
                                    <img
                                      ref={ref}
                                      onClick={open}
                                      src={featuresImage4}
                                    />
                                  )}
                                </Item>
                                {/* <img src={featuresImage4} className="img-fluid" alt="features-img" />  */}
                                {/* <div className="feature-slide-bottom-text"> */}
                                <div className="feature-text">
                                  <h4>Elevators</h4>
                                </div>
                                {/* </div> */}
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="features-div">
                          <Row className="features-row">
                            <Col md={12}>
                              <div className="features-img">
                                <Item
                                  original={featuresImage5}
                                  thumbnail={featuresImage5}
                                  width="1100"
                                  height="650"
                                >
                                  {({ ref, open }) => (
                                    <img
                                      ref={ref}
                                      onClick={open}
                                      src={featuresImage5}
                                    />
                                  )}
                                </Item>
                                {/* <img src={featuresImage5} className="img-fluid" alt="features-img" />  */}
                                {/* <div className="feature-slide-bottom-text"> */}
                                <div className="feature-text">
                                  <h4>Signature floors</h4>
                                </div>
                                {/* </div> */}
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="features-div">
                          <Row className="features-row">
                            <Col md={12}>
                              <div className="features-img">
                                <Item
                                  original={featuresImage6}
                                  thumbnail={featuresImage6}
                                  width="1100"
                                  height="650"
                                >
                                  {({ ref, open }) => (
                                    <img
                                      ref={ref}
                                      onClick={open}
                                      src={featuresImage6}
                                    />
                                  )}
                                </Item>
                                {/* <img src={featuresImage6} className="img-fluid" alt="features-img" />  */}
                                {/* <div className="feature-slide-bottom-text"> */}
                                <div className="feature-text">
                                  <h4>Kitchen</h4>
                                </div>
                                {/* </div> */}
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="features-div">
                          <Row className="features-row">
                            <Col md={12}>
                              <div className="features-img">
                                <Item
                                  original={featuresImage7}
                                  thumbnail={featuresImage7}
                                  width="1100"
                                  height="650"
                                >
                                  {({ ref, open }) => (
                                    <img
                                      ref={ref}
                                      onClick={open}
                                      src={featuresImage7}
                                    />
                                  )}
                                </Item>
                                {/* <img src={featuresImage7} className="img-fluid" alt="features-img" />  */}
                                {/* <div className="feature-slide-bottom-text"> */}
                                <div className="feature-text">
                                  <h4>Bathroom</h4>
                                </div>                               
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="features-div">
                          <Row className="features-row">
                            <Col md={12}>
                              <div className="features-img">
                                <Item
                                  original={featuresImage8}
                                  thumbnail={featuresImage8}
                                  width="1100"
                                  height="650"
                                >
                                  {({ ref, open }) => (
                                    <img
                                      ref={ref}
                                      onClick={open}
                                      src={featuresImage8}
                                    />
                                  )}
                                </Item>
                                {/* <img src={featuresImage8} className="img-fluid" alt="features-img" />  */}
                                {/* <div className="feature-slide-bottom-text"> */}
                                <div className="feature-text">
                                  <h4>Wardrobe</h4>
                                </div>                                
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="features-div">
                          <Row className="features-row">
                            <Col md={12}>
                              <div className="features-img">
                                <Item
                                  original={featuresImage9}
                                  thumbnail={featuresImage9}
                                  width="1100"
                                  height="650"
                                >
                                  {({ ref, open }) => (
                                    <img
                                      ref={ref}
                                      onClick={open}
                                      src={featuresImage9}
                                    />
                                  )}
                                </Item>
                                {/* <img src={featuresImage9} className="img-fluid" alt="features-img" />  */}
                                {/* <div className="feature-slide-bottom-text"> */}
                                <div className="feature-text">
                                  <h4>Plunge Pool</h4>                                
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                    <Row className="features-arrows-row">
                      {/* <div className="feature-text">                        
                        {tableRows[0]}
                      </div>                      */}
                      <div className="features-prev"> </div>
                      <div className="swiper-pagination"></div>
                      <div className="features-next"> </div>
                    </Row>
                  </div>
                </Gallery>
              </Col>
            </Row>
          </Container>
        </section>
      </Fragment>
    );
  }
}

export default HomeFeatures;
