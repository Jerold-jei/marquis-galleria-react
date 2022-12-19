import React, { PureComponent, Fragment } from 'react';
import Header from '../common/header';
import Footer from '../common/footer';
import PricacyBanner from './privacy-policy-banner'; 
import PrivacyDescriptions from './privacy-policy-descriptions'; 
class PrivacyPage extends PureComponent{
 
 
  render(){

      return( 
        <Fragment>
          <Header/>
          <PricacyBanner/>   
          <PrivacyDescriptions />
          <Footer />
        </Fragment>
      )

  }
}

export default PrivacyPage