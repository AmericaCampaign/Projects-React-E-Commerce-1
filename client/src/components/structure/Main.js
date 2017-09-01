import React from 'react'
import { Route, Switch } from 'react-router-dom'
import * as AppPropTypes from '../../lib/propTypes'
import Home from '../pages/Home'
import About from '../pages/About'
import Products from '../pages/Products'

const propTypes = {
  domainData: AppPropTypes.domainData
}

const styles = {
  main: {
    position: 'fixed',
    top: 50,
    left: 0,
    right: 0,
    bottom: 25,
    overflow: 'scroll'
  }
}

const Main = () =>
  <main style={styles.main}>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/about' component={About} />
      <Route path='/products' component={Products} />
    </Switch>
  </main>

Main.propTypes = propTypes

export default Main
