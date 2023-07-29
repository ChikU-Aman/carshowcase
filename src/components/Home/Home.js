import React from 'react'
import './home.css'
import HomeScreen from '../HomeScreen/HomeScreen'
import Search from '../Search/Search'
import CustomFilter from '../CustomFilter/CustomFilter'
import { fuels } from '../../constants/fuels'
import { yearsOfProduction } from '../../constants/yearOfProduction'
import CarCard from '../CarCard/CarCard'

const Home = () => {

    const allCars = [1,2,3,4,5,6];
    const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
    return (
        <main style={{ "overflow": 'hidden' }}>
            <HomeScreen />
            <div className='container'>
                <div className='home__text-container'>
                    <h1 className='home__text'>Car Catalogue</h1>
                    <p>Explore out cars you might like</p>
                </div>
                <div className='home__filters'>
                    <Search />
                    <div className='home__custom-filter'>
                        <CustomFilter title='fuel' options={fuels} />
                        <CustomFilter title='year' options={yearsOfProduction} />
                    </div>
                </div>
                {!isDataEmpty?(
                    <section>
                        <div className='home__cars-wrapper'>
                            {
                                allCars?.map((car) =>{
                                    return <CarCard car={car}/>
                                })
                            }
                        </div>
                    </section>
                ):
                (
                    <div className='home__error-container'>
                        <h2 style={{"color":"rgb(0,0,0,1)","fontSize":"20px","lineHeight":"28px","fontWeight":"bold"}}>Oops, no results</h2>
                        <p>{allCars?.message}</p>
                    </div>
                )}
            </div>
        </main>
    )
}

export default Home