import React from 'react'
import { ParallaxLayer } from '@react-spring/parallax';
import ScrollDown from '../ScrollDown';
import { Spring } from "react-spring";
import VisibilitySensor from "react-visibility-sensor";

const ArrowLayer1 = (props) => {

    const { parentRef } = props

    return (
        <VisibilitySensor partialVisibility minTopValue={200}>
            {({ isVisible }) => (
                <Spring delay={10} to={{ opacity: isVisible ? 0 : 1 }}>
                    {({ opacity }) =>
                        <ParallaxLayer
                            sticky={{ start: 0.85, end: 0.85 }}
                            style={{ opacity }}
                            onClick={() => { parentRef.current.scrollTo(1) }}
                        >
                            <ScrollDown />
                        </ParallaxLayer>
                    }
                </Spring>
            )}
        </VisibilitySensor>
    )
}

export default ArrowLayer1