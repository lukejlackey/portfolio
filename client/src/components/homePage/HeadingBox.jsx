import React from 'react'

const HeadingBox = (props) => {

    const { content } = props

    const textContent = {
        greeting: 'Hello there!',
        skills: 'Skills',
        contact: 'Contact Me'
    }

    return (
        <div className='heading' id='greetingHeader'>
            <h3>{textContent[content]}</h3>
        </div>
    )
}

export default HeadingBox