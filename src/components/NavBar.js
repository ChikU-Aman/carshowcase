import React from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import carLogo from '../assests/logo.png'
import SignInButton from './SignInButton'

const NavBar = () => {
    return (
        <header className='w-full absolute z-10'>
            <nav className='max-w-[1440px] mx-auto
                            flex justify-between items-center
                            sm:px-16 px-6 py-4 bg-transparent'>
                <Link href="/" className='flex justify-center
                                        items-center'>
                    <Image src={carLogo} alt="Car logo" 
                            width={168}
                            height={38}
                            className="object-contain"/>
                </Link>
                <SignInButton
                    text="Sign In"
                    containerStyles='text-primary-blue
                     rounded-full bg-white min-w-[130px]'
                />           

            </nav>
        </header>
    )
}

export default NavBar