import React, { useState } from 'react';
import './portfolio.css';

const PDF_SIEM = process.env.PUBLIC_URL + '/Projet-Integre-SIEM-Final-V2.pdf';
const SDWAN_ZIP = process.env.PUBLIC_URL + '/SDNWAN-security.zip';
const SDWAN_IMG = process.env.PUBLIC_URL + '/sdwan-architecture.png';

const data5thYear = [
  {
    id: 9,
    title: 'Project: SIEM Implementation & Attacks Simulations',
    download: PDF_SIEM,
  },
   {
    id: 10,
    title: 'Project: SD-WAN Hybrid Security',
    download: SDWAN_ZIP,
    details: {
      image: SDWAN_IMG,
      description:
        'Design and deployment of a secure hybrid network between an on-premise pfSense SD-WAN edge and Microsoft Azure. ' +
        'The solution integrates Azure Virtual Network, NSGs, Azure Firewall and a site-to-site IPsec VPN to securely route and inspect traffic ' +
        'between local services and cloud workloads, while centralising security policies and monitoring.',
    },
  },
];

/* 
const data5thYear = [
    {
        id: 9,
        title: '5th Year University - Project: Advanced Cybersecurity Strategies ',
        github: '',
    },
    {
        id: 10,
        title: '5th Year University - Project: Enterprise Security Architecture',
        github: '',
    }
];*/

const data4thYear = [
  {
    id: 5,
    title: 'Project: Azure Cloud Web game quiz',
    download: '/cloudprojet.zip',
  },
  {
    id: 6,
    title: 'Project: AI TasteLens',
    github: 'https://github.com/Tsufuso/TasteLens',
  },
  {
    id: 7,
    title: 'Project: Software-Defined Mobile Network Research',
    github: 'https://github.com/Tsufuso/Software-Defined-Mobile-Network',
  },
  {
    id: 8,
    title: 'Project: MITM Attack Network Simulation',
    download: '/MITM_PROJECT.zip',
  },
];

const data3rdYear = [
  {
    id: 1,
    title: 'Project: University Restaurant',
    github: 'https://github.com/Tsufuso/restaurant-universitaire',
  },
  {
    id: 2,
    title: 'Project: Library Management',
    github: 'https://github.com/Tsufuso/Gestion-Biblioth-que.git',
  },
  {
    id: 3,
    title: 'Project: Storage Product Management',
    github: 'https://github.com/Tsufuso/Gestion-Produit-Stock-maven.git',
  },
  {
    id: 4,
    title: 'Project: Todo Tasks',
    github: 'https://github.com/Tsufuso/System-Programming-and-Administration.git',
  },
];

const Portfolio = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalProject, setModalProject] = useState(null);

  const openModal = (project) => {
    setModalProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalProject(null);
  };

  return (
    <section id='portfolio'>
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <h2>5th Year University</h2>
      <div className='container portfolio__container'>
        {data5thYear.map(({ id, title, github, download, details }) => (
          <article key={id} className='portfolio__item'>
            <h3>{title}</h3>
            <div className='portfolio__item-cta'>
              {download && (
                <a
                  href={download}
                  className='btn'
                  download={id === 9 ? 'Projet-Integre-SIEM-Final-V2.pdf' : undefined}
                >
                  Download
                </a>
              )}

              {details && (
                <button
                  type='button'
                  className='btn'
                  onClick={() => openModal({ title, details })}
                >
                  Details
                </button>
              )}

              {!download && github && !details && (
                <a href={github} className='btn' target='_blank' rel='noreferrer'>
                  Github
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
      <br />

      <h2>4th Year University</h2>
      <div className='container portfolio__container'>
        {data4thYear.map(({ id, title, github, download }) => (
          <article key={id} className='portfolio__item'>
            <h3>{title}</h3>
            <div className='portfolio__item-cta'>
              {download ? (
                <a href={download} className='btn' download>
                  Download
                </a>
              ) : (
                <a href={github} className='btn' target='_blank' rel='noreferrer'>
                  Github
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
      <br />

      <h2>3rd Year University</h2>
      <div className='container portfolio__container'>
        {data3rdYear.map(({ id, title, github }) => (
          <article key={id} className='portfolio__item'>
            <h3>{title}</h3>
            <div className='portfolio__item-cta'>
              <a href={github} className='btn' target='_blank' rel='noreferrer'>
                Github
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* Modal SD-WAN */}
      {showModal && modalProject && (
        <div className='modal-overlay' onClick={closeModal}>
          <div className='modal-content' onClick={(e) => e.stopPropagation()}>
            <button className='modal-close' type='button' onClick={closeModal}>
              ✕
            </button>

            <h3>{modalProject.title}</h3>

            {modalProject.details.image && (
              <img
                src={modalProject.details.image}
                alt='SD-WAN Architecture'
                className='modal-img'
              />
            )}

            {modalProject.details.description && (
              <p className='modal-description'>{modalProject.details.description}</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
