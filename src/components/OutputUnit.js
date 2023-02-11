import React from 'react';
import {useSelector} from 'react-redux'

const OutputUnit = () => {
    const toUnitVal = useSelector((state) => state.unitConversion.toUnitVal)

    return(
        <input
            type="number"
            id="toUnit-num"
            autoComplete="off"
            placeholder="0"
            readOnly
            value={toUnitVal}
        />
    )
}

export default OutputUnit