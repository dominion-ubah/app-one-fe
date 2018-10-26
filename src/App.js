import React, { Component } from 'react';

import Home from './pages/Home';
import Register from './components/auth/Register';
import Notfound from './pages/Notfound';

import {BrowserRouter, Route, Switch } from 'react-router-dom'
import {CSSTransition, TransitionGroup } from 'react-transition-group'

import $ from "jquery";
import './App.css';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
// import { error } from 'util';

class App extends Component {

  constructor() {
    super();
    this.state = {}
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

  componentWillMount() {}

      componentDidMount () {
        this.getApi();
      }
        

  render() {
    return (
      <BrowserRouter>

      <div>
      <Header />
        <Route render= {({location}) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={300}
              classNames="fade"
            >
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route path="/register" component={Register} />
                <Route component={Notfound} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
        

        
        <Footer />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;

