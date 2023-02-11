import {configureStore} from '@reduxjs/toolkit'
import unitConversionReducer from '../features/unitConversions/unitConversionSlice.js'

const store = configureStore({
    reducer: {
        unitConversion: unitConversionReducer
    }
})

export default store



