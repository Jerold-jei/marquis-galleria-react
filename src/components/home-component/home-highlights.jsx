import React, { PureComponent, Fragment } from 'react';
import { Container, Col, Row } from 'bootstrap-4-react';
// Swiper
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import highlightsImg1 from './../../assets/Marquis_Galleria_Assets-09.jpg';
import highlightsImg2 from './../../assets/Marquis_Galleria_Assets-10.jpg';
import highlightsImg3 from './../../assets/Marquis_Galleria_Assets-11.jpg';
import highlightsImg4 from './../../assets/Marquis_Galleria_Assets-12.jpg';
import highlightsImg5 from './../../assets/Marquis_Galleria_Assets-13.jpg';
import highlightsImg6 from './../../assets/Marquis_Galleria_Assets-09.jpg';
import highlightsImg7 from './../../assets/Marquis_Galleria_Assets-09.jpg';
import 'photoswipe/dist/photoswipe.css';

import { Gallery, Item } from 'react-photoswipe-gallery';
// const pagination = {
//     clickable: true, 
//     renderBullet: function (index, className) { 
//         return '<span class="' + className + '"><div class="circle-pagination"><svg class="circ" width="80" height="80" class="circ"><circle class="circ1" cx="20" cy="40" r="20" stroke="#000" stroke-width="1" fill="none"/><circle class="circ2" cx="20" cy="40" r="20" stroke="#000" stroke-width="1" fill="none"/><span class="number-text">' + (index + 1) + '</span></svg></div></span>';
//     }
// };
SwiperCore.use([Navigation, Autoplay, Pagination]);
class HomeHighlights extends PureComponent {

    render() {
        return (
            <Fragment>
                <section className="homehighlights-sec" id="homehighlights-sec">
                    <Container fluid className="wrap">
                        <Row className="common-heading-row">
                            <Col md={12} className="common-heading-col">
                                <div className="common-heading-div" data-aos='fade-up'>
                                    <h2 className="large-heading darkBlue">Highlights</h2>
                                    <h5 className="heading-text darkBlue" data-aos='fade-up'>A <span className="goldenColor">lifestyle</span> to fall in <span className="goldenColor">love</span> with</h5>
                                    {/* <span className="golden-text goldenColor" data-aos='fade-up'>Highlights</span> */}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <Container fluid className="padding-zero highlights-swiper-container wrap" data-aos='fade-up'>
                        <Row>
                            <Col md={12}>
                                <Gallery>
                                    <div className="highlights-swiper-div">

                                        <Swiper className="highlights-swiper" navigation={true}
                                            grabCursor={true}
                                            autoplay={false}
                                            speed={1000} spaceBetween={100} slidesPerView={1} loop={true} draggable={true} centeredSlides={true} breakpoints={{
                                                320: {
                                                    slidesPerView: 1,
                                                },
                                                768: {
                                                    slidesPerView: 1,
                                                },
                                                992: {
                                                    slidesPerView: 1,
                                                },
                                                1024: {
                                                    slidesPerView: 1,
                                                },

                                            }}>
                                            <SwiperSlide>
                                                <div className="highlights-div">
                                                    <Row className="highlights-row">
                                                        <Col md={6} className="highlights-bg-img">
                                                            <div className="highlights-img">
                                                                <div className="overlay"></div>
                                                                <Item
                                                                    original={highlightsImg1}
                                                                    thumbnail={highlightsImg1}
                                                                    width="520"
                                                                    height="375"
                                                                >
                                                                    {({ ref, open }) => (
                                                                        <img ref={ref} onClick={open} src={highlightsImg1} />
                                                                    )}
                                                                </Item>
                                                                <div className="highlights-content">
                                                                    <h5>Sauna</h5>
                                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quod perferendis distinctio, quia tenetur nostrum velit officiis.</p>
                                                                </div>
                                                            </div>

                                                        </Col>
                                                        <Col md={6} className="highlights-bg-img">
                                                            <div className="highlights-img">
                                                                <div className="overlay"></div>
                                                                <Item
                                                                    original={highlightsImg5}
                                                                    thumbnail={highlightsImg5}
                                                                    width="520"
                                                                    height="375"
                                                                >
                                                                    {({ ref, open }) => (
                                                                        <img ref={ref} onClick={open} src={highlightsImg5} />
                                                                    )}
                                                                </Item>
                                                                <div className="highlights-content">
                                                                    <h5>DROP OF AREA</h5>
                                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus soluta at neque esse quos aut laborum magnam eos.</p>
                                                                </div>
                                                            </div>

                                                        </Col>
                                                        <Col md={6} className="highlights-bg-img">
                                                            <div className="highlights-img">
                                                                <div className="overlay"></div>
                                                                <Item
                                                                    original={highlightsImg3}
                                                                    thumbnail={highlightsImg3}
                                                                    width="520"
                                                                    height="375"
                                                                >
                                                                    {({ ref, open }) => (
                                                                        <img ref={ref} onClick={open} src={highlightsImg3} />
                                                                    )}
                                                                </Item>
                                                                <div className="highlights-content">
                                                                    <h5>Sky bay</h5>
                                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ea iusto? Omnis repudiandae consequuntur beatae odio perspiciatis.</p>
                                                                </div>
                                                            </div>

                                                        </Col>
                                                        <Col md={6} className="highlights-bg-img">
                                                            <div className="highlights-img">
                                                                <div className="overlay"></div>
                                                                <Item
                                                                    original={highlightsImg4}
                                                                    thumbnail={highlightsImg4}
                                                                    width="520"
                                                                    height="375"
                                                                >
                                                                    {({ ref, open }) => (
                                                                        <img ref={ref} onClick={open} src={highlightsImg4} />
                                                                    )}
                                                                </Item>
                                                                <div className="highlights-content">
                                                                    <h5>Balconies</h5>
                                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta asperiores hic possimus repudiandae tempore atque rerum, doloribus facilis expedita.</p>
                                                                </div>
                                                            </div>

                                                        </Col>
                                                    </Row>

                                                </div>
                                            </SwiperSlide>
                                            {/* <SwiperSlide>
                                        <div className="highlights-div">
                                            <Row className="highlights-row">
                                                <Col md={6} className="highlights-bg-img">
                                                    <div className="highlights-img"> 
                                                    <Item
                                                        original={highlightsImg2}
                                                        thumbnail={highlightsImg2}
                                                        width="520"
                                                        height="375"
                                                        >
                                                        {({ ref, open }) => (
                                                            <img ref={ref} onClick={open} src={highlightsImg2} />
                                                        )}
                                                        </Item> 
                                                    </div>
                                                </Col>
                                                <Col md={6}>
                                                    <div className="highlights-content"> 
                                                        <h5>Swimming pool</h5>
                                                        <p>​​Swim to the other side of bliss at our temperature-controlled semi-Olympic size three-sided infinity swimming pool that soaks you with pleasure as you swim.</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                          
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="highlights-div">
                                            <Row className="highlights-row">
                                                <Col md={6} className="highlights-bg-img">
                                                    <div className="highlights-img"> 
                                                    <Item
                                                        original={highlightsImg4}
                                                        thumbnail={highlightsImg4}
                                                        width="520"
                                                        height="375"
                                                        >
                                                        {({ ref, open }) => (
                                                            <img ref={ref} onClick={open} src={highlightsImg4} />
                                                        )}
                                                        </Item> 
                                                    </div>
                                                </Col>
                                                <Col md={6}>
                                                    <div className="highlights-content"> 
                                                        <h5>Cafe</h5>
                                                        <p>Have a long conversation with new neighbours and old friends while sipping coffee at our contemporary coffee shop that offers a delectable menu.</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                          
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="highlights-div">
                                            <Row className="highlights-row">
                                                <Col md={6} className="highlights-bg-img">
                                                    <div className="highlights-img"> 
                                                    <Item
                                                        original={highlightsImg3}
                                                        thumbnail={highlightsImg3}
                                                        width="520"
                                                        height="375"
                                                        >
                                                        {({ ref, open }) => (
                                                            <img ref={ref} onClick={open} src={highlightsImg3} />
                                                        )}
                                                        </Item> 
                                                    </div>
                                                </Col>
                                                <Col md={6}>
                                                    <div className="highlights-content"> 
                                                        <h5>Barbeque area</h5>
                                                        <p>The scenic cascading effect on the rooftop is a treat for the eyes and a relaxing feeling for the mind, creating a backdrop for a great time with friends and family.</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                          
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="highlights-div">
                                            <Row className="highlights-row">
                                                <Col md={6} className="highlights-bg-img">
                                                    <div className="highlights-img"> 
                                                    <Item
                                                        original={highlightsImg5}
                                                        thumbnail={highlightsImg5}
                                                        width="520"
                                                        height="375"
                                                        >
                                                        {({ ref, open }) => (
                                                            <img ref={ref} onClick={open} src={highlightsImg5} />
                                                        )}
                                                        </Item> 
                                                    </div>
                                                </Col>
                                                <Col md={6}>
                                                    <div className="highlights-content"> 
                                                        <h5>Balconies</h5>
                                                        <p>A balcony that offers you the vista and comfort you deserve, sporting ultra-comfortable furniture that creates an ideal place for quality time to make memories.</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                          
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="highlights-div">
                                            <Row className="highlights-row">
                                                <Col md={6} className="highlights-bg-img">
                                                    <div className="highlights-img"> 
                                                    <Item
                                                        original={highlightsImg6}
                                                        thumbnail={highlightsImg6}
                                                        width="520"
                                                        height="375"
                                                        >
                                                        {({ ref, open }) => (
                                                            <img ref={ref} onClick={open} src={highlightsImg6} />
                                                        )}
                                                        </Item> 
                                                    </div>
                                                </Col>
                                                <Col md={6}>
                                                    <div className="highlights-content"> 
                                                        <h5>Sky bay</h5>
                                                        <p>The gentle, cascading waterfalls serenade you on either side as you exit the apartment. Feel at one with nature, surrounded by the soothing sounds of water!</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                          
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="highlights-div">
                                            <Row className="highlights-row">
                                                <Col md={6} className="highlights-bg-img">
                                                    <div className="highlights-img"> 
                                                    <Item
                                                        original={highlightsImg7}
                                                        thumbnail={highlightsImg7}
                                                        width="520"
                                                        height="375"
                                                        >
                                                        {({ ref, open }) => (
                                                            <img ref={ref} onClick={open} src={highlightsImg7} />
                                                        )}
                                                        </Item> 
                                                    </div>
                                                </Col>
                                                <Col md={6}>
                                                    <div className="highlights-content"> 
                                                        <h5>Drop-off area</h5>
                                                        <p>​​Evolved facilities like electric car charge points supplemented with perceptive provisions like a dedicated drop-off area embellish the flow of life.</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                          
                                        </div>
                                    </SwiperSlide> */}

                                        </Swiper>
                                    </div>
                                </Gallery>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Fragment>
        )
    }
}


export default HomeHighlights

