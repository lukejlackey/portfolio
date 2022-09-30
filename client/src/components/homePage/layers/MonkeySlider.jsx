import React from 'react'
import { ParallaxLayer } from '@react-spring/parallax';
import MonkeyBox from '../MonkeyBox';

const MonkeySlider = (props) => {

    const { calc } = props

    return (
        <ParallaxLayer
            sticky={{ start: calc(0.131), end: calc(0.5) }}
            style={{ height: '2rem' }}
        >
            <MonkeyBox />
        </ParallaxLayer>
    )
}

export default MonkeySlider