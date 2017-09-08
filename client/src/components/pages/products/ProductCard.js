import PropTypes from 'prop-types'
import React from 'react'
import * as AppPropTypes from '../../../lib/propTypes'

const propTypes = {
  product: AppPropTypes.product,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired
}

const styles = {
  div: {

  }
}

const ProductCard = ({product, onDelete, onEdit}) =>
  <div style={styles.div}>
    <h1>{product.name}</h1>
    <p>{product.category}</p>
    <p><img src={product.image} alt={product.name} /></p>
    <p>{product.price}</p>
    <p>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </p>
  </div>

ProductCard.propTypes = propTypes

export default ProductCard
