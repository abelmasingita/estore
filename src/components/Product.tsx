import React from 'react'
import ProductProps from '../interfaces/Product'
import './Product.css'

const Product: React.FC<ProductProps> = ({ name }) => {
  return <div>{name}</div>
}

export default Product
