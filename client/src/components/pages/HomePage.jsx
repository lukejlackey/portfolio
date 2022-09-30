import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route } from "react-router-dom";
import NavBar from '../NavBar';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import bottomMonkey1 from '../../assets/img/monke2.png'
import bottomMonkey2 from '../../assets/img/monke4.png'
import ScrollDown from '../homePage/ScrollDown';
import BgLayer from '../homePage/layers/BgLayer';
import ArrowLayer2 from '../homePage/layers/ArrowLayer2';
import MonkeySlider from '../homePage/layers/MonkeySlider';
import AboutMe from '../homePage/layers/AboutMe';
import Skills from '../homePage/layers/Skills';
import ContactMe from '../homePage/layers/ContactMe';
import ContactApes from '../homePage/layers/ContactApes';
import ArrowLayer1 from '../homePage/layers/ArrowLayer1';


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

    const calcParallaxVal = (val, x = false) => {
        const newVal = val * (x ? width : height);
        if (x) console.log({ newVal })
        return newVal / 1000
    }


    return (
        <>
            <Parallax pages={2.75} ref={ref}>
                <BgLayer />
                <ArrowLayer1 parentRef={ref} calc={calcParallaxVal} />
                <ArrowLayer2 parentRef={ref} calc={calcParallaxVal} />
                <MonkeySlider calc={calcParallaxVal} />
                <AboutMe calc={calcParallaxVal} />
                <Skills calc={calcParallaxVal} />
                <ContactMe calc={calcParallaxVal} />
                <ContactApes calc={calcParallaxVal} />
                <ParallaxLayer style={{ height: '1rem' }}>
                    <NavBar currentPage='home' />
                </ParallaxLayer>
            </Parallax>
        </>
    )
}

export default HomePages