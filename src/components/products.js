import React, { useContext } from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import { ProductsContext } from "./productsProvider"
import { CartContext } from "./cartProvider"

const ShopGrid = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

const ProductCard = styled.div`
  margin: 20px 40px;
  padding: 10px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-kerning: 1px;
  font-weight: lighter;
  h3 {
    text-align: center;
    font-size: 1.2rem;
    font-weight: normal;
    margin-top: 10px;
    margin-bottom: 0.2rem;
  }
  p {
    margin-bottom: 0.5rem;
    text-align: center;
    font-weight: lighter;
  }
  .price {
    :before {
      content: "€";
      margin-right: 1.5px;
    }
  }
  :hover {
    cursor: pointer;
    color: darkred;
  }
`

const Products = () => {
  const products = useContext(ProductsContext)
  const { add } = useContext(CartContext)
  console.log(add)
  return (
    <ShopGrid>
      {products.map(product => (
        <ProductCard key={product.node.id}>
          {console.log(product.node.picture)}
          <Img sizes={product.node.picture.sizes}></Img>
          <h3>{product.node.name}</h3>
          <h3>{product.node.price}</h3>
          <button onClick={() => add(product.node.id)}>Add to cart</button>
        </ProductCard>
      ))}
    </ShopGrid>
  )
}

export default Products
