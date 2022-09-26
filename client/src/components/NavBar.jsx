import React, { useState, useEffect } from 'react';
import { Link, Navigate } from "react-router-dom";

const NavBar = (props) => {

    const { currentPage } = props
    const mainElements = {
        home: <h1>Luke J. Lackey</h1>,
        project: <h1>Projects</h1>,
        blog: <h1>My Journey</h1>
    }

    return (
        <nav>
            <Link to='/projects'>projects</Link>
            {mainElements[currentPage]}
            <Link to='/follow-me'>follow my journey</Link>
        </nav>
    )
}

export default NavBar