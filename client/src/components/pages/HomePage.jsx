import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route } from "react-router-dom";
import NavBar from '../NavBar';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import TextBox from '../homePage/TextBox';
import HeadingBox from '../homePage/HeadingBox';
import MonkeyBox from '../homePage/MonkeyBox';
import SkillsBox from '../homePage/SkillsBox';
import bottomMonkey1 from '../../assets/img/monke2.png'
import bottomMonkey2 from '../../assets/img/monke4.png'
import ScrollDown from '../homePage/ScrollDown';


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
                <ParallaxLayer
                    factor={2.75}
                    className='bg'
                    id='mainBg'
                >
                    <div
                        className='bg'
                        id='mainBg'
                    />
                </ParallaxLayer>
                <ParallaxLayer
                    offset={calcParallaxVal(1.35)}
                    speed={calcParallaxVal(0.56)}
                    onClick={() => { ref.current.scrollTo(1.75) }}
                >
                    <ScrollDown />
                </ParallaxLayer>
                <ParallaxLayer
                    sticky={{ start: calcParallaxVal(0.131), end: calcParallaxVal(0.5) }}
                    style={{ height: '2rem' }}
                >
                    <MonkeyBox />
                </ParallaxLayer>
                <ParallaxLayer
                    sticky={{ start: calcParallaxVal(0.42), end: calcParallaxVal(0.5) }}
                    style={{ height: '2rem' }}
                >
                    <TextBox content='greeting' />
                </ParallaxLayer>
                <ParallaxLayer
                    horizontal={true}
                    offset={calcParallaxVal(0.5, true)}
                    speed={0.75}
                    style={{ height: '2rem' }}
                >
                    <SkillsBox />
                </ParallaxLayer>
                <ParallaxLayer
                    offset={calcParallaxVal(1.85)}
                    speed={0.2}
                >
                    <div id='contactSection'>
                        <HeadingBox content='contact' />
                        <TextBox content='contact' />
                    </div>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={calcParallaxVal(2.3)}
                    speed={0.15}
                >
                    <div id='bottomMonkeys'>
                        <img src={bottomMonkey2} alt='Purple chimpanzee talking' height='350rem' />
                        <img src={bottomMonkey1} alt='Purple chimpanzee thinking' height='350rem' />
                    </div>
                </ParallaxLayer>
                <ParallaxLayer >
                    <NavBar currentPage='home' />
                </ParallaxLayer>
                <ParallaxLayer
                    offset={calcParallaxVal(0.7)}
                    speed={0.7}
                    onClick={() => { ref.current.scrollTo(calcParallaxVal(0.67)) }}
                >
                    <ScrollDown />
                </ParallaxLayer>
            </Parallax>
        </>
    )
}

export default HomePages