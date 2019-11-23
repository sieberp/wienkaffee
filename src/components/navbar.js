import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import styled from "styled-components"

import Cart from "./cart"
import { CartContext } from "./cartProvider"

const NavLink = styled(Link)`
  color: #444;
  text-decoration: none;
`

const CartButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  :after {
    content: "${props => props.quantity}";
    color: #eee;
    vertical-align: super;
    font-size: 70%;
    margin: 2px;
    border-radius: 50%;
    padding: 2px 4px 2px 4px;
    background: #76b6bc;
  }
`

const Navbar = () => {
  const { toggle, totalQuantity } = useContext(CartContext)
  return (
    <nav
      style={{
        display: `grid`,
        gridTemplateColumns: `1fr 1fr 1fr 1fr`,
        margin: `1rem`,
        padding: `0.4rem`,
        borderBottom: `1px dashed #444`,
        borderTop: `1px solid #444 `,
      }}
    >
      <NavLink to="/shop">Kaffees</NavLink>
      <NavLink to="/about">Wofür wir stehen</NavLink>
      <NavLink to="/guides">Brew Guides</NavLink>
      <CartButton onClick={() => toggle()} quantity={totalQuantity}>Cart</CartButton>
    </nav>
  )
}

export default Navbar
