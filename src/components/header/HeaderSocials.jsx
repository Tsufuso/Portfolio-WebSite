import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { ImBlogger2 } from 'react-icons/im'
import { RiDiscordLine } from 'react-icons/ri'


const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/rayane-lalaoui-hassani/" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/Tsufuso" target="_blank"><FaGithub /></a>
        </div>
    )
}

export default HeaderSocials