import React, { Component } from 'react';
import {Header, Footer, Body} from './layouts'
import Logic from './logic'

class App extends Component{
  render() {
    return (
      <main>
        <Header/>
        <Logic/>
        <Footer/>
      </main>


    )
  }
}


export default App;
