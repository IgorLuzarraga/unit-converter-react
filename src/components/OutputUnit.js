import React from 'react';
import {useSelector} from 'react-redux'

const componentStyle = {
    height: '22px',
    width: '261px',
    'text-align': 'right',
    'font-size': '24px',
    color: 'white',
    background: '#2E0039'
}

const OutputUnit = () => {
    const toUnitVal = useSelector((state) => state.unitConversion.toUnitVal)

    return(
        <input
            type="number"
            style={componentStyle}
            id="toUnit-num"
            autoComplete="off"
            placeholder="0"
            readOnly
            value={toUnitVal}
        />
    )
}

export default OutputUnit