import React, { useContext } from "react"
import styled from "styled-components"

import { CartContext } from "./cartProvider"
import { ProductsContext } from "./productsProvider"
import { Link } from "gatsby"

const Cart = () => {
  const { contents, open, toggle, total } = useContext(CartContext)
  const products = useContext(ProductsContext)
  return (
    <div
      style={{
        position: "absolute",
        width: "300px",
        height: "100vh",
        top: "0px",
        right: open ? "0px" : "-300px",
        zIndex: 2,
        backgroundColor: "white",
        transition: "all 0.5s ",
        boxShadow: "4px 4px 4px 4px #333",
      }}
    >
      <h1 onClick={() => toggle()}>Cart</h1>
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
      <span>Total: {total}</span>
      <Link to="/checkout">Go to checkout</Link>
    </div>
  )
}

export default Cart
