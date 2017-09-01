import React from 'react'
import * as AppPropTypes from '../../lib/propTypes'

const propTypes = {
  domainData: AppPropTypes.domainData
}

const Layout = (props) => (
  <div>
    <h1>Hello World</h1>

    <h2>Number of products: {props.domainData.products.length}</h2>
  </div>
)

Layout.propTypes = propTypes

export default Layout
