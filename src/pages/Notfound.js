import React, { Component } from 'react';
// import $ from "jquery";

import './Pages.css'
import NavLink from 'react-router-dom/NavLink';

class Notfound extends Component {

 
  render() {
    return (
      <div className="Notfound com-page">
        <div>
            Page does not exist go <NavLink to="/"> Home</NavLink>
        </div>
      </div>
    );
  }
}

export default Notfound;