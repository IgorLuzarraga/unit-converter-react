import React from 'react';
import Footer from './Footer';
import ListSavedConversions from './ListSavedConversions';
import UnitConverterControl from './UnitConverterControl';

const UnitConverter = () => {
    return (
        <div>
            <UnitConverterControl />
            <ListSavedConversions /> 
            <Footer />
        </div>
    )
}

export default UnitConverter;