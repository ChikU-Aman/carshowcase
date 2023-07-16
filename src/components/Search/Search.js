import React from 'react'
import './Search.css'
import { Image } from 'react-bootstrap'
import searchImage from '../../assests/model-icon.png'
import searchImg from '../../assests/magnifying-glass.svg'
import SearchManufacture from './SearchManufacture'

const SearchButton = () => {
  return (
    <button className='searchButton'>
      <Image
        src={searchImg}
        width={40}
        height={40}
        style={{ "objectFit": "contain" }}></Image>
    </button>
  )
}

const Search = () => {
  return (
    <form className='searchbar'>
      <div className='searchbar__item'>
        <SearchManufacture/>
        <SearchButton />
      </div>
      <div className='searchbar__item'>
        <Image
          src={searchImage}
          width={25}
          height={25}
          className='searchImg'
          alt='car mode' />
        <input
          type='text'
          name='model'
          placeholder='Mahindra...'
          className='searchbar__input'
        />
        <SearchButton />
      </div>
      <SearchButton />
    </form>
  )
}

export default Search