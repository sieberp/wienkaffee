import React, { useContext } from "react"
// import { Link } from "gatsby"
import { Elements } from "react-stripe-elements"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CheckoutForm from "../components/checkoutForm"

const Checkout = () => {
  return (
    <Layout>
      <p>Hello from the checkout page</p>
      <Elements>
        <CheckoutForm></CheckoutForm>
      </Elements>
    </Layout>
  )
}

export default Checkout
