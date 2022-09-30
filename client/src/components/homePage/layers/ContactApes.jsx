import React from 'react'
import { ParallaxLayer } from '@react-spring/parallax';
import bottomMonkey1 from '../../../assets/img/monke2.png'
import bottomMonkey2 from '../../../assets/img/monke4.png'

const ContactApes = (props) => {

    const { calc } = props

    return (
        <ParallaxLayer
            offset={calc(2.3)}
            speed={0.15}
        >
            <div id='bottomMonkeys'>
                <img src={bottomMonkey2} alt='Purple chimpanzee talking' height='350rem' />
                <img src={bottomMonkey1} alt='Purple chimpanzee thinking' height='350rem' />
            </div>
        </ParallaxLayer>
    )
}

export default ContactApes