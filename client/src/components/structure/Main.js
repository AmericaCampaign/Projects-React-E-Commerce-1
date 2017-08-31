import React from 'react'
import {Route} from 'react-router-dom'
import * as AppPropTypes from '../../lib/propTypes'
import About from '../pages/About'
import Home from '../pages/Home'
import Products from '../pages/Products'

const propTypes = {
  domainData: AppPropTypes.domainData
}

const Main = (props) =>
  <main>
    <h1>Main</h1>

    <Route path='/' exact component={Home} />
    <Route path='/about' component={About} />
    <Route path='/products' render={() => <Products domainData={props.domainData} />} />
  </main>

Main.propTypes = propTypes

export default Main
