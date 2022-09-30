import React from 'react'
import { ParallaxLayer } from '@react-spring/parallax';
import TextBox from '../TextBox';


const AboutMe = (props) => {

    const { calc } = props

    return (
        <ParallaxLayer
            sticky={{ start: calc(0.42), end: calc(0.5) }}
            style={{ height: '2rem' }}
        >
            <TextBox content='greeting' />
        </ParallaxLayer>
    )
}

export default AboutMe