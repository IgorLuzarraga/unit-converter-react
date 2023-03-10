import React from 'react';
import { useDispatch } from 'react-redux';
import {reverseConversion, madeUnitConversion} from '../features/unitConversions/unitConversionSlice'
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const componentStyle = {
    height: '32px',
    width: '32px',
    'border': '0px',
    'font-size': '20px',
    color: '#2E0039',
    background: 'white',
    cursor: 'pointer'
}

const ReverseConversion2 = () => {
    const dispatch = useDispatch()

    return(
        <div>
            <button 
                onClick={() => 
                    {
                        dispatch(reverseConversion())
                        dispatch(madeUnitConversion())
                    }
                }
                style={componentStyle}
            >
                <FontAwesomeIcon icon={faArrowRightArrowLeft} />
            </button>
        </div>
    )
}

export default ReverseConversion2