import React, { Component } from 'react';

class Apartment extends Component {
deleteNinja(id){
  console.log('to delete', id);
  this.props.deleteNinja(id);
}

  render() {

    return (
      <div className="apartment-card">
        <div className="img" style={{background: "url("+this.props.apartment.imgpath+") no-repeat", backgroundSize: "cover", height:16+'em'}}>
            <div className="card-details">
              <span className="Cta">+</span>
              <p className="title">
                {this.props.apartment.title}
              </p>
              <p>
                {(this.props.apartment.rent)? 'Rent':'Sale'}
              </p>
              <p>
                Location: {this.props.apartment.location} <a onClick={this.deleteNinja.bind(this, this.props.apartment.id)}>x</a><br />
                Property: {this.props.apartment.propertyType}
              </p>
              <p className="sub-details">
                
                Toilet: {this.props.apartment.toiletDetails} &nbsp;&nbsp;
                Rooms: {this.props.apartment.noOfRooms} &nbsp;&nbsp;
                {/* Price: $ {this.props.apartment.budget}&nbsp;&nbsp; */}
                Parking: {this.props.apartment.budget} cars 
              </p>
            </div>
        </div>
        
      </div>
    );
  }
}

export default Apartment;