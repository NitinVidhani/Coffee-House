import React, { createContext, useState } from 'react'

export const StateContext = createContext()

export const StateProvider = ({children}) => {
  const [cart, setCart] = useState({
    products: [],
    totalPrice: 0,
  })
  return (
    <StateContext.Provider value={{cart, setCart}}>
      {children}
    </StateContext.Provider>
  )
}
