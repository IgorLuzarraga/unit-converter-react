import React from 'react';
import {useDispatch} from 'react-redux'
import { saveConversion } from '../features/unitConversions/unitConversionSlice';
import { faHeart  } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const componentStyle = {
    height: '24px',
    width: '24px',
    'border': '0px',
    'font-family': 'Poppins',
    'font-size': '24px',
    'font-weight': '400',
    color: 'white',
    background: '#2E0039',
    'padding-left': '10px',
    'marging-bottom': '10px',
    cursor: 'pointer'
}

const SaveBtn = () => {
    const dispatch = useDispatch()
    return(
        <button 
            className='save-btn' 
            onClick={() => { dispatch(saveConversion())}}
            style={componentStyle}
        >
            <FontAwesomeIcon icon={faHeart} />
        </button>
    )
}

export default SaveBtn