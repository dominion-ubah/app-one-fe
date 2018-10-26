import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Shared.css';
import $ from 'jquery';

import Login from '../auth/Login'

class Header extends Component {
  showLogin(e) {

    
      // const outsideClickListener = (event) => {
      //   if (!$(event.target).closest(selector).length) {
      //     if ($(selector).is(':visible')) {
      //       $(selector).hide()
      //       removeClickListener()
      //     }
      //   }
      // }
    
      // const removeClickListener = () => {
      //   document.removeEventListener('click', outsideClickListener)
      // }
    
      // document.addEventListener('click', outsideClickListener)
    

    if (!$('.Login').hasClass('activeLogin')) {
      $('.Login').addClass('activeLogin')
    }else {
      $('.Login').removeClass('activeLogin')
    }
  }
  render() {
  //   $(document).click(function(event) { 
  //     console.log('doc clicked')
  //     if(!$(event.target).closest('#menucontainer').length) {
  //         if($('#menucontainer').is(":visible")) {
  //             $('#menucontainer').hide();
  //         }
  //     }        
  // });


    return (
      <div className="Header">
       <nav className="navbar">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand logo" href="/">
                  <img alt="Brand" src="./assets/logo.png" width="70"/>
                  <span className="navbar-brand">CRADDLE</span><span> CRIBS</span>
                </a>
              </div>
              <div className="navbar-header d-none d-xs-none d-sm-block d-md-block d-lg-block">
                <span className="navbar-brand menu">
                
                  <span  className="c-link">
                    <span id="log" onClick={this.showLogin.bind(this)}>
                    Login
                    </span>
                    <Login />
                  </span>
                  <NavLink to="/register"  className="c-link">
                    <span className="c-link"> Become an Agent</span>
                  </NavLink>
                  <span className="profile_face">
                    </span>
                  
                </span>
              </div>
            </div>
          </nav>
      </div>
    );
  }
}

export default Header;