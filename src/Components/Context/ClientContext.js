import React from 'react'

export const ClientContext = React.createContext()
export const ClientStorage = ({children}) => {
    let widthClient = window.screen.width
  return (
    <ClientContext.Provider value=''>
        {children}
    </ClientContext.Provider>
  )
}
