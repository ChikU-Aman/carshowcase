import React, { useEffect, useState } from 'react'
import Hero from './Hero'
import NavBar from './NavBar'
import Footer from './Footer'
import { BrowserRouter } from 'react-router-dom'
import { fetchCars } from '../services/CarService'
import { Button } from 'react-bootstrap'

const Home = () => {

    const [allCars, setallCars] = useState([])

    const call = async() => {
        const header = {
            "X-RapidAPI-Key": "cb28dbbbcbmsh743529ecf61f440p1e2690jsn1bcfa6df407b",
            "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com"
        }
        const result = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
            {
                headers: header
            }
        ).then((response)=> response.json());
        setallCars(result);
    }
    
    useEffect(() => {

    }, [])
    return (
        <BrowserRouter>
            <NavBar />
            <main className='overflow-hidden'>
                <Hero />
                <button type='button' onClick={()=> call()}>Call me api</button>
            </main>
            <Footer />
        </BrowserRouter>
    )
}

export default Home