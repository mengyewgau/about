import React, { useEffect, useState } from 'react';
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {HiAcademicCap} from 'react-icons/hi'
import {BsFillFolderSymlinkFill} from 'react-icons/bs'

const aboutMe = "As an undergraduate at the National University of Singapore, I am currently pursuing a double degree in Business Administration (Finance) and Business Analytics (Machine Learning). Throughout my academic journey, I have actively sought internships in diverse industries, taking on varying roles and responsibilities. It was during these experiences that I discovered my strong inclination towards software engineering, particularly in the context of finance. This realization has fueled my passion to pursue a career at the intersection of technology and finance."

const About = () => {

  return (
      <section id="about">
        <h5> Who am I?</h5>
        <h2> About Me</h2>

        <div className='container about__container'>
          <div className='about__me'>
            <div className='about__me-image'>
              <img src={ME} alt="About Image" />
            </div>
          </div>


          <div className='about__content'>
            <div className='about__me-cards'>
              <article className='about__card'>
                <a href="#experience">
                  <FaAward className='about__card__icon'/>
                  <h5>Experience</h5>
                </a>
                
              </article>

              <article className='about__card'>
                <a href="#skill">
                <HiAcademicCap className='about__card__icon'/>
                <h5>Skills</h5>
                </a>
              </article>

              <article className='about__card'>
                <a href="#portfolio">
                  <BsFillFolderSymlinkFill className='about__card__icon'/>
                  <h5>Projects</h5>
                </a>
              </article>
            </div>

            <p>{aboutMe}</p>

            <a href="#contact" className='btn btn-primary'>Talk to me!</a>

          </div>

        </div>

      </section> 
    )
}

export default About