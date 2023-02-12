import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {changeConversionType, madeUnitConversion} from '../features/unitConversions/unitConversionSlice.js'
import { fromUnitConversionTypeToStr } from '../features/unitConversions/unitConversionTypes.js';

const componentStyle = {
    height: '32px',
    width: '300px',
    'border': '0px',
    'font-family': 'Poppins',
    'font-size': '24px',
    'font-weight': '400',
    'line-height': '21px',
    'letter-spacing': '0em',
    'text-align': 'left',
    color: 'white',
    background: '#2E0039',
    'padding-left': '10px',
    cursor: 'pointer'
}

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
            style={componentStyle}
            name="unitsConvSelector" 
            id="unitsConvSelector" 
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