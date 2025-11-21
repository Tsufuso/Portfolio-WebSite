import React, { useState, useEffect } from 'react'
import './nav.css'
import { BiHomeHeart, BiUser, BiBookBookmark, BiMessageSquareDetail } from 'react-icons/bi'
import { HiDocumentDuplicate } from 'react-icons/hi'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  // Scroll spy : met à jour l’onglet actif selon la position de scroll
  useEffect(() => {
    const sectionIds = ['about', 'experience', 'portfolio', 'contact']

    const handleScroll = () => {
      const scrollY = window.pageYOffset
      let current = '#'

      sectionIds.forEach((id) => {
        const section = document.getElementById(id)
        if (section) {
          const sectionTop = section.offsetTop - 200 // marge pour déclencher un peu avant
          if (scrollY >= sectionTop) {
            current = `#${id}`
          }
        }
      })

      setActiveNav(current)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // pour init

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setActiveNav('#')
  }

  const scrollToSection = (e, id) => {
    e.preventDefault()
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
    setActiveNav(`#${id}`)
  }

  return (
    <nav>
      <a
        href="#"
        onClick={scrollToTop}
        className={activeNav === '#' ? 'active' : ''}
      >
        <BiHomeHeart />
      </a>

      <a
        href="#about"
        onClick={(e) => scrollToSection(e, 'about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <BiUser />
      </a>

      <a
        href="#experience"
        onClick={(e) => scrollToSection(e, 'experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <BiBookBookmark />
      </a>

      <a
        href="#portfolio"
        onClick={(e) => scrollToSection(e, 'portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}
      >
        <HiDocumentDuplicate />
      </a>

      <a
        href="#contact"
        onClick={(e) => scrollToSection(e, 'contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  )
}

export default Nav