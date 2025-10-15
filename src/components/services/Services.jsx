import React from 'react'
import './services.css'
import { BsCheckLg } from 'react-icons/bs'

const Services = () => {
    return (
        <section id='services'>
            <h5>What I Know</h5>
            <h2>Learning and Achievement</h2>

            <div className="container services__containter">
                
                {/* ===== Core Cybersecurity Skills ===== */}
                <article className="service">
                    <div className="service__head">
                        <h3>Core Cybersecurity Skills</h3>
                    </div>
                    <ul className='service__list'>
                        <li><BsCheckLg className='service__list-icon' /><p>Web Application Penetration Testing (OWASP Top 10 — SQLi, XSS, IDOR)</p></li>
                        <li><BsCheckLg className='service__list-icon' /><p>Server & Infrastructure Security Hardening (Firewall, DDoS, IAM)</p></li>
                        <li><BsCheckLg className='service__list-icon' /><p>Threat Reconnaissance & Attack Surface Mapping (Recon-ng, theHarvester)</p></li>
                        <li><BsCheckLg className='service__list-icon' /><p>Exploit Verification & Risk Analysis with Metasploit, Burp Suite, and OpenVAS</p></li>
                        <li><BsCheckLg className='service__list-icon' /><p>Incident Response, SIEM Monitoring & Threat Management (Azure Sentinel)</p></li>
                        <li><BsCheckLg className='service__list-icon' /><p>Identity & Access Management (Azure AD, MFA, Role-Based Access Control)</p></li>
                        <li><BsCheckLg className='service__list-icon' /><p>Database Security & Data Encryption — SQL/NoSQL, MongoDB, Azure DB</p></li>
                        <li><BsCheckLg className='service__list-icon' /><p>Security Reporting, Documentation, and Risk Mitigation Strategies</p></li>
                        <li><BsCheckLg className='service__list-icon' /><p>AI & Prompt Engineering for Security Automation and Threat Analysis</p></li>
                    </ul>
                </article>

                {/* ===== Certifications & Recognitions ===== */}
                <article className="service">
                    <div className="service__head">
                        <h3>Certifications & Recognitions</h3>
                    </div>
                    <ul className='service__list'>
                        <li><BsCheckLg className='service__list-icon' /><p><b>Microsoft Certified: Azure Security Engineer Associate (AZ-500)</b> – in progress</p></li>
                        <li><BsCheckLg className='service__list-icon' /><p><b>Microsoft Certified: Cybersecurity Architect Expert</b> – in progress</p></li>
                        <li><BsCheckLg className='service__list-icon' /><p><b>Microsoft Certified: Azure Fundamentals (AZ-900)</b> – 2025</p></li>
                        <li><BsCheckLg className='service__list-icon' /><p><b>EC-Council: Ethical Hacking Essentials (EHE)</b> – 2024</p></li>
                        <li><BsCheckLg className='service__list-icon' /><p><b>Cisco: Junior Cybersecurity Analyst</b> – 2023</p></li>
                        <li><BsCheckLg className='service__list-icon' /><p><b>Fortinet Certified Fundamentals in Cybersecurity</b> – 2022</p></li>
                        <li><BsCheckLg className='service__list-icon' /><p><b>PMI: Generative AI Overview for Project Managers</b> – 2024</p></li>
                        <li><BsCheckLg className='service__list-icon' /><p><b>Engineering Degree in Computer Science — Cybersecurity Specialization</b> (UIR, 2021–2026)</p></li>
                    </ul>
                </article>

                {/* ===== Security Technologies & Platforms ===== */}
                <article className="service">
                    <div className="service__head">
                        <h3>Security Technologies & Platforms</h3>
                    </div>
                    <ul className='service__list'>
                        <li><BsCheckLg className='service__list-icon' /><p>Microsoft Azure — Sentinel, Defender, Firewall, Key Vault, DDoS Protection</p></li>
                        <li><BsCheckLg className='service__list-icon' /><p>Kali Linux, Burp Suite, Metasploit, SQLMap, Nikto, Wapiti, Hydra, Gobuster</p></li>
                        <li><BsCheckLg className='service__list-icon' /><p>CI/CD Pipeline Automation — GitLab CI, Runners, Checkstyle, SonarQube</p></li>
                        <li><BsCheckLg className='service__list-icon' /><p>Cloud Infrastructure Security (NTT Data Internship): Azure Policy Hardening</p></li>
                        <li><BsCheckLg className='service__list-icon' /><p>Threat Intelligence & Monitoring Tools — OWASP ZAP, Recon-ng, OpenVAS</p></li>
                        <li><BsCheckLg className='service__list-icon' /><p>Database Administration & Security — PostgreSQL, Azure SQL, MongoDB</p></li>
                        <li><BsCheckLg className='service__list-icon' /><p>Network Forensics & Analysis — Wireshark, Nmap, SSLyze, Netcat</p></li>
                        <li><BsCheckLg className='service__list-icon' /><p>Secure Coding Practices & Vulnerability Remediation Support (Alten Internship)</p></li>
                        <li><BsCheckLg className='service__list-icon' /><p>AI Integration in Cybersecurity — ML for anomaly detection & decision systems</p></li>
                    </ul>
                </article>

            </div>
        </section>
    )
}

export default Services
