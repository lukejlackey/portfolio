import React from 'react'
import monke3 from '../../../assets/img/monke3.png'
import { ParallaxLayer } from '@react-spring/parallax'
import HeadingBox from '../HeadingBox'

const HelloApe = () => {
    return (
        <ParallaxLayer
            sticky={{ start: 0.131, end: 0.5 }}
        >
            <div id='monkeyBox'>
                <HeadingBox content='greeting' />
                <div id='monkey3'>
                    <img src={monke3} alt='Purple monkey' height='125rem' />
                </div>
            </div>
        </ParallaxLayer>
    )
}

export default HelloApe