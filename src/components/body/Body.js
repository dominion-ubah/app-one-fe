import React, { Component } from 'react';
import Apartment from '../apartment/Apartment';
import './Body.css'

class Body extends Component {
  handleDelete(id) {
    this.props.handleDelete(id)
  }

  render() {
      let apartment;
      
      if (this.props.apartments) {
        apartment = this.props.apartments.apartment
        .map(apartment => {
          return (<div key={apartment._id}  className="col-xs-12 col-sm-6 col-md-4 col-lg-3 c-card "><Apartment key={apartment._id}  deleteNinja ={this.handleDelete.bind(this)} apartment = {apartment}  /></div>)
        });
      }
    return (
      <div className="Body">
        <div className="c-body">
          <div className="container px-0 mx-0">
            <div className="row no-gutter">
              {apartment}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;