import React from 'react'
import * as AppPropTypes from '../../../lib/propTypes'

const propTypes = {
  product: AppPropTypes.product
}

const ProductCard = ({product}) =>
  <div>
    <h1>{product.name}</h1>
    <p>{product.category}</p>
    <p><img src={product.image} alt={product.name} /></p>
    <p>{product.price}</p>
  </div>

ProductCard.propTypes = propTypes

export default ProductCard
