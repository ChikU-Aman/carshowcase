import React from 'react'
import './CarCard.css'
import { Image } from 'react-bootstrap'
import image from '../../assests/hero.png'
import steeringWheel from '../../assests/steering-wheel.svg'
import tire from '../../assests/tire.svg';
import gas from '../../assests/gas.svg'

const CarCard = () => {
  return (
    <div className='car-card'>
      <div className='car-card__content'>
        <h2 className='car-card__content-title'>
          Scoripio Scorpio
        </h2>
      </div>
      <p className='car-card__content-para'>
        <span className='car-card__content-para-span'>$</span>
        5000
        <span className='car-card__content-para--span'>/day</span>
      </p>
      <div className='car-card__Image_container'>
        <Image
          width={250}
          height={150}
          src={image}
          alt='car image'
          style={{ "objectFit": "contain" }}
        />
      </div>
      <div className='car-card__details'>
        <div className='card-cards__details'>
          <div className='car-cards__spec'>
            <Image src={steeringWheel} width={20} height={20} alt='steering wheel' />
            <p style={{ "fontSize": "14px", "lineHeight": "17px" }}>
              Automatic
            </p>
          </div>
          <div className='car-card__icon'>
            <Image src={tire} width={20} height={20} alt='seat' />
            <p className='car-card__icon-text'>5</p>
          </div>
          <div className='car-card__icon'>
            <Image src={gas} width={20} height={20} alt='seat' />
            <p className='car-card__icon-text'>13 KM/L</p>
          </div>
        </div>
        <div className='car-card__btn-container'>
          <button style={{ "backgroundColor": "black" }}>Click Me</button>
        </div>
      </div>
    </div>
  )
}

export default CarCard