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


    return (
        <>
            <Parallax pages={2.5} ref={ref}>
                <ParallaxLayer
                    factor={2.5}
                    className='bg'
                    id='mainBg'
                >
                    <div
                        className='bg'
                        id='mainBg'
                    />
                </ParallaxLayer>
                <ParallaxLayer
                    offset={1.35}
                    speed={0.7}
                    onClick={() => { ref.current.scrollTo(1.5) }}
                >
                    <ScrollDown />
                </ParallaxLayer>
                <ParallaxLayer
                    sticky={{ start: 0.13, end: 0.457 }}
                    style={{ height: '2vh' }}
                >
                    <MonkeyBox />
                </ParallaxLayer>
                <ParallaxLayer
                    sticky={{ start: 0.434, end: 0.434 }}
                    style={{ height: '2vh' }}
                >
                    <TextBox content='greeting' />
                </ParallaxLayer>
                <ParallaxLayer
                    horizontal={true}
                    offset='0.99'
                    speed={1.47}
                    style={{ height: '2vh' }}
                >
                    <SkillsBox />
                </ParallaxLayer>
                <ParallaxLayer offset='1.9' speed={0.7}>
                    <div id='contactSection'>
                        <HeadingBox content='contact' />
                        <TextBox content='contact' />
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset='2.15' speed={0.1}>
                    <div id='bottomMonkeys'>
                        <img src={bottomMonkey2} alt='Purple chimpanzee talking' className='monkey4' />
                        <img src={bottomMonkey1} alt='Purple chimpanzee thinking' className='monkey4' />
                    </div>
                </ParallaxLayer>
                <ParallaxLayer >
                    <NavBar currentPage='home' />
                </ParallaxLayer>
                <ParallaxLayer
                    offset={0.7}
                    speed={0.7}
                    onClick={() => { ref.current.scrollTo(0.688) }}
                >
                    <ScrollDown />
                </ParallaxLayer>
            </Parallax>
        </>
    )
}

export default HomePages