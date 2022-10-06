import React from 'react'
import { ParallaxLayer } from '@react-spring/parallax';
import ScrollUp from '../ScrollUp';

const ArrowLayer4 = (props) => {

    const { parentRef } = props

    return (
        <ParallaxLayer
            offset={1.95}
            speed={0.2}
            style={{ zIndex: 1, height: 'fit-content' }}
            onClick={() => { parentRef.current.scrollTo(0.67) }}
        >
            <ScrollUp />
        </ParallaxLayer>
    )
}

export default ArrowLayer4