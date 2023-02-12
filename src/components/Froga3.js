import React from 'react';
import '../assets/froga3.css'
import UnitsConvertionSelector from './UnitsConversionSelector';
import ReverseConversion from './ReverseConversion';
import SaveBtn from './SaveBtn';
import InputUnit from './InputUnit';
import OutputUnit from './OutputUnit';

const Froga3 = () => {
    const unitConverterOpts = [
        "Kms -> Miles",
        "Miles -> Kms",
        "Feet -> Meters",
        "Meters -> Feet",
        "Centimeters -> Inches",
        "Inches -> Centimeters"
    ]

    return(
        <div className='froga3-col-main'>
            <div className='froga3-row-1'>
                <div className='froga3-box-convert'>convert</div>
            </div> {/* className='froga3-row-1' */}

            <div className='froga3-row-2'>
                <div className='froga3-box-UnitsConversionSelector'>
                    <UnitsConvertionSelector
                            options={unitConverterOpts}
                    />
                </div>
                <div className='froga3-box-reverse-conversion'>
                    <ReverseConversion />
                </div>
                <div className='froga3-box-InputUnit'>
                    <InputUnit />
                </div>
            </div> {/* className='froga3-row-2' */}

            <div className='froga3-row-3'>
                <div className='froga3-box-save'>
                    <SaveBtn />
                </div>
                <div className='froga3-box-gap'>
                    {/* <ReverseConversion /> */}
                </div>
                <div className='froga3-box-OutputUnit'>
                    <OutputUnit />
                </div>
            </div> {/* className='froga3-row-3' */}
        </div> // className='column-main'
    )
       
}

export default Froga3