import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import styled from "styled-components"

import Cart from "./cart"
import { CartContext } from "./cartProvider"

const NavLink = styled(Link)`
  color: #444;
  text-decoration: none;
  transition: transform 0.3s;
  :hover {
    color: #666;
    transform: scale(1.05);
  }
`

const CartButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  transition: transform 0.3s;
  :hover {
    color: #666;
    transform: scale(1.05);
  }
  :after {
    content: "${props => props.quantity}";
    margin-left: 3px;
    color: #eee;
    margin: 3px;
    border-radius: 50%;
    padding: 2px 4px 2px 4px;
    background: #555;
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
      <CartButton id="cart" onClick={() => toggle()} quantity={totalQuantity}>Cart</CartButton>
    </nav>
  )
}

export default Navbar
