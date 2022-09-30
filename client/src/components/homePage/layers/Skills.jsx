import React from 'react'
import { ParallaxLayer } from '@react-spring/parallax';
import SkillsBox from '../SkillsBox';

const Skills = (props) => {

    const { calc } = props

    return (
        <ParallaxLayer
            horizontal={true}
            offset={calc(0.5, true)}
            speed={0.75}
            style={{ height: '2rem' }}
        >
            <SkillsBox />
        </ParallaxLayer>
    )
}

export default Skills