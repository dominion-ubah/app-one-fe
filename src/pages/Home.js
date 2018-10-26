import React, { Component, 
  // Fragment
 } from 'react';
// import { render } from 'react-dom';
import $ from "jquery";

import Body from '../components/body/Body';
import SearchApartment from '../components/apartment/Search-apartment';
// import Footer from '../components/shared/Footer';
// import Header from '../components/shared/Header';

import './Pages.css'

class Home extends Component {

  constructor() {
    super();
    this.state = {
      error:false,
      hasMore:true,
      isLoading:false,
      // apartments: []
    }

    // Binds our scroll event handler
    window.onscroll = () => {
      const {
        // loadUsers,
        state: {
          error,
          isLoading,
          hasMore,
        },
      } = this;

      // Bails early if:
      // * there's an error
      // * it's already loading
      // * there's nothing left to load
      if (error || isLoading || !hasMore) return;

      // Checks that the page has scrolled to the bottom
      if (
        window.innerHeight + document.documentElement.scrollTop
        === document.documentElement.offsetHeight
      ) {
        // loadUsers();
        console.log('bottom')
        
      }
    };
  }

  handleAddSearch(ninja) {
    console.log('stuffs', ninja)
    let ninjas = this.state.ninjas;
    ninjas.push(ninja);
    this.setState({ninjas:ninjas})
  }

  handleApartmentSearch(queryInput) {
    console.log('stuffs', queryInput)
    // this.setState({apartments: newApartmentlist})


    let searchQuery = {
      location: queryInput.location.value,
      propertyType: queryInput.propertyType.value,
      budget: queryInput.budget.value 
  }
  
  $.ajax({
      method:'GET',
      url: 'http://localhost:2500/api/apartments?location='+searchQuery.location+'&propertyType='+ searchQuery.propertyType +'&budget='+searchQuery.budget,
      dataType: 'json',
      success: (res) => {
          console.log('ajax search:', res);
          
          this.setState({apartments:res}, ()=> {
            console.log('after set state', this.state.apartments)
          })
      }
  })

  console.log('lol',this.state, searchQuery, this.props);
  }

  handleDeleteNinja(id) {
    console.log('app', id)
    let spliceN = this.state.ninjas
    let index = spliceN.findIndex(e => e.id === id);
    console.log('aa', index)
    spliceN.splice(index, 1)
    this.setState({
      ninjas:spliceN
    }, () =>{
      console.log(this.state.ninjas)
    })
  }

  getApi(){
    $.ajax ({

      url: 'http://localhost:2500/api/apartments',
      dataType:'json',
      success: (res)=> {
        this.setState({apartments: res}, ()=> {
        })
      },
      error: (err) => {
        console.error(err)
      }
    })

    // fetch('http://localhost:2500/api')
    // .then(res => {
    //   console.log('res',res.body)
    // })

    // .catch(error => console.error('the error',error))
  }

  componentWillMount () {
    // Loads some users on initial load
    // this.loadUsers();
  }

  componentDidMount () {
    this.getApi();
  }

  

  render() {
    // console.log("stuffs:", this.props.apartment)
    return (
      <div className="Home">
         
        <div className="c-jumbotron">
              <div className="blur">
                  <div className="c-content d-none d-xs-none d-sm-block d-md-block d-lg-block">
                    <div>
                      <p className="main">
                        Get an apartment with your budget
                      </p>

                    <div>
                    <SearchApartment handleSearchProps={this.handleApartmentSearch.bind(this)} />
                    </div>
                    </div>
                  </div>
                  <div className="c-content-mobi d-xs-block d-sm-none d-md-none d-lg-none">
                    <div>
                      <p className="main-mobi">
                        Get an apartment with your budget
                      </p>

                    <div>
                    <SearchApartment searchApartment = {this.handleApartmentSearch.bind(this)} />
                    </div>
                    </div>
                  </div>
              </div>
            </div>
        <Body handleDelete = {this.handleDeleteNinja.bind(this)} apartments = {this.state.apartments} />
       
      </div>
    );
  }
}

export default Home;