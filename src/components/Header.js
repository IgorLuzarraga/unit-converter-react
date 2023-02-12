import React from 'react';
import ReverseConversion2 from './ReverseConversion2.js'

const componentStyle = {
    display: 'flex',
    'flex-direction': 'row',
    margin: '5px',
    gap: '10px'
}

const Header = () => {
    return(
        <header 
            style={componentStyle}
        >
            <ReverseConversion2 />
            <h2>Unit Converter</h2>
        </header>
    )
}

export default Header;