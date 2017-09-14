const ajaxRequest = (url, method, body) => {
  const headers = new Headers({
    'Content-Type': 'application/json'
  })

  const options = {
    body: JSON.stringify(body),
    headers: headers,
    method: method
  }

  return fetch(url, options)
    .then(response => response.json())
    .then(json => json.data)
}

export const getAllProducts = () => ajaxRequest('/api/products', 'GET')

export const addProduct = (newProduct) => ajaxRequest('/api/products', 'POST', newProduct)

export const updateProduct = (product) => ajaxRequest(`/api/products/${product._id}`, 'PUT', product)

export const deleteProduct = (productId) => ajaxRequest(`/api/products/${productId}`, 'DELETE')
