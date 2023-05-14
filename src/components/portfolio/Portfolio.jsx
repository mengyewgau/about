import React from 'react'
import './portfolio.css'
import portfolio1 from '../../assets/portfolio1.jpg'
import portfolio2 from '../../assets/portfolio2.png'
import portfolio3 from '../../assets/portfolio3.jpg'
import portfolio4 from '../../assets/portfolio4.png'
import portfolio5 from '../../assets/portfolio5.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>Projects</h2>
      <div className='container portfolio_container'>
       {
        data.map(({id, image, title, skills, github}) => {
          return (
            <article key={id} className='portfolio_item'>
              <div className='portfolio_item-img'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <small className='portfolio_item-skills'>{skills}</small>
              <div className='portfolio_item-cta'>
                {/* <a href={rmPreview} download className='btn'> 
                Preview
                </a> */} 
                {/* demo button above*/}
                <a href={github} className='btn btn-primary' target='_blank' rel="noreferrer">
                  View Project
                </a>
              </div>
            </article>
          )
        })
       }
      </div>
    </section>
  )
}

const data = [
  {
    id: 5,
    image: portfolio5,
    title: 'NFT Price Predictor Pipeline',
    skills: 'Apache Airflow | BigQuery | ETL',
    github: 'https://github.com/mygau91/IS3107_Group_16',
    demo: '',
  },
  {
    id: 4,
    image: portfolio4,
    title: 'OptiRound',
    skills: 'VBA',
    github: 'https://uvents.nus.edu.sg/event/22nd-steps/module/IS4250/project/4',
    demo: '',
  },
  {
    id: 3,
    image: portfolio3,
    title: 'ALS Database',
    skills: 'MySQL | SQLAlchemy | Pillow | Tkinter',
    github: 'https://github.com/mygau91/ALSDatabase',
    demo: '',
  },
  {
    id: 2,
    image: portfolio2,
    title: 'OCBC Digital Transformation',
    skills: 'Risk Assessment | Market Research',
    github: 'https://drive.google.com/file/d/1G3Noo4GCkucmVQZxCqL-pxblLZVLssjb/view?usp=share_link',
    demo: '',
  },
  {
    id: 1,
    image: portfolio1,
    title: 'Risk Management in Tech Industry',
    skills: 'VaR | Risk Assessment | Financial Risk Management',
    github: "https://drive.google.com/file/d/1sJ23V4Enz8zfPwggkWQVjQPGQPrwMoTM/view?usp=sharing",
    demo: '',
  },
]

export default Portfolio