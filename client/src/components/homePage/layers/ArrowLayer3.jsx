import React from 'react'
import { ParallaxLayer } from '@react-spring/parallax';
import ScrollUp from '../ScrollUp';

const ArrowLayer4 = (props) => {

    const { parentRef } = props

    return (
        <ParallaxLayer
            offset={0.75}
            speed={0}
            style={{ zIndex: 2, height: 'fit-content' }}
            onClick={() => { parentRef.current.scrollTo(0) }}
        >
            <ScrollUp />
        </ParallaxLayer>
    )
}

export default ArrowLayer4