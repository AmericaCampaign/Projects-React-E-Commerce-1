import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import * as AppPropTypes from '../../../lib/propTypes'
import EditProductForm from './EditProductForm'

class EditProductContainer extends Component {
  static propTypes = {
    domainData: AppPropTypes.domainData,
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
  }

  constructor (props) {
    super()
    const productId = props.match.params.productId
    const product = props.domainData.products.find(p => p._id === productId)

    this.state = product
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
    this.props.domainData.updateProduct(this.state)
    this.props.history.push('/products')
  }

  onCancel = () => this.props.history.push('/products')

  render () {
    return <EditProductForm
      product={this.state}
      onNameChanged={this.onNameChanged}
      onCategoryChanged={this.onCategoryChanged}
      onImageChanged={this.onImageChanged}
      onPriceChanged={this.onPriceChanged}
      onSubmit={this.onSubmit}
      onCancel={this.onCancel}
    />
  }
}

export default withRouter(EditProductContainer)
