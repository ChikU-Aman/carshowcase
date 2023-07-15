import React from 'react'
import './Footer.css'
import { Image, NavLink } from 'react-bootstrap'
import logo from '../../assests/logo.png'
import { footerLinks } from '../../constants/footerLinks'
const Footer = () => {
    return (
        <footer className='footer__container'>
            <div className='footer__section'>
                <div className='footer'>
                    <Image src={logo} style={{ "objectFit": "contain" }} alt=''
                        width={118} height={18} />
                    <p className='footer__text'>
                        Carhub 2023 <br />
                        All Rights Reserved &copy;
                    </p>
                </div>
                <div className='footer__links'>
                    {footerLinks.map((item) => {
                        return <div key={item.title} className='footer__link'>
                            <h3 className='title'>{item.title}</h3>
                            <div className='subTitle'>
                                {
                                    item.links.map((link)=>{
                                        return <NavLink
                                                key={link.title}
                                                href={link.url}
                                                className='link__title'
                                                >
                                                    {link.title}                                            
                                        </NavLink>
                                    })
                                }
                            </div>
                        </div>
                    })}
                </div>
            </div>

        </footer>
    )
}

export default Footer