import React from 'react';
import {useSelector} from 'react-redux'

const inputStyle = {
    height: '22px',
    width: '261px',
    'text-align': 'right',
    'font-size': '24px',
    'font-weight': '600',
    color: 'white',
    background: '#2E0039',
    border: 'none',
    outline: 'none'
}

const labelStyle = {
    color: 'white',
    'margin-left': '5px'
}

const OutputUnit = () => {
    const toUnitVal = useSelector((state) => state.unitConversion.toUnitVal)
    const toUnitType = useSelector((state) => state.unitConversion.toUnitType)

    return(
        <>
            <input
                type="number"
                style={inputStyle}
                name='toUnit-id'
                id="toUnit-id"
                autoComplete="off"
                placeholder="0"
                readOnly
                value={toUnitVal}
            /> 
            <label 
                for="toUnit-id"
                style={labelStyle}
            >
                {toUnitType}
            </label>
        </>
    )
}

export default OutputUnit