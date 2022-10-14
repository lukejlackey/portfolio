import { ParallaxLayer } from '@react-spring/parallax'
import React from 'react'
import HeadingBox from '../HeadingBox'

const SkillsHeading = () => {
    return (
        <ParallaxLayer
            sticky={{ start: 0.3, end: 0.8 }}
        >
            <div id='skills-heading'>
                <HeadingBox content='skills' />
            </div>
        </ParallaxLayer>
    )
}

export default SkillsHeading