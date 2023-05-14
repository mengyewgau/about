import React from 'react';
import './skill.css';
import {
  SiRstudio,
  SiJava,
  SiPython,
  SiJavascript
} from 'react-icons/si';
import { ImStatsDots, ImDatabase } from 'react-icons/im';

const Skill = () => {
  const dataAnalyticsSkills = [
    {
      icon: <SiPython className='skills_details-icon' />,
      title: 'Python',
      technologies: 'PySpark | Selenium | BS4 | Pandas',
      experience: 'Experienced'
    },
    {
      icon: <SiRstudio className='skills_details-icon' />,
      title: 'RStudio',
      technologies: '',
      experience: 'Experienced'
    },
    {
      icon: <ImDatabase className='skills_details-icon' />,
      title: '(No)SQL',
      technologies: 'SQL | MongoDB | BigQuery',
      experience: 'Experienced'
    },
    {
      icon: <ImStatsDots className='skills_details-icon' />,
      title: 'Market Research',
      technologies: 'Bloomberg | Factiva',
      experience: 'Experienced'
    }
  ];

  const softwareEngineeringSkills = [
    {
      icon: <SiJava className='skills_details-icon' />,
      title: 'Frontend',
      technologies: 'ReactJS | Ruby | VueJS',
      experience: 'Intermediate'
    },
    {
      icon: <SiJavascript className='skills_details-icon' />,
      title: 'Backend',
      technologies: 'Java (SpringBoot) | NodeJS | ExpressJS',
      experience: 'Intermediate'
    },
    {
      icon: <SiPython className='skills_details-icon' />,
      title: 'Data Engineering',
      technologies: 'Apache Airflow | Kafka',
      experience: 'Experienced'
    }
  ];

  const renderSkills = (skills) => {
    return skills.map((skill, index) => (
      <article className='skill_details' key={index}>
        {skill.icon}
        <div>
          <h4>{skill.title}</h4>
          <h5>{skill.technologies}</h5>
          <small className='text-light'>{skill.experience}</small>
        </div>
      </article>
    ));
  };

  return (
    <section id='skill'>
      <h2>Skills</h2>
      <div className='container skill_container'>
        <div className='skill_dsa'>
          <h3>Data Analytics</h3>
          <div className='skill_content'>{renderSkills(dataAnalyticsSkills)}</div>
        </div>

        <div className='skill_swe'>
          <h3>Software Engineering</h3>
          <div className='skill_content'>{renderSkills(softwareEngineeringSkills)}</div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
