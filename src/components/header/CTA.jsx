import React from 'react'
import CV_EN from '../../assets/CV-EN.pdf'
import CV_FR from '../../assets/CV-FR.pdf'

const CTA = () => {
  return (
    <div className="cta">
      <a
        href={CV_EN}
        download="CV-EN-RAYANE_LALAOUI_HASSANI.pdf"
        className="btn"
      >
        Download CV (EN)
      </a>

      <a
        href={CV_FR}
        download="CV-FR-RAYANE_LALAOUI_HASSANI.pdf"
        className="btn btn-primary"
      >
        Télécharger CV (FR)
      </a>

      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  )
}

export default CTA