import React from 'react'
import { ParallaxLayer } from '@react-spring/parallax';
import TextBox from '../TextBox';
import NavBar from '../../NavBar';
import ScrollDown from '../ScrollDown';


const AboutMe = () => {

    return (
        <ParallaxLayer>
            <NavBar currentPage='home' />
            <TextBox content='about' />
        </ParallaxLayer>
    )
}

export default AboutMe