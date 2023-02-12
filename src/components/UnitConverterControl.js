import React from 'react';
import '../assets/unitConverterControl.css'
import UnitsConvertionSelector from './UnitsConversionSelector';
import ReverseConversion from './ReverseConversion';
import SaveBtn from './SaveBtn';
import InputUnit from './InputUnit';
import OutputUnit from './OutputUnit';

const UnitConverterControl = () => {
    const unitConverterOpts = [
        "Kms -> Miles",
        "Miles -> Kms",
        "Feet -> Meters",
        "Meters -> Feet",
        "Centimeters -> Inches",
        "Inches -> Centimeters"
    ]

    return(
        <div className='unitConverterControl-col-main'>
            <div className='unitConverterControl-row-1'>
                <div className='unitConverterControl-box-convert'>convert</div>
            </div> {/* className='unitConverterControl-row-1' */}

            <div className='unitConverterControl-row-2'>
                <div className='unitConverterControl-box-UnitsConversionSelector'>
                    <UnitsConvertionSelector
                            options={unitConverterOpts}
                    />
                </div>
                <div className='unitConverterControl-box-reverse-conversion'>
                    <ReverseConversion />
                </div>
                <div className='unitConverterControl-box-InputUnit'>
                    <InputUnit />
                </div>
            </div> {/* className='unitConverterControl-row-2' */}

            <div className='unitConverterControl-row-3'>
                <div className='unitConverterControl-box-save'>
                    <SaveBtn />
                </div>
                <div className='unitConverterControl-box-gap'>
                    {/* <ReverseConversion /> */}
                </div>
                <div className='unitConverterControl-box-OutputUnit'>
                    <OutputUnit />
                </div>
            </div> {/* className='unitConverterControl-row-3' */}
        </div> // className='column-main'
    )
       
}

export default UnitConverterControl