import React from 'react'
import { ParallaxLayer } from '@react-spring/parallax';
import MonkeyBox from '../MonkeyBox';

const ApeSlider = (props) => {

    return (
        <ParallaxLayer
            sticky={{ start: 0.131, end: 0.5 }}
            style={{ zIndex: 1, height: 'fit-content', width: 'fit-content', marginLeft: 'auto', marginRight: 'auto' }}
        >
            <MonkeyBox />
        </ParallaxLayer>
    )
}

export default ApeSlider