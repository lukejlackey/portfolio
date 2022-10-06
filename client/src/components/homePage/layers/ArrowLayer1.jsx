import React from 'react'
import { ParallaxLayer } from '@react-spring/parallax';
import ScrollDown from '../ScrollDown';


const ArrowLayer1 = (props) => {

    const { parentRef } = props

    return (
        <ParallaxLayer
            offset={0.7}
            speed={0.7}
            style={{ zIndex: 1 }}
            onClick={() => { parentRef.current.scrollTo(0.67) }}
        >
            <ScrollDown />
        </ParallaxLayer>
    )
}

export default ArrowLayer1