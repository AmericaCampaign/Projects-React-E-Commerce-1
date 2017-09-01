import React from 'react'
import {domainData} from '../../../lib/propTypes'
import ButtonLink from '../../presentation/ButtonLink'
import ProductCard from './ProductCard'

const propTypes = {
  domainData
}

const ProductsList = (props) =>
  <div>
    <ButtonLink to='/products/add' primary>Add Product</ButtonLink>
    {
      props.domainData.products.map((p) =>
        <ProductCard
          product={p}
          onDelete={() => props.domainData.deleteProduct(p._id)}
          key={p._id} />)
    }
  </div>

ProductsList.propTypes = propTypes

export default ProductsList
