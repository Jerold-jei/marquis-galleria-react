import React, { Fragment, PureComponent } from "react";  
// Router Links
import {  Routes, Route } from "react-router-dom";  
// Import styles css
import '../styles/styles.scss';
// Import NPM styles
import 'bootstrap-4-react';
import 'react-bootstrap';
import 'react-icons/fa';  
// Import AOS Animation
import AOS from 'aos';
import 'aos/dist/aos.css'; 
// Page Links
import HomePage from './home-component/home-page';
import PrivacyPage from './privacy-policy-component/privacy-policy-page';
import TermsConditionsPage from './terms-conditions-component/terms-conditions-page';

class App extends PureComponent { 
  componentDidMount() {
    AOS.init({
      duration : '1500',   
      once: false,
      // mobile:false,
      // disable: 'mobile'
    });
    AOS.refresh();
  }
  render (){ 
      
    AOS.init({
      duration : '1500',   
      once: false,
      mobile:true
    });
    AOS.refresh();
    return (
      <Fragment>  
          <Routes>
              <Route path="/">
                  <Route index element={<HomePage />} />
                  <Route exact path="/home" element={<HomePage />} />
                  <Route exact path="/privacy-policy" element={<PrivacyPage />} />
                  <Route exact path="/terms-conditions" element={<TermsConditionsPage />} />
              </Route> 
            </Routes> 
      </Fragment>
    )
  }
}


export default App
