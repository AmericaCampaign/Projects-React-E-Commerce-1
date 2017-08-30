import React from 'react'
import {Route} from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home'

const Main = (props) =>
  <main>
    <h1>Main</h1>

    <Route path='/' exact component={Home} />
    <Route path='/about' component={About} />
  </main>

export default Main
