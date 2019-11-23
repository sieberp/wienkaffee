import React, { useContext } from "react"
import Img from "gatsby-image"
import { Link } from 'gatsby'
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
   :hover .hover-up {
    transition: all 0.6s;
    top: -150px;
    opacity: 1;
  }
`
const CartButton = styled.button`
  display: block;
  font-weight: lighter;
  color: #333;
  background-color: #fff;
  border: 0.5px solid #333;
  font-size: 0.7rem;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  opacity: 0;
  cursor: pointer;
  top: -100px;
  :hover {
    color: #fff;
    background-color: #333;
  }
`

const ProductLink = styled(Link)`
  display: block;
  font-weight: lighter;
  text-decoration: none;
  background-color: #fff;
  color: #333;
  border: 0.5px solid #333;
  font-size: 0.7rem;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  opacity: 0;
  padding: 0 20px;
  margin: 5px 0; 
  width: fit-content;
  cursor: pointer;
  top: -50px;
  :hover {
    color: #fff;
    background-color: #333;
  }
`

const Products = () => {
  const products = useContext(ProductsContext)
  const { add } = useContext(CartContext)
  return (
    <ShopGrid>
      {products.map(product => (
        <ProductCard key={product.node.id}>
          <Img sizes={product.node.picture.sizes}></Img>
          <h3>{product.node.name}</h3>
          <span>€ {product.node.price.toFixed(2).replace(/\./g, ',')}</span>
          <CartButton className='hover-up' onClick={() => add(product.node.id)}>
            Hinzufügen
          </CartButton>
          <ProductLink className='hover-up'>
            Mehr Info
          </ProductLink>
        </ProductCard>
      ))}
    </ShopGrid>
  )
}

export default Products
