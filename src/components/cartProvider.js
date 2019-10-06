import React, { useState, useEffect } from "react"

export const CartContext = React.createContext(null)

const CartProvider = ({ children }) => {
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

  /** Increments item with `id` by `quantity`, which defaults to 0 */
  function add(id, quantity = 1) {
    const currentItem = contents.find(item => item[0] === id)
    const currentQuantity = currentItem ? currentItem[1] : 0
    set(id, quantity + currentQuantity)
  }

  return (
    <CartContext.Provider value={{ contents, add }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
