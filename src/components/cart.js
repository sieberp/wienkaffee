import React, { useContext } from "react"
import styled from "styled-components"

import { CartContext } from "./cartProvider"
import { ProductsContext } from "./productsProvider"
import { Link } from "gatsby"
import Img from "gatsby-image"

const StyledCart = styled.div`
  position: absolute;
  width: 350px;
  height: 100vh;
  top: 0px;
  z-index: 2;
  background-color: white;
  transition: all 0.5s;
  box-shadow: 4px 4px 4px 4px #333;
`

const CartTitle = styled.h2`
  margin: 0 20px;
  padding: 30px 0 25px 0;
  border-bottom: 1px dotted #333;
  font-family: Alegreya, serif;
  font-weight: lighter;
  .arrow {
    float: right;
    margin-right: 10px;
    transition: all 0.3s;
    cursor: pointer;
  }
  .arrow:hover {
    transform: translateX(10px);
  }
`

const CartItem = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr 10px;
  border-bottom: 1px solid #555;
  margin: 20px 25px 0 25px;
  padding-bottom: 20px;
  .info {
    margin: 10px;
    text-align: left;
    h3 {
      font-family: Alegreya, serif;
      font-weight: 600;
      font-size: 0.8rem;
      display: inline;
      text-align: right;
    }
    .price {
      display: block;
      font-size: 0.7rem;
    }
    .quantity {
      display: block;
      font-size: 0.7rem;
    }
  }

  .delete {
    margin-top: 5px;
    transition: transform 0.3s;
    cursor: pointer;
    font-family: Roboto, sans-serif;
  }
  .delete:hover {
    color: darkred;
  }
`

const ProductThumbnail = styled(Img)`
  display: block;
  max-width: 80px;
`

const TotalPrice = styled.h2`
  margin: 20px 25px;
  font-family: Algeyra, serif;
  font-weight: lighter;
  font-size: 1.2rem;
  text-align: left;
  .total {
    float: right;
  }
`

const CheckoutLink = styled(Link)`
  display: block;
  padding: 10px;
  font-weight: lighter;
  text-decoration: none;
  color: #333;
  border: 0.5px solid #333;
  border-radius: 5px;
  width: 60%;
  position: relative;
  left: 20%;
  margin: 30px 0px;
  transition: all 0.6s;
  :hover {
    color: #fff;
    background: #666;
    transform: scale(1.05);
  }
`

const Cart = () => {
  const { contents, open, toggle, total, remove } = useContext(CartContext)
  const products = useContext(ProductsContext)
  return (
    <StyledCart
      style={{
        right: open ? "0px" : "-350px",
      }}
    >
      <CartTitle onClick={() => toggle()}>
        Einkaufswagen <span className="arrow">→</span>
      </CartTitle>
      {contents.map(content => {
        const currentProduct = products.find(
          product => product.node.id === content[0]
        )
        return (
          <CartItem key={currentProduct.node.id}>
            <ProductThumbnail
              sizes={currentProduct.node.picture.sizes}
            ></ProductThumbnail>
            <div className="info">
              <h3>{currentProduct.node.name}</h3>
              <span className="price">
                Preis: {content[1] * currentProduct.node.price}€
              </span>

              <span className="quantity">Anzahl: {content[1]}</span>
            </div>
            <span
              className="delete"
              onClick={() => remove(currentProduct.node.id)}
            >
              x
            </span>
          </CartItem>
        )
      })}
      <TotalPrice>
        Gesamtpreis: <span className="total">{total}€</span>
      </TotalPrice>
      <CheckoutLink to="/checkout">Go to checkout</CheckoutLink>
    </StyledCart>
  )
}

export default Cart
