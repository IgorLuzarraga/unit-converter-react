import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { madeUnitConversion, setFromUnitVal } from '../features/unitConversions/unitConversionSlice';

const inputStyle = {
    height: '22px',
    width: '261px',
    'border': 'none',
    'text-align': 'right',
    'font-size': '24px',
    'font-weight': '600',
    color: 'white',
    background: '#2E0039',
    outline: 'none'
}

const labelStyle = {
    color: 'white',
    'margin-left': '5px'
}

const InputUnit = () => {
    const dispatch = useDispatch()
    const fromUnitVal = useSelector((state) => state.unitConversion.fromUnitVal)
    const fromUnitType = useSelector((state) => state.unitConversion.fromUnitType)

    return(
        <>
            <input
                onChange={(e) => {
                        dispatch(setFromUnitVal(e.target.value))
                        dispatch(madeUnitConversion())
                    }
                }
                style={inputStyle}
                type="number"
                id="fromUnit-id"
                autoComplete="off"
                placeholder="0"
                value={fromUnitVal}
                autoFocus
            />
            <label 
                for="toUnit-id"
                style={labelStyle}
            >
                {fromUnitType}
            </label>
        </>
    )
}

export default InputUnit