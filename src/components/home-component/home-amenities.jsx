import React, { PureComponent, Fragment } from "react";
import { useRef, useState, useEffect } from "react";
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

import amenitiesImage1 from "./../../assets/Marquis_Galleria_Assets-07.jpg";
import amenitiesImage2 from "./../../assets/Marquis_Galleria_Assets-08.jpg";
import amenitiesImage3 from "./../../assets/Marquis_Galleria_Assets-11.jpg";
import amenitiesImage4 from "./../../assets/Marquis_Galleria_Assets-08.jpg";
// import featuresImage5 from "../assets/Marquis_Galleria_Assets-04.jpg";
// import featuresImage6 from "../assets/Marquis_Galleria_Assets-04.jpg";
// import featuresImage7 from "../assets/Marquis_Galleria_Assets-04.jpg";
// import featuresImage8 from "../assets/Marquis_Galleria_Assets-04.jpg";
// import featuresImage9 from "../assets/Marquis_Galleria_Assets-04.jpg";
// import featuresImage10 from "../assets/Marquis_Galleria_Assets-04.jpg";
import "photoswipe/dist/photoswipe.css";

import { Gallery, Item } from "react-photoswipe-gallery";

// var menu = ["Slide 1", "Slide 2", "Slide 3"];

SwiperCore.use([Navigation, Autoplay, Pagination]);

class HomeAmenities extends PureComponent {
  render() {
    return (
      <Fragment>
        <section className="homeamenities-sec" id="homeamenities-sec">
          <Container fluid className="wrap">
            <Row className="common-heading-row">
              <Col md={8} className="common-heading-col">
                <div className="common-heading-div" data-aos="fade-up">
                  <h2 className="large-heading blackColor">AMENITIES</h2>
                  <h5 className="heading-text blackColor" data-aos="fade-up">
                    A{" "}
                    <span
                      className="goldenColor"
                      data-aos="fade-up"
                    >
                      {" "}
                      Gallery of Amenities
                    </span>{" "}
                    for a lavish lifestyle
                  </h5>
                  <div className="homeamenities-header-text-div">
                    <p className="paraText" data-aos="fade-up">
                      <span className="goldenColor">
                        Savour the immeasurable pleasures of world-class
                      </span>{" "}
                      Amenities
                      <span className="goldenColor">
                        {" "}
                        that welcome you with open arms to enjoy an
                      </span>{" "}
                      exclusive lifestyle!
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          <Container fluid className="padding-zero amenities-swiper-sec">
            <Row className="amenities-swiper-row">
              <Col md={2}>
                <div className="amenities-count-div">
                    <div className="amenities-swiper-pagination"></div>     
                </div>                        
              </Col>
              <Col md={10}>
                {/* <Gallery>
                  <div className="features-swiper-div"> */}
                <Swiper
                  autoplay={true}
                  centeredSlides={false}
                  spaceBetween={20}
                  slidesPerView={1.8}
                  loop={true}
                  //   onSlideChange={() => console.log("slide change" )}
                  // onSwiper={swiper => console.log(currentSlide)}
                  pagination={{
                    // type: "fraction",
                    el: ".amenities-swiper-pagination",
                    type: "custom",
                    renderCustom: function (swiper, current, total) {
                       const count = current + "/" + (total);
                      return (count);
                    },
                  }}
                  navigation={{
                    nextEl: ".amenities-next",
                    prevEl: ".amenities-prev",
                  }}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 1.5,
                    },
                  }}
                  //   navigation={false}
                  modules={[Pagination, Navigation]}
                  className="amenitiesSwiper"

                  //   on = {
                  //     onSlideChange = function(){
                  //       var currentSlide = this.realIndex + 1;
                  //       console.log("currentSlide is:" + currentSlide);
                  //       document.querySelector('.current-slide').innerHTML = currentSlide;
                  //     }}
                >
                  <SwiperSlide>
                    <div className="amenities-div">
                      <Row className="amenities-row">
                        <Col md={12}>
                          <div className="amenities-img">
                            <Item
                              original={amenitiesImage1}
                              thumbnail={amenitiesImage1}
                              width="1100"
                              height="650"
                            >
                              {({ ref, open }) => (
                                <img
                                  ref={ref}
                                  onClick={open}
                                  src={amenitiesImage1}
                                />
                              )}
                            </Item>
                            {/* <img src={featuresImage1} className="img-fluid" alt="features-img" />  */}
                            {/* <div className="feature-slide-bottom-text"> */}
                            <div className="amenities-text">
                              <h4>GALLERIA GYM</h4>
                            </div>
                            {/* </div> */}
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="amenities-div">
                      <Row className="amenities-row">
                        <Col md={12}>
                          <div className="amenities-img">
                            <Item
                              original={amenitiesImage2}
                              thumbnail={amenitiesImage2}
                              width="1100"
                              height="650"
                            >
                              {({ ref, open }) => (
                                <img
                                  ref={ref}
                                  onClick={open}
                                  src={amenitiesImage2}
                                />
                              )}
                            </Item>
                            {/* <img src={featuresImage1} className="img-fluid" alt="features-img" />  */}
                            {/* <div className="feature-slide-bottom-text"> */}
                            <div className="amenities-text">
                              <h4>STEAM & SAUNA</h4>
                            </div>
                            {/* </div> */}
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="amenities-div">
                      <Row className="amenities-row">
                        <Col md={12}>
                          <div className="amenities-img">
                            <Item
                              original={amenitiesImage3}
                              thumbnail={amenitiesImage3}
                              width="1100"
                              height="650"
                            >
                              {({ ref, open }) => (
                                <img
                                  ref={ref}
                                  onClick={open}
                                  src={amenitiesImage3}
                                />
                              )}
                            </Item>
                            {/* <img src={featuresImage1} className="img-fluid" alt="features-img" />  */}
                            {/* <div className="feature-slide-bottom-text"> */}
                            <div className="amenities-text">
                              <h4>BUSINESS LOUNGE WITH GALLERIA BAR</h4>
                            </div>
                            {/* </div> */}
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="amenities-div">
                      <Row className="amenities-row">
                        <Col md={12}>
                          <div className="amenities-img">
                            <Item
                              original={amenitiesImage4}
                              thumbnail={amenitiesImage4}
                              width="1100"
                              height="650"
                            >
                              {({ ref, open }) => (
                                <img
                                  ref={ref}
                                  onClick={open}
                                  src={amenitiesImage4}
                                />
                              )}
                            </Item>
                            {/* <img src={featuresImage1} className="img-fluid" alt="features-img" />  */}
                            {/* <div className="feature-slide-bottom-text"> */}
                            <div className="amenities-text">
                              <h4>KID'S PLAY AREA</h4>
                            </div>
                            {/* </div> */}
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="amenities-div">
                      <Row className="amenities-row">
                        <Col md={12}>
                          <div className="amenities-img">
                            <Item
                              original={amenitiesImage1}
                              thumbnail={amenitiesImage1}
                              width="1100"
                              height="650"
                            >
                              {({ ref, open }) => (
                                <img
                                  ref={ref}
                                  onClick={open}
                                  src={amenitiesImage1}
                                />
                              )}
                            </Item>
                            {/* <img src={featuresImage1} className="img-fluid" alt="features-img" />  */}
                            {/* <div className="feature-slide-bottom-text"> */}
                            <div className="amenities-text">
                              <h4>SUBMERGED POOL LOUNGE</h4>
                            </div>
                            {/* </div> */}
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="amenities-div">
                      <Row className="amenities-row">
                        <Col md={12}>
                          <div className="amenities-img">
                            <Item
                              original={amenitiesImage1}
                              thumbnail={amenitiesImage1}
                              width="1100"
                              height="650"
                            >
                              {({ ref, open }) => (
                                <img
                                  ref={ref}
                                  onClick={open}
                                  src={amenitiesImage1}
                                />
                              )}
                            </Item>
                            {/* <img src={featuresImage1} className="img-fluid" alt="features-img" />  */}
                            {/* <div className="feature-slide-bottom-text"> */}
                            <div className="amenities-text">
                              <h4>LAUNDRY ROOM</h4>
                            </div>
                            {/* </div> */}
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="amenities-div">
                      <Row className="amenities-row">
                        <Col md={12}>
                          <div className="amenities-img">
                            <Item
                              original={amenitiesImage1}
                              thumbnail={amenitiesImage1}
                              width="1100"
                              height="650"
                            >
                              {({ ref, open }) => (
                                <img
                                  ref={ref}
                                  onClick={open}
                                  src={amenitiesImage1}
                                />
                              )}
                            </Item>
                            {/* <img src={featuresImage1} className="img-fluid" alt="features-img" />  */}
                            {/* <div className="feature-slide-bottom-text"> */}
                            <div className="amenities-text">
                              <h4>DROP-OFF AREA </h4>
                            </div>
                            {/* </div> */}
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="amenities-div">
                      <Row className="amenities-row">
                        <Col md={12}>
                          <div className="amenities-img">
                            <Item
                              original={amenitiesImage1}
                              thumbnail={amenitiesImage1}
                              width="1100"
                              height="650"
                            >
                              {({ ref, open }) => (
                                <img
                                  ref={ref}
                                  onClick={open}
                                  src={amenitiesImage1}
                                />
                              )}
                            </Item>
                            {/* <img src={featuresImage1} className="img-fluid" alt="features-img" />  */}
                            {/* <div className="feature-slide-bottom-text"> */}
                            <div className="amenities-text">
                              <h4>LEISURE DECK</h4>
                            </div>
                            {/* </div> */}
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="amenities-div">
                      <Row className="amenities-row">
                        <Col md={12}>
                          <div className="amenities-img">
                            <Item
                              original={amenitiesImage1}
                              thumbnail={amenitiesImage1}
                              width="1100"
                              height="650"
                            >
                              {({ ref, open }) => (
                                <img
                                  ref={ref}
                                  onClick={open}
                                  src={amenitiesImage1}
                                />
                              )}
                            </Item>
                            {/* <img src={featuresImage1} className="img-fluid" alt="features-img" />  */}
                            {/* <div className="feature-slide-bottom-text"> */}
                            <div className="amenities-text">
                              <h4>GALLERIA HALL</h4>
                            </div>
                            {/* </div> */}
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="amenities-div">
                      <Row className="amenities-row">
                        <Col md={12}>
                          <div className="amenities-img">
                            <Item
                              original={amenitiesImage1}
                              thumbnail={amenitiesImage1}
                              width="1100"
                              height="650"
                            >
                              {({ ref, open }) => (
                                <img
                                  ref={ref}
                                  onClick={open}
                                  src={amenitiesImage1}
                                />
                              )}
                            </Item>
                            {/* <img src={featuresImage1} className="img-fluid" alt="features-img" />  */}
                            {/* <div className="feature-slide-bottom-text"> */}
                            <div className="amenities-text">
                              <h4>GALLERIA TERRACE</h4>
                            </div>
                            {/* </div> */}
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <Row className="amenities-arrows-row">
                  <div className="amenities-prev"> </div>

                  <div className="amenities-next"> </div>
                </Row>
                {/* </div>
                </Gallery> */}
              </Col>
            </Row>
          </Container>
        </section>
      </Fragment>
    );
  }
}

export default HomeAmenities;
