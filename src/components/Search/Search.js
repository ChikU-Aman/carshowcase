import React from 'react'
import './Search.css'
import { Image } from 'react-bootstrap'
import searchImage from '../../assests/model-icon.png'
const Search = () => {
  return (
    <form className='searchbar'>
        <div className='searchbar__item'>
        </div>
        <div className='searchbar__item'>
            <Image
            src={searchImage}
            width={25}
            height={25}
            className='searchImg'
            alt='car mode'/>
        <input
            type='text'
            name='model'
            placeholder='Mahindra...'
            className='searchbar__input'
        />
        </div>
    </form>
  )
}

export default Search