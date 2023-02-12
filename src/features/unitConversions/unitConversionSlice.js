import {createSlice} from '@reduxjs/toolkit'
import 
  { KMS_TO_MILES, 
    MILES_TO_KMS,
    METERS_TO_FEET,
    FEET_TO_METERS,
    CMS_TO_INCHES,
    INCHES_TO_CMS,
    KMS_UNIT_TYPE,
    MILES_UNIT_TYPE,
    METERS_UNIT_TYPE,
    FEET_UNIT_TYPE,
    CMS_UNIT_TYPE,
    INCHES_UNIT_TYPE
  } from './unitConversionTypes.js'
import { fromStrToUnitConversionType } from './unitConversionTypes.js'
import { unitConversionFactors as factors} from './unitConversionFactors.js'

const initialState = {
  unitConversionType: KMS_TO_MILES,
  fromUnitType: KMS_UNIT_TYPE,
  toUnitType: MILES_UNIT_TYPE,
  fromUnitVal: 0,
  toUnitVal: 0,
  savedConversions: [],
  lastUnitConversionId: 0
}

const unitConversionSlice = createSlice({
    name: 'unitConversion',
    initialState,
    reducers: {
      changeConversionType: (state, action) => {
        state.unitConversionType = 
          fromStrToUnitConversionType(action.payload)
      },
      madeUnitConversion: (state) => {
        state.toUnitVal = madeUnitConversionHelper(state)

         //---------------------------------
         // Update the labels of the input (num to made the conversion)
         // and ouput (show the result of the conversion)
         const { fromUnitType, toUnitType } = getFromAndToUnitType(state.unitConversionType)
         state.fromUnitType = fromUnitType
         state.toUnitType = toUnitType
         //----------------------------------
      },
      reverseConversion: (state) => {
        state.fromUnitVal = state.toUnitVal
        state.unitConversionType = reverseUnitConversionType(state.unitConversionType)
      },
      setFromUnitVal: (state, action) => {
        state.fromUnitVal = action.payload
      },
      saveConversion: (state) => {
        state.lastUnitConversionId++
        state.savedConversions.push(saveConversionHelper(state))
      },
      removeConversion: (state, action) => {
        state.savedConversions = 
          removeItem(state.savedConversions, action.payload)
      }
    }
  })

const removeItem = (arr, id) => 
  arr.filter(item => item.id !== id)

const getFromAndToUnitType = (unitConversionType) => {
  switch (unitConversionType) {
    case KMS_TO_MILES:
      return {fromUnitType: KMS_UNIT_TYPE, toUnitType: MILES_UNIT_TYPE}
    case MILES_TO_KMS:
      return {fromUnitType: MILES_UNIT_TYPE, toUnitType: KMS_UNIT_TYPE}
    case METERS_TO_FEET:
      return {fromUnitType: METERS_UNIT_TYPE, toUnitType: FEET_UNIT_TYPE}
    case FEET_TO_METERS:
      return {fromUnitType: FEET_UNIT_TYPE, toUnitType: METERS_UNIT_TYPE}
    case CMS_TO_INCHES:
      return {fromUnitType: CMS_UNIT_TYPE, toUnitType: INCHES_UNIT_TYPE}
    case INCHES_TO_CMS:
      return {fromUnitType: INCHES_UNIT_TYPE, toUnitType: CMS_UNIT_TYPE}
    default:
      return -1
  }
}
  
const saveConversionHelper = (state) => {
  switch (state.unitConversionType) {
    case KMS_TO_MILES:
      return ({
        conversionFromTo: `${state.fromUnitVal} kms -> ${state.toUnitVal} miles`,
        id: state.lastUnitConversionId
      })
    case MILES_TO_KMS:
      return ({
        conversionFromTo: `${state.fromUnitVal} miles -> ${state.toUnitVal} kms`,
        id: state.lastUnitConversionId
      })
    case METERS_TO_FEET:
      return ({
        conversionFromTo: `${state.fromUnitVal} meters -> ${state.toUnitVal} feet`,
        id: state.lastUnitConversionId
      })
    case FEET_TO_METERS:
      return ({
        conversionFromTo: `${state.fromUnitVal} feet -> ${state.toUnitVal} meters`,
        id: state.lastUnitConversionId
      })
    case CMS_TO_INCHES:
      return ({
        conversionFromTo: `${state.fromUnitVal} cms -> ${state.toUnitVal} inches`,
        id: state.lastUnitConversionId
      })
    case INCHES_TO_CMS:
      return ({
        conversionFromTo: `${state.fromUnitVal} inches -> ${state.toUnitVal} cms`,
        id: state.lastUnitConversionId
      })
    default:
      return -1
  }
}

const reverseUnitConversionType = (unitConversionType) => {
  switch (unitConversionType) {
    case KMS_TO_MILES:
      return MILES_TO_KMS
    case MILES_TO_KMS:
      return KMS_TO_MILES
    case METERS_TO_FEET:
      return FEET_TO_METERS
    case FEET_TO_METERS:
      return METERS_TO_FEET
    case CMS_TO_INCHES:
      return INCHES_TO_CMS
    case INCHES_TO_CMS:
      return CMS_TO_INCHES
    default:
      return -1
  }
}

const madeUnitConversionHelper = (state) => {
  switch (state.unitConversionType) {
    case KMS_TO_MILES:
      return madeConversion(state.fromUnitVal, factors.kmsToMiles)
    case MILES_TO_KMS:
      return madeConversion(state.fromUnitVal, factors.milesToKms)
    case METERS_TO_FEET:
      return madeConversion(state.fromUnitVal, factors.metersToFeet)
    case FEET_TO_METERS:
      return madeConversion(state.fromUnitVal, factors.feetToMeters)
    case CMS_TO_INCHES:
      return madeConversion(state.fromUnitVal, factors.cmsToInches)
    case INCHES_TO_CMS:
      return madeConversion(state.fromUnitVal, factors.inchesToCms)
    default:
      return -1
  }
}

const madeConversion = (unit, factor) =>
  (unit * factor).toFixed(2)


export default unitConversionSlice.reducer
export const {
  changeConversionType, 
  madeUnitConversion,
  removeConversion,
  reverseConversion,
  saveConversion,
  setFromUnitVal
} = unitConversionSlice.actions
