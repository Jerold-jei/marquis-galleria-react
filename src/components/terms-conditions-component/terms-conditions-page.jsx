import React, { PureComponent, Fragment } from 'react';
import Header from '../common/header';
import Footer from '../common/footer';
import TermsBanner from './terms-conditions-banner'; 
import TermsDescriptions from './terms-conditions-descriptions'; 
class TermsConditionsPage extends PureComponent{
 
 
  render(){

      return( 
        <Fragment>
          <Header/>
          <TermsBanner/>   
          <TermsDescriptions />
          <Footer />
        </Fragment>
      )

  }
}

export default TermsConditionsPage