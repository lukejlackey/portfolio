import React from 'react'
import { ParallaxLayer } from '@react-spring/parallax';

const BgLayer = () => {
    return (
        <ParallaxLayer
            factor={2.75}
            className='bg'
            id='mainBg'
        >
            <div
                className='bg'
                id='mainBg'
            />
        </ParallaxLayer>
    )
}

export default BgLayer