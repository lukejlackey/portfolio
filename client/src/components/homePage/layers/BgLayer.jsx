import React from 'react'
import { ParallaxLayer } from '@react-spring/parallax';
import dunes from '../../../assets/img/dunes.png'

const BgLayer = () => {

    return (
        <ParallaxLayer
            factor={4}
            style={{ backgroundImage: `url(${dunes})`, backgroundSize: 'cover' }}
        >
        </ParallaxLayer>
    )
}

export default BgLayer