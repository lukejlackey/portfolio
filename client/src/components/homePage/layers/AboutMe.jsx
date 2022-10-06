import React from 'react'
import { ParallaxLayer } from '@react-spring/parallax';
import TextBox from '../TextBox';


const AboutMe = () => {

    return (
        <ParallaxLayer
            sticky={{ start: 0.42, end: 0.495 }}
            style={{ zIndex: 2, height: 'fit-content' }}
        >
            <TextBox content='about' />
        </ParallaxLayer>
    )
}

export default AboutMe