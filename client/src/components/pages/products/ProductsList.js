import React from 'react'
import {Link} from 'react-router-dom'
import * as AppPropTypes from '../../../lib/propTypes'
import ProductCard from './ProductCard'

const propTypes = {
  domainData: AppPropTypes.domainData
}

const ProductsList = ({domainData}) =>
  <div>
    <Link to='/products/add'>Add Product</Link>
    {
      domainData.products.length === 0
        ? <h2>No products found</h2>
        : domainData.products.map(p => <ProductCard key={p._id} product={p} />)
    }
  </div>

ProductsList.propTypes = propTypes

export default ProductsList
