import React, { Component } from 'react';
import './Search-apartment.css';

class SearchApartment extends Component {

  constructor(){
    super();
    this.state = {
      searchQuery: {}
    }
  }

  static defaultProps = {
    options: [true, false]
  }
  handleSubmit(e){
    console.log(this.refs);
    e.preventDefault();
    this.props.handleSearchProps(this.refs)

  }

  render() {
    // let availablilty = this.props.options.map(av => {
    //   console.log('lol', av)
    //   return <option key={av} value={av} >{av?'True': 'False'}</option>
    // });


    return (
     <div className="Searchapartments c-searchform">
        <h5>
          find exclusive offers quickly....
        </h5>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref="location" placeholder="Location" />
          <input type="text" ref="propertyType" placeholder="Property Type" />
          <input type="text" ref="budget" placeholder="Budget" />
          
          <input type="submit" value="Search" />
        </form>
        
     </div>
    );
  }
}

export default SearchApartment;