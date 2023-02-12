import React from 'react';
import UnitsConvertionSelector from './UnitsConversionSelector';
import ReverseConversion from './ReverseConversion';
import InputUnit from './InputUnit';
import OutputUnit from './OutputUnit';
import SaveBtn from './SaveBtn';

const Froga = () => {
    const unitConverterOpts = [
        "Kms -> Miles",
        "Miles -> Kms",
        "Feet -> Meters",
        "Meters -> Feet",
        "Centimeters -> Inches",
        "Inches -> Centimeters"
    ]

    return(
        <div className='froga-col-main'>
            <div className='froga-row1'>
                convert
            </div> {/* froga-row1 */}
            <div className='froga-row2'>
                <div className='froga-row2-select-arrows'>
                    <UnitsConvertionSelector
                        options={unitConverterOpts}
                    />
                    <ReverseConversion />
                </div> {/* froga-row2-select-arrows */}
                <div className='froga-row2-input'>
                    <InputUnit />
                </div> {/* froga-row2-input */}
            </div> {/* froga-row2 */}
            <div className='froga-row3-heart-output'>    
                <SaveBtn />
                <OutputUnit />
            </div> {/* froga-row3-heart-output */}
        </div>) // froga-col-main 
}

export default Froga