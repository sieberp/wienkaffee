import React, { useContext, useState } from "react"
import { injectStripe, CardElement } from "react-stripe-elements"
import styled from 'styled-components'
import { CartContext } from "../components/cartProvider"

const CheckoutForm = props => {
  const { pay } = useContext(CartContext)
  const [email, setEmail] = useState("")

  const handleChange = event => {
    setEmail(event.target.value)
  }
  const handleSubmit = event => {
    event.preventDefault()
    props.stripe.createToken({ type: "card" }).then(data => {
      const stripeData = { data, stripeEmail: email }
      pay(stripeData)
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input id="name" type="text" placeholder="Max Mustermann"></input>
      </label>
      <br />
      <label>
        E-mail:{" "}
        <input
          id="email"
          type="email"
          placeholder="your@email.com"
          onChange={handleChange}
        ></input>
      </label>
      <br />
      <label>
        Kreditkarte:
        <CardElement></CardElement>
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}

export default injectStripe(CheckoutForm)
