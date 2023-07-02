import React from 'react'
import carLogo from '../assests/logo.png'
import { Image } from 'react-bootstrap'
import { footerLinks } from '../constants/footerLinks'
import { Link } from 'react-router-dom'
const Footer = () => {
    console.log(footerLinks)
    return (
        <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
            <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
                <div className='flex flex-col justify-start items-start gap-6'>
                    <Image src={carLogo} alt='logo' width={118} height={18} className='object-contain' />
                    <p className='text-base text-gray-700'>
                        CarHub 2023 <br />
                        All Rights Reserved &copy;
                    </p>
                </div>
            </div>

            <div className='footer__links'>
                {
                    footerLinks.map((item) => {
                        //return 
                        return <div key={item.title} className='footer__link'>
                            <h3 className='font-bold'>{item.title}</h3>
                            <div className='flex flex-col gap-5'>
                                {
                                    item.links.map((link)=>{
                                        return <Link key={link.title}
                                            href={link.url}
                                            className='text-gray-500'>
                                                {link.title}
                                            </Link>
                                    })
                                }
                            </div>
                        </div>
                    })
                }
            </div>
        </footer>
    )
}

export default Footer