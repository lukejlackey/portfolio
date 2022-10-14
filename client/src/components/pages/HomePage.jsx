import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route } from "react-router-dom";
import NavBar from '../NavBar';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import BgLayer from '../homePage/layers/BgLayer';
import ArrowLayer2 from '../homePage/layers/ArrowLayer2';
import AboutMe from '../homePage/layers/AboutMe';
import ContactMe from '../homePage/layers/ContactMe';
import ContactApes from '../homePage/layers/ContactApes';
import ArrowLayer1 from '../homePage/layers/ArrowLayer1';
import ArrowLayer3 from '../homePage/layers/ArrowLayer3';
import ArrowLayer4 from '../homePage/layers/ArrowLayer4';
import HelloApe from '../homePage/layers/HelloApe';
import Skills from '../homePage/layers/Skills';
import SkillsApe from '../homePage/layers/SkillsApe';
import SkillsHeading from '../homePage/layers/SkillsHeading';


const HomePages = () => {

    const ref = useRef();

    const [width, setWindowWidth] = useState(0)
    const [height, setWindowHeight] = useState(0)

    useEffect(() => {

        updateDimensions();

        window.addEventListener('resize', updateDimensions);
        return () =>
            window.removeEventListener('resize', updateDimensions);
    }, [])

    const updateDimensions = () => {
        const width = window.innerWidth
        const height = window.innerHeight
        setWindowWidth(width)
        setWindowHeight(height)
    }

    const handleScroll = event => {
        console.log('scrollTop: ', event.currentTarget.scrollTop);
        console.log('offsetHeight: ', event.currentTarget.offsetHeight);
    };

    return (
        <>
            <Parallax pages={4} ref={ref} config={{ friction: 175 }}>
                <BgLayer />
                {/* <ArrowLayer2 parentRef={ref} /> */}
                {/* <ArrowLayer4 parentRef={ref} /> */}
                <HelloApe
                    sticky={{ start: 0.131, end: 0.5 }}
                />
                <SkillsApe
                    sticky={{ start: 0.4, end: 0.74 }}
                />
                <SkillsHeading sticky={{ start: 0.3, end: 0.8 }} />
                <AboutMe sticky={{ start: 0, end: 0 }} />
                <ArrowLayer1 parentRef={ref} sticky={{ start: 0.85, end: 0.85 }} />
                <ArrowLayer3 parentRef={ref} sticky={{ start: 1.09, end: 1.09 }} />
                <Skills />
                <ContactMe />
                <ContactApes />
                <ParallaxLayer
                    style={{ zIndex: 2, height: 'fit-content' }}
                >

                </ParallaxLayer>
            </Parallax>
        </>
    )
}

export default HomePages