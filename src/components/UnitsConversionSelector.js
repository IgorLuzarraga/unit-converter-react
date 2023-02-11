import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {changeConversionType, madeUnitConversion} from '../features/unitConversions/unitConversionSlice.js'
import { fromUnitConversionTypeToStr } from '../features/unitConversions/unitConversionTypes.js';

const UnitsConversionSelector = ({options}) => {
    const dispatch = useDispatch()
    const unitConversionType = useSelector((state) => state.unitConversion.unitConversionType)
    const fromUnitToUnit = fromUnitConversionTypeToStr(unitConversionType)
    
    return (
        <select 
            onChange={(e) => 
                {
                    dispatch(changeConversionType(e.target.value))
                    dispatch(madeUnitConversion())
                }
            } 
           
            name="units-1" 
            className="units" 
            id="units-1" 
            value={fromUnitToUnit}
        >
            {renderOptions(options)}
        </select>
    )
}

const renderOptions = (options) => 
    options.map(option => renderOption(option))

const renderOption = (option) => 
    <option value={option} data-unit={option} key={option}>
        {option}
    </option>

export default UnitsConversionSelector;