import PropTypes from 'prop-types'
import React from 'react'

const propTypes = {
  name: PropTypes.string.isRequired,
  onNameChanged: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  onCategoryChanged: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  onImageChanged: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired,
  onPriceChanged: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

const AddProductForm = (props) =>
  <form onSubmit={props.onSubmit}>
    <p>Name: <input type='text' value={props.name} onChange={props.onNameChanged} /></p>
    <p>Category: <input type='text' value={props.category} onChange={props.onCategoryChanged} /></p>
    <p>Image: <input type='text' value={props.image} onChange={props.onImageChanged} /></p>
    <p>Price: <input type='number' value={props.price} onChange={props.onPriceChanged} /></p>
    <input type='submit' value='Submit' />
  </form>

AddProductForm.propTypes = propTypes

export default AddProductForm
