import React from 'react'
import './services.css'
import { BsCheckLg } from 'react-icons/bs'

const Services = () => {
    return (
        <section id='services'>
            <h5>What I Know</h5>
            <h2>Learning and Achievement</h2>

            <div className="container services__containter">
                {/* start Mô tả chi tiết */}
                <article className="service">
                    <div className="service__head">
                        <h3>Core Cybersecurity Skills</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Advanced Network Security & Risk Mitigation</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Threat Intelligence & Incident Management</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Ethical Hacking, Penetration Testing & Red Teaming</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Cloud Infrastructure Security with Microsoft Azure</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Encryption Technologies & Data Privacy Governance</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Identity and Access Management (IAM) Systems</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Comprehensive Database Security (SQL, NoSQL, MongoDB ...)</p>
                        </li>
                    </ul>
                </article>
                {/* End of ui/ux */}

                {/* start Mô tả chi tiết */}
                <article className="service">
                    <div className="service__head">
                        <h3>Certifications & Recognitions</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p><b>Microsoft Certified Azure Security Engineer Associate(AZ-500)</b></p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p><b>Microsoft Certified Azure Fundamentals(AZ-900)</b></p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p><b>EC-Council | Ethical Hacking Essentials (EHE)</b></p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p><b>Cisco | Junior Cybersecurity Analyst</b></p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p><b>PMI | Generative AI Overview for Project Managers</b></p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p><b>Fortinet Certified Fundamentals in Cybersecurity</b></p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p><b>Cisco | Introduction to Cybersecurity</b></p>
                        </li>
                    </ul>
                </article>
                {/* End of ui/ux */}

                {/* Mô tả chi tiết */}
                <article className="service">
                    <div className="service__head">
                        <h3>Security Technologies & Platforms</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Prompt Engineering for Enhanced Security Automation</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Azure Sentinel & Key Vault for Secure Operations</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Nmap & Wireshark for Advanced Network Diagnostics</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Metasploit Pro & Burp Suite & Kali Linux for Penetration Testing</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Azure Active Directory (Azure AD) for Identity Protection</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Microsoft Defender for Cloud - Threat Management</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>SIEM & Threat Intelligence Platforms for Monitoring</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>Database Hardening for SQL, NoSQL & MongoDB Systems</p>
                        </li>
                        <li>
                            <BsCheckLg className='service__list-icon' />
                            <p>AI-Powered Incident Response & Decision Support Systems</p>
                        </li>
                    </ul>
                </article>
                {/* End of ui/ux */}

            </div>
        </section>
    )
}

export default Services
