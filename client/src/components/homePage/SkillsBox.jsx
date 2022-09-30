import React from 'react'
import Penguins from './Penguins'
import TextBox from './TextBox'


const SkillsBox = () => {
    return (
        <div id='skillsBoxContainer'>
            <Penguins />
            <TextBox content='skills' />
            <Penguins />
        </div>
    )
}

export default SkillsBox