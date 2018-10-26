import React, { Component } from 'react';
import $ from "jquery";
import { NavLink } from  'react-router-dom'

import '../Components.css'

class Login extends Component {

    constructor() {
        super();
        this.state = {
            tabsClicks : [],
            defaultTabSlides : [],
            childTabSlides : []
        }
    }


    componentDidMount () {
        $('#tab1').addClass('active')
    }

    switchLoginTabs (e) {
        let f= $('#login-default'), g= $('#login-child');
        let clickArray = this.state.tabsClicks;
        if(clickArray.length) {
            let lastClickEVent = clickArray[clickArray.length-1];
            if(lastClickEVent.className === 'active') {
                lastClickEVent.className = '';
            }
        }
        if($('#tab1').hasClass('active')) {
            $('#tab1').removeClass('active')
        }

        e.target.className ='active';
        clickArray.push(e.target);
        this.setState({tabsClicks:clickArray});
        
                if (!$('#tab1').hasClass('active') && f.hasClass('one-active')) {
                        f.removeClass('one-active').addClass('one');
                        g.removeClass('two').addClass('two-active');
                    } 
                    if ($('#tab1').hasClass('active') && f.hasClass('one')) {
                        f.removeClass('one').addClass('one-active');
                        g.removeClass('two-active').addClass('two');
                    }     
    }
 
  render() {
    return (
      <div className="Login">
      <span className="angle"></span>
        <p className="header">
          Login users
        </p>
        <div className="tabs" >
        <span id="tab1" onClick={this.switchLoginTabs.bind(this)}>Via Email</span>
        <span onClick={this.switchLoginTabs.bind(this)}>Socials</span>
        </div>
            
        <div className="container ">
            <div  className="loginCont">
                <div  id="login-default" className="one-active">
                    <form>
                        <input ref="username" type='text' placeholder='Email or Phone Number' />
                        <input ref="password" type='password' placeholder='Password'/>
                        <input type='submit' value='Login'/>
                    </form>
                    <div  className="smalltext">
                        <p >Not Registered ?</p><NavLink to="/register" className='Link'> Sign Up !</NavLink>
                    </div>
                </div>
                <div id="login-child" className="two">
                    <form>
                    <input type='submit' value='Login with Google' />
                    <input type='submit' value='Login with Facebook'/>
                    <input type='submit' value='Login with Twitter'/>
                    </form>
                    <div  className="smalltext">
                        <p >Not Registered ?</p><NavLink to="/register" className='Link'> Sign Up !</NavLink>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Login;