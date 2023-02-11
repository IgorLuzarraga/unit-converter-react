import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { madeUnitConversion, setFromUnitVal } from '../features/unitConversions/unitConversionSlice';

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