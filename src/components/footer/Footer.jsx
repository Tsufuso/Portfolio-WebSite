import React from 'react'
import './footer.css'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithubAlt } from 'react-icons/fa'

/**
 * Thêm link tại footer dòng 26
 * <li><a href="#testimonials">Testimonials</a></li>
 */

const Footer = () => {
    return (
        <footer>
<a href="/" className='footer__logo' onClick={(e) => e.preventDefault()}>Lalaoui Hassani Rayane</a>

            <ul className='permalinks'>
            <li><a href="/" onClick={(e) => e.preventDefault()}>Home</a></li>
            <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>

                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
            <a href="https://www.linkedin.com/in/rayane-lalaoui-hassani/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
<a href="https://github.com/Tsufuso" target="_blank" rel="noopener noreferrer"><FaGithubAlt /></a>

            </div >

            <div className="footer__copyright">
                <small>&copy; <b><a href="https://www.linkedin.com/in/rayane-lalaoui-hassani/">Lalaoui Hassani Rayane</a></b>. All rights reserved.</small>
            </div>
        </footer >
    )
}

export default Footer