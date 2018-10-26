import React, { Component } from 'react';
import './Shared.css'

class Footer extends Component {

  render() {
    return (
        <nav className="Footer">
  <div className="container">
    <div className="row asl" >
        <div className="col-md-3">
            <p>
                Company
            </p>
            <ul>
                <li><a href="">About Us</a></li>
                <li><a href="">Careers</a></li>
                <li><a href="">FAQs</a></li>
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">Terms and Condition</a></li>
                <li><a href="">Report</a></li>
            </ul>
        </div>
        <div className="col-md-3">
            <p>
                Services
            </p>
            <ul>
                <li><a href="">Track Process</a></li>
                <li><a href="">Consultancy</a></li>
                <li><a href="">Latest Offers</a></li>
                <li><a href="">Become an Agent</a></li>
            </ul>
        </div>
        <div className="col-md-3">
            <p>
                Products
            </p>
            <ul>
                <li><a href="">Advertise</a></li>
                <li><a href="">Testimonals</a></li>
                <li><a href="">Partners</a></li>
                <li><a href="">The Future</a></li>
            </ul>
        </div>
        <div className="col-md-3">
            <p>
                News Letter
            </p>
        </div>
    </div>
  </div>
</nav>
      
    );
  }
}

export default Footer;