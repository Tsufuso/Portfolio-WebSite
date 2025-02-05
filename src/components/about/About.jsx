import React from 'react';
import './about.css';
import ME from '../../assets/me-about.png';
import { FaAward } from 'react-icons/fa';
import { TbCertificate } from 'react-icons/tb';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
    return (
        <section id='about'>
            <h5>Discover More</h5>
            <h2>Who I Am</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="Profile" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Professional Experience</h5>
                            <small>Extensive Background</small>
                        </article>

                        <article className='about__card'>
                            <TbCertificate className='about__icon' />
                            <h5>Certifications</h5>
                            <small>Over 10 Professional Certifications</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Completed Educational Projects</h5>
                            <small>4+ Successfully Delivered</small>
                        </article>
                    </div>

                    <p>
                    Welcome to my cybersecurity portfolio! Explore a variety of academic projects, professional certifications, and hands-on experiences. 
                    I specialize in Cloud Azure security and data protection, showcasing my expertise and growth within the cybersecurity domain.
                    </p>

                    <a href="#contact" className='btn btn-primary'>Get in Touch</a>
                </div>
            </div>
        </section>
    );
};

export default About;
