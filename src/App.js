import React, { Component } from 'react'
import base from './base'
import Home from './Home'
import NovoAnuncio from './NovoAnuncio'
import Categorias from './Categorias'
import Footer from './Footer'

import {BrowserRouter as Router, Route} from 'react-router-dom'


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      categorias: []
    }
    base.bindToState('categorias', {
      context: this,
      state: 'categorias'
    })
  }
  render(){
    return (
      <Router>
        <div className="App">
          <Route exact path='/' render={() => <Home categorias={this.state.categorias} />} />
          <Route path='/novo-anuncio' render={() => <NovoAnuncio categorias={this.state.categorias} />} />
          <Route path='/categorias' render={() => <Categorias categorias={this.state.categorias} />} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
