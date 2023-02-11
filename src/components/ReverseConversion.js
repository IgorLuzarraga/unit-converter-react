import React from 'react';
import { useDispatch } from 'react-redux';
import {reverseConversion, madeUnitConversion} from '../features/unitConversions/unitConversionSlice'
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReverseConversion = () => {
    const dispatch = useDispatch()

    return(
        <div>
            <button onClick={() => 
                {
                    dispatch(reverseConversion())
                    dispatch(madeUnitConversion())
                }
            }
            >
                <FontAwesomeIcon icon={faArrowRightArrowLeft} />
            </button>
        </div>
    )
}

export default ReverseConversion