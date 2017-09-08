import PropTypes from 'prop-types'
import React from 'react'
import * as AppPropTypes from '../../../lib/propTypes'

const propTypes = {
  product: AppPropTypes.product,
  onNameChanged: PropTypes.func.isRequired,
  onCategoryChanged: PropTypes.func.isRequired,
  onImageChanged: PropTypes.func.isRequired,
  onPriceChanged: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
}

const EditProductForm = ({
  product,
  onNameChanged,
  onCategoryChanged,
  onImageChanged,
  onPriceChanged,
  onSubmit,
  onCancel
}) =>
  <form onSubmit={onSubmit}>
    <p>Name: <input type='text' value={product.name} onChange={onNameChanged} /></p>
    <p>Category: <input type='text' value={product.category} onChange={onCategoryChanged} /></p>
    <p>Image: <input type='text' value={product.image} onChange={onImageChanged} /></p>
    <p>Price: <input type='text' value={product.price} onChange={onPriceChanged} /></p>
    <p>
      <input
        type='submit'
        value='Save Product'
        disabled={!product.name || !product.category || !product.image || product.price <= 0}
      />
      <button
        type='button'
        onClick={onCancel}
      >
        Cancel
      </button>
    </p>
  </form>

EditProductForm.propTypes = propTypes

export default EditProductForm
