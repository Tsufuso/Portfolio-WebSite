import React from 'react';
import './about.css';
import { FaAward } from 'react-icons/fa';
import { TbCertificate } from 'react-icons/tb';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Discover More</h5>
      <h2>Who I Am</h2>

      <div className="container about__container">
        {/* Colonne gauche : 3 cartes */}
        <div className="about__cards">
          <article className="about__card">
            <FaAward className="about__icon" />
            <h5>Professional Experience</h5>
            <small>Extensive Background</small>
          </article>

          <article className="about__card">
            <TbCertificate className="about__icon" />
            <h5>Certifications</h5>
            <small>Over 6 Professional Certifications</small>
          </article>

          <article className="about__card">
            <VscFolderLibrary className="about__icon" />
            <h5>Completed Educational Projects</h5>
            <small>8+ Successfully Delivered</small>
          </article>
        </div>

        {/* Colonne droite : texte + bouton (centré verticalement au niveau de la 2e carte) */}
        <div className="about__content">
          <p>
            Cybersecurity student specialized in Azure Cloud Security, Data Security, AI Security, and Infrastructure Security. Explore a variety of academic projects, professional certifications, and hands-on experiences showcasing my expertise and growth within the cybersecurity domain.
          </p>
          <a href="#contact" className="btn btn-primary">Get in Touch</a>
        </div>
      </div>
    </section>
  );
};

export default About;
