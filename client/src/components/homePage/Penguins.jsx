import React from 'react'
import penguin from '../../assets/img/penguin.png'


const Penguins = () => {
    return (
        <div id="penguins">
            <div id='penguin1'>
                <img src={penguin} alt='Purple penguin' className='penguin' />
            </div>
            <div id='penguin2'>
                <img src={penguin} alt='Purple penguin' className='penguin' />
            </div>
            <div className='sidePenguin'>
                <img src={penguin} alt='Purple penguin' className='penguin' />
            </div>
        </div>
    )
}

export default Penguins