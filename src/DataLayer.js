import { useContext, createContext, useReducer } from 'react'
import React from 'react'

const DataLayerProvider = createContext()

const DataLayer = ({ children, initialState, reducer }) => {
  return (
    <DataLayerProvider.Provider value={useReducer(reducer, initialState)}>
      {children}
    </DataLayerProvider.Provider>
  )
}

export default DataLayer
export const useDataLayerValues = () => useContext(DataLayerProvider)
