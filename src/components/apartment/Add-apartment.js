import React, { Component } from 'react';
import './Search-apartment.css';

class Addapartment extends Component {

  constructor(){
    super();
    this.state = {
      ninja: {}
    }
  }

  static defaultProps = {
    options: [true, false]
  }
  handleSubmit(e){
    console.log(this.refs);
    this.setState({
      // nuNinja : {
      //   id: parseInt(Math.random()),
      //   name: this.refs.name.value,
      //   belt: this.refs.belt.value,
      //   availability: (this.refs.availability.value === 'true')? true:false
      //   // {/* <select ref="availability"> 
      //   //             {availablilty}
      //   //           </select> */}
      // }
    }, ()=> {
      // console.log(this.state);
      this.props.newNinja(this.state.nuNinja);
    })
    // console.log('add ninja state', this.state)

    e.preventDefault();
  }

  render() {
    // let availablilty = this.props.options.map(av => {
    //   console.log('lol', av)
    //   return <option key={av} value={av} >{av?'True': 'False'}</option>
    // });


    return (
     <div className="c-searchform">
        <h5>
          find exclusive offers quickly....
        </h5>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref="name" placeholder="Location" />
          <input type="text" ref="belt" placeholder="Property Type" />
          <input type="text" ref="belt" placeholder="Budget" />
          
          <input type="submit" />
        </form>
     </div>
    );
  }
}

export default Addapartment;