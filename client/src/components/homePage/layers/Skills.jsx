import React from 'react'
import { ParallaxLayer } from '@react-spring/parallax';
import SkillsBox from '../SkillsBox';

const Skills = () => {

    return (
        <ParallaxLayer
            horizontal={true}
            offset={0.469}
            speed={0.75}
            style={{ zIndex: 0, height: 'fit-content' }}
        >
            <SkillsBox />
        </ParallaxLayer>
    )
}

export default Skills