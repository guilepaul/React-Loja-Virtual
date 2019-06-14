import React, { Component } from 'react'
import HeaderInterno from './HeaderInterno'
import { Link, Route } from 'react-router-dom'
import Categoria from './Categoria'
import Anuncio from './Anuncio'

class Categorias extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <HeaderInterno />
                <div className='container' style={{ paddingTop: '120px' }}>
                    <h1>Categorias</h1>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <ul>
                                {
                                    this.props.categorias.map(
                                        cat => {
                                            return (
                                                <li key={cat.url}><Link to={'/categorias/' + cat.url}> {cat.categoria}</Link></li>
                                            )
                                        }
                                    )
                                }
                            </ul>
                        </div>
                        <div className='col-lg-8'>
                            <Route exact path='/categorias/:urlCategoria' component={Categoria}></Route>
                            <Route path='/categorias/:urlCategoria/:idAnuncio' render={(props) => <Anuncio {...props} />}></Route>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Categorias