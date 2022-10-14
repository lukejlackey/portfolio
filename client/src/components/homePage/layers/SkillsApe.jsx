import React from 'react'
import { ParallaxLayer } from '@react-spring/parallax'
import pug from '../../../assets/img/pug.png'

const SkillsApe = () => {
    return (
        <ParallaxLayer
            sticky={{ start: 0.4, end: 0.74 }}
        >
            <div className='monkeyBox' id="monkeyBox2">
                <div id='monkey4Container'>
                    <img id='monkey4' src={pug} alt='Purple pug' />
                </div>
            </div>
        </ParallaxLayer>
    )
}

export default SkillsApe