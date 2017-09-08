import PropTypes from 'prop-types'
import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import * as AppPropTypes from '../../../lib/propTypes'
import ProductCard from './ProductCard'

const propTypes = {
  domainData: AppPropTypes.domainData,
  history: PropTypes.object.isRequired
}

const ProductsList = ({domainData, history}) =>
  <div>
    <Link to='/products/add'>Add Product</Link>
    {
      domainData.products.length === 0
        ? <h2>No products found</h2>
        : domainData.products.map(p =>
          <ProductCard
            key={p._id}
            product={p}
            onDelete={() => domainData.deleteProduct(p._id)}
            onEdit={() => history.push(`/products/edit/${p._id}`)}
          />
        )
    }
  </div>

ProductsList.propTypes = propTypes

export default withRouter(ProductsList)
