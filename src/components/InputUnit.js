import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { madeUnitConversion, setFromUnitVal } from '../features/unitConversions/unitConversionSlice';

const componentStyle = {
    height: '22px',
    width: '261px',
    'border': '0px',
    'text-align': 'right',
    'font-size': '24px',
    color: 'white',
    background: '#2E0039'
}

const InputUnit = () => {
    const dispatch = useDispatch()
    const fromUnitVal = useSelector((state) => state.unitConversion.fromUnitVal)

    return(
        <input
            onChange={(e) => {
                    dispatch(setFromUnitVal(e.target.value))
                    dispatch(madeUnitConversion())
                }
            }
            style={componentStyle}
            type="number"
            id="fromUnit-num"
            autoComplete="off"
            placeholder="0"
            value={fromUnitVal}
            autoFocus
        />
    )
}

export default InputUnit