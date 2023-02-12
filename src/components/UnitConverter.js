import React from 'react';
import Footer from './Footer';
import ListSavedConversions from './ListSavedConversions';
import UnitConverterControl from './UnitConverterControl';

const UnitConverter = () => {
    return (
        <div>
        {/* <div className='element-column unit-converter-box'> */}
            <UnitConverterControl />
            <ListSavedConversions /> 
            <Footer />
        </div>
    )
}

export default UnitConverter;