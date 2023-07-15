import React from 'react'
import './home.css'
import HomeScreen from '../HomeScreen/HomeScreen'
import Search from '../Search/Search'
const Home = () => {
    return (
        <main style={{"overflow":'hidden'}}>
            <HomeScreen/>
            <div className='container'>
                <div className='home__text-container'>
                    <h1 className='home__text'>Car Catalogue</h1>
                    <p>Explore out cars you might like</p>
                </div>
                <div className='home__filters'>
                    <Search/>
                </div>
            </div>

        </main>
    )
}

export default Home