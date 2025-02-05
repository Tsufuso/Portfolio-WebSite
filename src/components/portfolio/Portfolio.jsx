import React from 'react';
import './portfolio.css';

const data5thYear = [
    {
        id: 9,
        title: '5th Year University - Project: Advanced Cybersecurity Strategies',
        github: 'https://github.com/example/cybersecurity-strategies',
    },
    {
        id: 10,
        title: '5th Year University - Project: Enterprise Security Architecture',
        github: 'https://github.com/example/security-architecture',
    }
];

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
    }
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
    }
];

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Projects</h5>
            <h2>Portfolio</h2>

            <h2>5th Year University</h2>
            <div className="container portfolio__container">
                {data5thYear.map(({ id, title, github }) => (
                    <article key={id} className='portfolio__item'>
                        <h3>{title}</h3>
                        <div className="portfolio__item-cta">
                            <a href={github} className='btn' target='_blank' rel='noreferrer'>Github</a>
                        </div>
                    </article>
                ))}
            </div><br></br>

            <h2>4th Year University</h2>
            <div className="container portfolio__container">
                {data4thYear.map(({ id, title, github, download }) => (
                    <article key={id} className='portfolio__item'>
                        <h3>{title}</h3>
                        <div className="portfolio__item-cta">
                            {download ? (
                                <a href={download} className='btn' download>Download</a>
                            ) : (
                                <a href={github} className='btn' target='_blank' rel='noreferrer'>Github</a>
                            )}
                        </div>
                    </article>
                ))}
            </div><br></br>


            <h2>3rd Year University</h2>
            <div className="container portfolio__container">
                {data3rdYear.map(({ id, title, github }) => (
                    <article key={id} className='portfolio__item'>
                        <h3>{title}</h3>
                        <div className="portfolio__item-cta">
                            <a href={github} className='btn' target='_blank' rel='noreferrer'>Github</a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;