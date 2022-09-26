import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import NavBar from '../NavBar';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import GreetingBox from '../homePage/GreetingBox';
import obi from '../../assets/img/obi.png'

const HomePages = () => {
    return (
        <div>
            <Parallax pages={3}>
                <ParallaxLayer>
                    <div className='bg' id='mainBg'></div>
                </ParallaxLayer>
                <ParallaxLayer offset='0.2'>
                    <div>
                        <img src={obi} alt='Purple dog named Obi' />
                        <GreetingBox />
                    </div>
                </ParallaxLayer>
                <ParallaxLayer>
                    <NavBar currentPage='home' />
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}

export default HomePages