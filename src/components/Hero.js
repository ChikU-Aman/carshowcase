"use client"
import React from 'react'
import CustomButton from './CustomButton'
import fortunerImage from '../assests/hero.png'
import { Image } from 'react-bootstrap'

const Hero = () => {
    const handleScroll = () =>{

    }
  return (
    <div style={{"display":"flex"}}>
        <div style={{"flex":"1 1 0%"}} className="flex-1 pt-36 padding-x">
            <h1 className='hero__title'>
                Find, book, or rent a car -- quickly
                and easily!
            </h1>
            <p className='hero__subtitle'>
                Streamline your car rental experience
                with our effortless booking process.
            </p>

            <CustomButton
                title="Explore Cars"
                containerStyles="bg-primary-blue text-white rounded-full mt-10"
                handleClick={handleScroll}
            />

            <div className='hero__image-container'>
                <div className='hero__image'>
                    <Image style={{"objectFit":"contain"}} fill className='object-contain' src={fortunerImage} alt="hero"/>
                </div>
                <div className='hero__image-overlay'/>
            </div>
        </div>
    </div>
  )
}

export default Hero