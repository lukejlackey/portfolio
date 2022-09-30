import React from 'react'
import { ParallaxLayer } from '@react-spring/parallax';
import ScrollDown from '../ScrollDown';

const ArrowLayer2 = (props) => {

    const { parentRef, calc } = props

    return (
        <ParallaxLayer
            offset={calc(1.35)}
            speed={calc(0.56)}
            onClick={() => { parentRef.current.scrollTo(1.75) }}
        >
            <ScrollDown />
        </ParallaxLayer>
    )
}

export default ArrowLayer2