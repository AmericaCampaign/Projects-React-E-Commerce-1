import React from 'react'
import {Route} from 'react-router-dom'
import * as AppPropTypes from '../../../lib/propTypes'
import ProductsList from './ProductsList'
import AddProductContainer from './AddProductContainer'

const propTypes = {
  domainData: AppPropTypes.domainData
}

const Products = ({domainData}) =>
  <div>
    <h1>Products</h1>

    <Route path='/products' exact render={() => <ProductsList domainData={domainData} />} />
    <Route path='/products/add' render={() => <AddProductContainer domainData={domainData} />} />
  </div>

Products.propTypes = propTypes

export default Products
