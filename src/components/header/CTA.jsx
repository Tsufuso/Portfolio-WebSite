import React from 'react'
import CV_EN from '../../assets/CV-EN.pdf'
import CV_FR from '../../assets/CV-FR.pdf'

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV_EN} download className="btn">Download CV (EN)</a>
      <a href={CV_FR} download className="btn btn-primary">Télécharger CV (FR)</a>
                <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            </div>
    )
}

export default CTA