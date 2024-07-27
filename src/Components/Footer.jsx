import React from 'react';
import '../index.css';
const Footer = () => {
  return (
    <div>
      <div className="footer mt-5 mb-5 text-white card shadow-lg" style={{ backgroundColor: 'darkcyan' }}>
        <div className="container">
          <div className="row mt-5 mb-5">
            <div className="col-xs-12 col-md-3">
              <h1>Develop India Online</h1>
              <hr />
              <p className="text-justify">Here is Description</p>
            </div>
            <div className="col-xs-12 col-md-3">
              <h3>Direct</h3>
              <a href="#" className="btn btn-block text-white text-left">Home</a>
              <a href="#" className="btn btn-block text-white text-left">About Us</a>
              <a href="#" className="btn btn-block text-white text-left">Our Services</a>
              <a href="#" className="btn btn-block text-white text-left">Admission Country</a>
              <a href="#" className="btn btn-block text-white text-left">Contact Us</a>
            </div>
            <div className="col-xs-12 col-md-3">
              <h3>Support</h3>
              <a href="#" className="btn btn-block text-white text-left">Help</a>
              <a href="#" className="btn btn-block text-white text-left">FAQ</a>
              <a href="#" className="btn btn-block text-white text-left">Payment Policy</a>
              <a href="#" className="btn btn-block text-white text-left">Privacy Policy</a>
              <a href="#" className="btn btn-block text-white text-left">Terms & Conditions</a>
            </div>
            <div className="col-xs-12 col-md-3">
              <h3>Visit Office</h3>
              <br />
              <p><i className="fa fa-map-pin" aria-hidden="true"></i> Address, Lucknow - Uttar Pradesh - 226001 INDIA</p>
              <p>
                <a href="#" className="btn"><i className="fa fa-whatsapp fa-lg" aria-hidden="true"></i></a>
                <a href="#" className="btn"><i className="fa fa-phone fa-lg" aria-hidden="true"></i></a>
                <a href="https://www.facebook.com/DevelopIndiaOnline/" className="btn"><i className="fa fa-facebook fa-lg" aria-hidden="true"></i></a>
                <a href="https://www.instagram.com/developindiaonline/" className="btn"><i className="fa fa-instagram fa-lg" aria-hidden="true"></i></a>
                <a href="mailto:developindiaonline@gmail.com" className="btn"><i className="fa fa-envelope fa-lg" aria-hidden="true"></i></a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright mb-5">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-12">
              <p><i className="fa fa-copyright" aria-hidden="true"></i> 2012-2019. All Rights Reserved | Develop India Online</p>
              <span><a href="https://www.instagram.com/developindiaonline/" className="btn text-muted btn-sm"><i className="fa fa-registered" aria-hidden="true"></i> Made by DIO ( Ayush Shrivastava )</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
