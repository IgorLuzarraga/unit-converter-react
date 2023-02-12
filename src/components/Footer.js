import React from 'react';

const componentStyle = {
    position: 'fixed',
    bottom: '0px',
    width: '100%',
    height: '39px',
    display: 'flex',
    'flex-direction': 'row',
    'flex-basis': '100%',
    color: 'white',
    'text-align': 'center',
    background: '#2E0039',
    'justify-content': 'center',
    'align-items': 'center',
    gap: '15px'
}

const Footer = () => {
    return(
        <footer 
            style={componentStyle}
        >
            <p>Terms of service</p>
            <p>Privacy policy</p>
        </footer>
    )
}

export default Footer