import React from 'react'
import { ParallaxLayer } from '@react-spring/parallax';
import ScrollDown from '../ScrollDown';


const ArrowLayer1 = (props) => {

    const { parentRef, calc } = props

    return (
        <ParallaxLayer
            offset={calc(0.7)}
            speed={0.7}
            onClick={() => { parentRef.current.scrollTo(calc(0.67)) }}
        >
            <ScrollDown />
        </ParallaxLayer>
    )
}

export default ArrowLayer1