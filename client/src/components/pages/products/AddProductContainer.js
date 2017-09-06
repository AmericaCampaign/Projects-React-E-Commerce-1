import React, {Component} from 'react'
import * as AppPropTypes from '../../../lib/propTypes'
import AddProductForm from './AddProductForm'

class AddProductContainer extends Component {
  static propTypes = {
    domainData: AppPropTypes.domainData
  }

  state = {
    name: '',
    category: '',
    image: '',
    price: '0'
  }

  onNameChanged = (event) => this.setState({name: event.target.value})

  onCategoryChanged = (event) => this.setState({category: event.target.value})

  onImageChanged = (event) => this.setState({image: event.target.value})

  onPriceChanged = (event) => {
    const price = event.target.value.replace(/^0+/, '').replace(/^\./, '0.') || '0'
    const isNumberValid = /^\d*\.?\d{0,2}?$/.test(price)
    if (isNumberValid) {
      this.setState({price})
    }
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.domainData.addProduct(this.state) // save to the db
    // change the url back to the products list
  }

  render () {
    return <AddProductForm
      name={this.state.name}
      onNameChanged={this.onNameChanged}
      category={this.state.category}
      onCategoryChanged={this.onCategoryChanged}
      image={this.state.image}
      onImageChanged={this.onImageChanged}
      price={this.state.price}
      onPriceChanged={this.onPriceChanged}
      onSubmit={this.onSubmit}
    />
  }
}

export default AddProductContainer
