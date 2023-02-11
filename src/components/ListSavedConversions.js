import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeConversion } from '../features/unitConversions/unitConversionSlice';

const ListSavedConversions = () => {
    const list = useSelector((state) => state.unitConversion.savedConversions)

    return (
        <div>
            {renderSavedText(list.length)}
            <ul>
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
            <button onClick={ () => dispatch(removeConversion(id))}>
                { conversionFromTo }
            </button>
        </li>
    )   
}

const renderSavedText = (length) => 
    length > 0 ? <h2>Saved</h2> : <h2></h2>
        
const renderListItems = (list) =>
    list.map((item, index) => <ListItem key={index} savedConversion={item} />)

export default ListSavedConversions