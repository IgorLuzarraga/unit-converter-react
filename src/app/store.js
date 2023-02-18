import {configureStore} from '@reduxjs/toolkit'
import unitConversionReducer from '../features/unitConversions/unitConversionSlice.js'
import {loadState, saveState} from './localStorage'
import { initialState } from "../features/unitConversions/unitConversionSlice";

const getInitialData = (initialState) => {
    const initialData = loadState()
    if (initialData === null) {
      return initialState
    } else {
      return initialData
    }
  }
  
  const initialData = getInitialData(initialState)
  
  const store =  configureStore({
    reducer: {
        unitConversion: unitConversionReducer
    },
    preloadedState: initialData
  })
  
  store.subscribe( function () {
    saveState(store.getState())
  })
  
export default store  

