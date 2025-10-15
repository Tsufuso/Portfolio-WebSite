import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Tag = ({ level }) => <small className="text-light">{level}</small>;

const Experience = () => {
  return (
    <section id="experience">
      <h5>Technical Skills</h5>
      <h2>My Cybersecurity Experience</h2>

      <div className="container experience__container">
        {/* ======================= COLONNE GAUCHE ======================= */}
        <div className="experience__col">
          <div className="experience__group">
            <h3>Programming Languages</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div><h4>HTML</h4><Tag level="Advanced" /></div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div><h4>CSS</h4><Tag level="Advanced" /></div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div><h4>JavaScript</h4><Tag level="Proficient" /></div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div><h4>Python</h4><Tag level="Advanced" /></div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div><h4>Java</h4><Tag level="Intermediate" /></div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div><h4>C</h4><Tag level="Advanced" /></div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div><h4>Node.js / React</h4><Tag level="Intermediate" /></div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div><h4>SQL &amp; NoSQL</h4><Tag level="Advanced" /></div>
              </article>
            </div>
          </div>

          <div className="experience__group">
            <h3>DevOps</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div><h4>Git / GitHub / GitLab</h4><Tag level="Advanced" /></div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div><h4>GitLab CI (Runners, Pipelines)</h4><Tag level="Proficient" /></div>
              </article>
            </div>
          </div>
        </div>

        {/* ======================= COLONNE DROITE ======================= */}
        <div className="experience__col">
          <div className="experience__group">
            <h3>Security Tools &amp; Methodologies</h3>
            <div className="experience__content">
              {[
                ['Kali Linux', 'Proficient'],
                ['Nmap', 'Advanced'],
                ['Wireshark', 'Advanced'],
                ['Burp Suite', 'Proficient'],
                ['Metasploit', 'Proficient'],
                ['OWASP ZAP', 'Proficient'],
                ['Nikto', 'Proficient'],
                ['SQLMap', 'Proficient'],
                ['Wapiti', 'Proficient'],
                ['Recon-ng', 'Proficient'],
                ['theHarvester', 'Proficient'],
                ['Dirb / Gobuster', 'Proficient'],
                ['Hydra / Netcat', 'Proficient'],
                ['SSLyze', 'Proficient'],
                ['OpenVAS', 'Proficient'],
                ['John / Hashcat', 'Proficient'],
                ['OWASP Web Pentest', 'Methodology'],
                ['ISO 27001 – Information Security Management System', 'Proficient'],
                ['Reporting & Risk Analysis', 'Professional'],
              ].map(([tool, lvl]) => (
                <article key={tool} className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div><h4>{tool}</h4><Tag level={lvl} /></div>
                </article>
              ))}
            </div>
          </div>

          <div className="experience__group">
            <h3>Azure &amp; Cloud Security</h3>
            <div className="experience__content">
              {[
                ['Azure Active Directory', 'Advanced'],
                ['Azure Firewall', 'Intermediate'],
                ['Microsoft Defender for Cloud', 'Advanced'],
                ['Azure Sentinel (SIEM)', 'Advanced'],
                ['Azure DDoS Protection', 'Advanced'],
                ['Azure Key Vault', 'Advanced'],
                ['Azure Database Security', 'Advanced'],
                ['Database Administration', 'Proficient'],
                ['Networking', 'Proficient'],
              ].map(([item, lvl]) => (
                <article key={item} className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div><h4>{item}</h4><Tag level={lvl} /></div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

    <div className="languages__container">
  <h3>Languages</h3>
  <ul className="languages__list">
    <li>French — Fluent</li>
    <li>English — Professional</li>
    <li>Arabic — Fluent</li>
  </ul>
</div>

    </section>
  );
};

export default Experience;
