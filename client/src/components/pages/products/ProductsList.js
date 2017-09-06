import React from 'react'
import * as AppPropTypes from '../../../lib/propTypes'
import ProductCard from './ProductCard'

const propTypes = {
  domainData: AppPropTypes.domainData
}

const ProductsList = ({domainData}) =>
  <div>
    {
      domainData.products.length === 0
        ? <h2>No products found</h2>
        : domainData.products.map(p => <ProductCard product={p} />)
    }
  </div>

ProductsList.propTypes = propTypes

export default ProductsList
