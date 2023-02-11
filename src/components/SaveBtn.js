import React from 'react';
import {useDispatch} from 'react-redux'
import { saveConversion } from '../features/unitConversions/unitConversionSlice';
import { faHeart  } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SaveBtn = () => {
    const dispatch = useDispatch()
    return(
        <button className='save-btn' onClick={() => { dispatch(saveConversion())}}>
            <FontAwesomeIcon icon={faHeart} />
        </button>
    )
}

export default SaveBtn