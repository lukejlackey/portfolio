import React from 'react'
import { ParallaxLayer } from '@react-spring/parallax';
import HeadingBox from '../HeadingBox';
import TextBox from '../TextBox';

const ContactMe = () => {

    return (
        <ParallaxLayer
            offset={1.95}
            speed={0.2}
        >
            <div id='contactSection'>
                <HeadingBox content='contact' />
                <TextBox content='contact' />
            </div>
        </ParallaxLayer>
    )
}

export default ContactMe