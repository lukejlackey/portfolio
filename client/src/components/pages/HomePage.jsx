import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route } from "react-router-dom";
import NavBar from '../NavBar';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import BgLayer from '../homePage/layers/BgLayer';
import ArrowLayer2 from '../homePage/layers/ArrowLayer2';
import ApeSlider from '../homePage/layers/ApeSlider';
import AboutMe from '../homePage/layers/AboutMe';
import Skills from '../homePage/layers/Skills';
import ContactMe from '../homePage/layers/ContactMe';
import ContactApes from '../homePage/layers/ContactApes';
import ArrowLayer1 from '../homePage/layers/ArrowLayer1';
import ArrowLayer3 from '../homePage/layers/ArrowLayer3';
import ArrowLayer4 from '../homePage/layers/ArrowLayer4';


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


    return (
        <>
            <Parallax pages={2.75} ref={ref}>
                <BgLayer />
                <ArrowLayer1 parentRef={ref} />
                <ArrowLayer2 parentRef={ref} />
                <ArrowLayer3 parentRef={ref} />
                <ArrowLayer4 parentRef={ref} />
                <ApeSlider
                    sticky={{ start: 0.131, end: 0.5 }}
                />
                <AboutMe
                    sticky={{ start: 0.42, end: 0.495 }}
                />
                <Skills />
                <ContactMe />
                <ContactApes />
                <ParallaxLayer
                    style={{ zIndex: 2, height: 'fit-content' }}
                >
                    <NavBar currentPage='home' />
                </ParallaxLayer>
            </Parallax>
        </>
    )
}

export default HomePages