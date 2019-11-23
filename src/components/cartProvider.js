import React, { useState, useEffect, useContext } from "react"
import uuid from "uuid"
import { ProductsContext } from "./productsProvider"
import Axios from "axios"

export const CartContext = React.createContext(null)

const CartProvider = ({ children }) => {
  const [open, setOpen] = useState(false)
  const products = useContext(ProductsContext)

  const [contents, setContents] = useState(() => {
    let localCart
    try {
      localCart = JSON.parse(localStorage.getItem("cart"))
    } catch (err) {
      console.error(err.message)
    }
    if (!localCart || !Array.isArray(localCart)) return []
    return localCart
  })

  /** Save cart to local storage after load and on update */
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(contents))
    } catch (err) {
      console.error(err)
    }
  }, [contents])

  function set(id, quantity) {
    const index = contents.findIndex(item => item[0] === id)
    setContents(state => {
      const newState = [...state]
      if (index !== -1) {
        newState[index] = [id, quantity]
      } else {
        newState.push([id, quantity])
      }
      return newState
    })
  }

  const total = contents.reduce((sum, [id, quantity]) => {
    const currentProduct = products.find(product => product.node.id === id)
    return sum + currentProduct.node.price * quantity
  }, 0)

  const totalQuantity = contents.reduce((sum, [_, quantity]) => {
    return sum + quantity
  }, 0)

  /** Increments item with `id` by `quantity`, which defaults to 0 */
  function add(id, quantity = 1) {
    const currentItem = contents.find(item => item[0] === id)
    const currentQuantity = currentItem ? currentItem[1] : 0
    set(id, quantity + currentQuantity)
  }

  function toggle() {
    setOpen(!open)
  }

  function remove(id) {
    setContents(state => {
      return state.filter(item => item[0] !== id)
    })
  }

  async function pay(payload) {
    let response
    try {
      response = await Axios.post(
        "https://wienkaffee.netlify.com/.netlify/functions/index",
        {
          stripeEmail: payload.stripeEmail,
          stripeAmt: total * 100, //it expects the price in cents
          stripeToken: "tok_visa", //testing token, later we would use payload.data.token
          stripeIdempotency: uuid(),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then(res => console.log(res))
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <CartContext.Provider
      value={{ contents, add, toggle, open, total, pay, remove, totalQuantity }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
