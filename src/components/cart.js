import React, { useContext } from "react"
import { CartContext } from "./cartProvider"
import { ProductsContext } from "./productsProvider"

const Cart = () => {
  const { contents } = useContext(CartContext)
  const products = useContext(ProductsContext)
  console.log(products)
  return (
    <React.Fragment>
      <h1>Cart</h1>
      {contents.map(content => {
        const currentProduct = products.find(
          product => product.node.id === content[0]
        )
        return (
          <div key={currentProduct.node.id}>
            <h3>{currentProduct.node.name}</h3>
            <h4>{content[1]}</h4>
          </div>
        )
      })}
    </React.Fragment>
  )
}

export default Cart
