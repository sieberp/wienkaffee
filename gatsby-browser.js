/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import { StripeProvider } from "react-stripe-elements"
import CartContext from './src/components/cartProvider'

export const wrapRootElement = ({ element }) => (
  <StripeProvider apiKey="pk_test_kJ40rb7Wi7dypdKylrlSlveH00ospR5Eb6">
    <CartContext>
      {element}
    </CartContext>
  </StripeProvider>
)
