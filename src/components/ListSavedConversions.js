import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeConversion } from '../features/unitConversions/unitConversionSlice';
import '../assets/savedText.css';
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ulStyle = {
    'list-style-type': 'none',
    padding: '0',
    margin: '0'
}

const btnStyle = {
    'font-size': '24px',
    border: '0px',
    cursor: 'pointer',
    background: 'lightgrey',
    'margin-right': '1px'
}

const ListSavedConversions = () => {
    const list = useSelector((state) => state.unitConversion.savedConversions)

    return (
        <div>
            {renderSavedText(list.length)}
            <ul
                style={ulStyle}
            >
                {renderListItems(list)}
            </ul>
        </div>
    );
}

const ListItem = ({savedConversion}) => {
    const dispatch = useDispatch()
    const {conversionFromTo, id} = savedConversion

    return(
        <li>
            <button 
                onClick={ () => dispatch(removeConversion(id))}
                style={btnStyle}
            >
                { conversionFromTo }
            </button>
            <button
                onClick={ () => dispatch(removeConversion(id))}
                style={btnStyle}
            >
                <FontAwesomeIcon icon={faCircleXmark} />
            </button>
        </li>
    )   
}

const renderSavedText = (length) => 
    length > 0 ? <h2>Saved</h2> : <h2> </h2>

const renderListItems = (list) =>
    list.map((item, index) => <ListItem key={index} savedConversion={item} />)

export default ListSavedConversions