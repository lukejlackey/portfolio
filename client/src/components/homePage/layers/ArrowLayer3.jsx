import React from 'react'
import { ParallaxLayer } from '@react-spring/parallax';
import ScrollUp from '../ScrollUp';
import { Spring } from "react-spring";
import VisibilitySensor from "react-visibility-sensor";

const ArrowLayer4 = (props) => {

    const { parentRef } = props

    return (
        <VisibilitySensor partialVisibility minTopValue={930}>
            {({ isVisible }) => (
                <Spring delay={10} to={{ opacity: isVisible ? 1 : 0 }}>
                    {({ opacity }) =>
                        <ParallaxLayer
                            sticky={{ start: 1.09, end: 1.09 }}
                            style={{ opacity }}
                            onClick={() => { parentRef.current.scrollTo(0) }}
                        >
                            <ScrollUp />
                        </ParallaxLayer>
                    }
                </Spring>
            )}
        </VisibilitySensor>
    )
}

export default ArrowLayer4