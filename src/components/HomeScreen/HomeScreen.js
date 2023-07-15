import React from 'react'
import './HomeScreen.css'
import { Image } from 'react-bootstrap'
import bgImage from '../../assests/hero.png'
const HomeScreen = () => {
    return (
        <div className='homeScreen'>
            <div className='sub_screen'>
                <h1 className='screen__title'>
                    Find, book, rent a car-quick and super easy!
                </h1>

                <p className='screen__subtitle'>
                    Streamline you car rental experience with our effortless booking
                    process.
                </p>
                <button className='explore__button'
                    type='button'
                >
                    <span style={{"flex":"1 1 0%"}}>Explore Cars</span>
                </button>
            </div>
            <div className='screen__image-container'>
                <div className='screen__image'>
                    <Image className='fort-image' src={bgImage} />
                </div>
                <div className='screen__image-overlay'></div>
            </div>
        </div>
    )
}

export default HomeScreen