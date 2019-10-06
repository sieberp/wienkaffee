import React from "react"

const Context = React.createContext()

const reducer = (state, action) => {
  switch (action.type) {
    // case "DELETE_PRODUCT":
    //   return {
    //     ...state,
    //     cart: state.cart.filter(contact => product.id !== action.payload),
    //   }
    case "ADD_PRODUCT":
      return {
        ...state,
        cart: [action.payload, ...state.cart],
      }
    default:
      return state
  }
}

export class Provider extends React.Component {
  state = {
    cart: [],
    dispatch: action => this.setState(state => reducer(state, action)),
  }

  // async componentDidMount() {

  //   this.setState({ contacts: res.data })
  // }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default Context
