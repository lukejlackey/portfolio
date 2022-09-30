import React from 'react'
import { Link } from 'react-router-dom'
import linkedin from '../../assets/img/linkedin.png'
import github from '../../assets/img/github.png'
import email from '../../assets/img/email.png'
import resumeicon from '../../assets/img/resume-icon.png'
import resume from '../../assets/pdfs/luke.lackey.resume.7.2022.pdf'

const ContactInfo = () => {
    return (
        <div id='contactLinkContainer'>
            <div className='contactRow'>
                <a href='https://www.linkedin.com/in/lukejlackey/' target="_blank" rel="noreferrer" className='contactLink'>
                    <img src={linkedin} alt='LinkedIn Logo' height='125rem' />
                    <p>LinkedIn</p>
                </a>
                <a href='https://github.com/lukejlackey' target="_blank" rel="noreferrer" className='contactLink'>
                    <img src={github} alt='LinkedIn Logo' height='125rem' />
                    <p>GitHub</p>
                </a>
            </div>
            <div className='contactRow'>
                <a href={resume} target="_blank" rel="noreferrer" className='contactLink' download>
                    <img src={resumeicon} alt='LinkedIn Logo' height='125rem' />
                    <p>Resume</p>
                </a>
                <a href='mailto:lukejlackey@gmail.com' target="_blank" rel="noreferrer" className='contactLink'>
                    <img src={email} alt='LinkedIn Logo' height='125rem' />
                    <p>Email</p>
                </a>
            </div>
        </div>
    )
}

export default ContactInfo