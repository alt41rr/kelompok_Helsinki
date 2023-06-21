import React from 'react';
import Evolution from './Evolution';
import TypeEffects from './TypeEffects';
import Logo from './Logo';

function CardInfo() {
    return (
        <div>
            <h2>Card Info</h2>
            <Evolution />
            <TypeEffects />
            <Logo />
        </div>
    );
}

export default CardInfo;
