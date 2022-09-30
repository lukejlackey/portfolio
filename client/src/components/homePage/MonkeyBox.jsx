import React from 'react'
import HeadingBox from './HeadingBox'
import monke3 from '../../assets/img/monke3.png'

const MonkeyBox = () => {
    return (
        <div id='monkeyBox'>
            <HeadingBox content='greeting' />
            <div id='monkey3'>
                <img src={monke3} alt='Purple monkey' />
            </div>
            <HeadingBox content='skills' />
        </div>
    )
}

export default MonkeyBox