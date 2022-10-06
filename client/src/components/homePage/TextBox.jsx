import React from 'react'
import ContactInfo from '../textBoxes/ContactInfo'
import SkillList from '../textBoxes/SkillList'

const TextBox = (props) => {

    const { content } = props

    const textContent = {
        about: <p>I am a <strong>Full Stack</strong> developer based in the <strong>San Diego</strong> area with experience building web applications in <strong>Python</strong>, <strong>Java</strong>, & <strong>JavaScript</strong>.</p>,
        skills: <SkillList />,
        contact: <ContactInfo />
    }

    return (
        <div className='container' id={`${content}Box`}>
            {textContent[content]}
        </div>
    )
}

export default TextBox