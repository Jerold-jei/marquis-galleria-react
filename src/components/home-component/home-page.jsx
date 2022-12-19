import React, { PureComponent, Fragment } from 'react';
import Header from '../common/header';
import Footer from '../common/footer';
import HomeBanner from './home-banner'; 
import HomeAbout from './home-about';
import HomeFeatures from './home-features';
import HomeAmenities from './home-amenities';
import HomeHighlights from './home-highlights';
import HomePaymentPlans from './home-payment-plans';
import HomeFloorplan from './home-floorplan';
import HomeLocation from './home-location';
import HomeContactus from './home-contactus'; 
class HomePage extends PureComponent {
  render() {
    return (
  
      <Fragment>


        <Header />
        <HomeBanner /> 
        <HomeAbout />
        <HomeFeatures />
        <HomeAmenities />
        <HomeHighlights />
        <HomePaymentPlans />
        <HomeFloorplan />
        <HomeLocation />
        <HomeContactus />
        <Footer /> 
      </Fragment>
    )

  }
}

export default HomePage