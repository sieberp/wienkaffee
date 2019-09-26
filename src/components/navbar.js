import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const NavLink = styled(Link)`
  color: #444;
  text-decoration: none;
`

const Navbar = () => (
  <nav
    style={{
      display: `grid`,
      gridTemplateColumns: `1fr 1fr 1fr`,
      margin: `1rem`,
      padding: `0.4rem`,
      borderBottom: `1px dashed #444`,
      borderTop: `1px solid #444 `,
    }}
  >
    <NavLink to="/shop">Kaffees</NavLink>
    <NavLink to="/about">Wofür wir stehen</NavLink>
    <NavLink to="/guides">Brew Guides</NavLink>
  </nav>
)

export default Navbar
