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
  text-align: center;
  margin: 20px 40px;
  padding: 10px;
  font-family: Algreya, serif;
  font-kerning: 1px;
  font-weight: lighter;
  overflow: hidden;
  h3 {
    text-align: center;
    font-size: 1rem;
    font-family: Algreya, serif;
    font-weight: normal;
    margin-top: 10px;
    margin-bottom: 0.2rem;
  }
  p {
    margin-bottom: 0.5rem;
    font-family: Algreya, serif;
    text-align: center;
    font-weight: lighter;
  }
  .price {
    position: relative;
    top: -100px;
    opacity: 0;
    :before {
      content: "€";
      margin-right: 1.5px;
    }
  }
  :hover button,
  :hover .price {
    transition: all 0.4s;
    top: -150px;
    opacity: 1;
  }
`
const CartButton = styled.button`
  display: block;
  font-weight: lighter;
  color: #333;
  border: 0.5px solid #333;
  border-radius: 5px;
  font-size: 0.7rem;
  position: relative;
  left: 35%;
  opacity: 0;
  cursor: pointer;
  top: -100px;
  :hover {
    color: #333;
    background-color: #fff;
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
          <Img sizes={product.node.picture.sizes}></Img>
          <h3>{product.node.name}</h3>
          <CartButton onClick={() => add(product.node.id)}>
            Hinzufügen
          </CartButton>
          <span className="price">{product.node.price}</span>
        </ProductCard>
      ))}
    </ShopGrid>
  )
}

export default Products
