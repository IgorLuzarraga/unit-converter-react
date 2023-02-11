import React from 'react';
import UnitsConvertionSelector from './UnitsConversionSelector';
import ReverseConversion from './ReverseConversion';
import ListSavedConversions from './ListSavedConversions';
import SaveBtn from './SaveBtn';
import InputUnit from './InputUnit';
import OutputUnit from './OutputUnit';

const UnitConverter = () => {
    const unitConverterOpts = [
        "Kms -> Miles",
        "Miles -> Kms",
        "Feet -> Meters",
        "Meters -> Feet",
        "Centimeters -> Inches",
        "Inches -> Centimeters"
    ]

    return (
        <div className='element-column unit-converter-box'>
            <div className='element-row'>
                <div className="select-heart">
                    <SaveBtn />
                    <UnitsConvertionSelector
                        options={unitConverterOpts}
                    />
                </div>
            </div>

            <div className="element-row in-out-box">
                <InputUnit />
                <ReverseConversion />
                <OutputUnit />
            </div>    
            <ListSavedConversions />
            
        </div>
    )
}

export default UnitConverter;