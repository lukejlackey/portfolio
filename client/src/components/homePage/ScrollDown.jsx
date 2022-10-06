import React from 'react'
import downArrow from '../../assets/img/downArrow.png'

const ScrollDown = () => {
    return (
        <div className='scrollDown'>
            <img src={downArrow} alt='Down arrow' className='Arrow down' />
            <img src={downArrow} alt='Down arrow' className='Arrow down' />
            <img src={downArrow} alt='Down arrow' className='Arrow down' />
        </div>
    )
}

export default ScrollDown