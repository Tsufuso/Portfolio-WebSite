import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5> Hello I'm</h5>
                <h1>Rayane Lalaoui Hassani</h1>
                <h5 className="text-light">Cybersecurity student specialized in Azure Cloud Security  & Data Security /IA Security and Infrastracture Security</h5>
                <CTA />
                <HeaderSocials />

                <div className="me">
                </div>

                <a href="#contact" className='scroll__down'>Scroll Downs</a>
            </div>
        </header>
    )
}

export default header