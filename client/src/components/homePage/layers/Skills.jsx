import React from 'react'
import { ParallaxLayer } from '@react-spring/parallax';
import SkillsBox from '../SkillsBox';

const Skills = () => {

    return (
        <ParallaxLayer
            offset={1.3}
        >

            <ParallaxLayer
                horizontal={true}
                offset={0.5}
                speed={0.538}
            >
                <SkillsBox />
            </ParallaxLayer>
        </ParallaxLayer>
    )
}

export default Skills