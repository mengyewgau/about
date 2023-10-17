import React from "react";
import "./skill.css";
import {
  SiRstudio,
  SiJava,
  SiPython,
  SiFlask,
  SiJavascript,
  SiRuby,
  SiRubyonrails,
  SiMicrosoftexcel,
} from "react-icons/si";
import { ImStatsDots, ImDatabase } from "react-icons/im";
import { AiOutlineConsoleSql } from "react-icons/ai";
const Skill = () => {
  const frontendDevelopment = [
    {
      icon: <SiJavascript className="skills_details-icon" />,
      title: "JS | HTML | CSS",
      technologies: "ReactJS | VueJS",
      experience: "Experienced",
    },
    {
      icon: <SiRuby className="skills_details-icon" />,
      title: "Ruby",
      technologies: "",
      experience: "Experienced",
    },
  ];
  const backendDevelopment = [
    {
      icon: <SiJava className="skills_details-icon" />,
      title: "JAVA",
      technologies: "Springboot",
      experience: "Experienced",
    },
    {
      icon: <SiRubyonrails className="skills_details-icon" />,
      title: "Rails",
      technologies: "",
      experience: "Experienced",
    },
    {
      icon: <SiFlask className="skills_details-icon" />,
      title: "Flask",
      technologies: "",
      experience: "Experienced",
    },
  ];
  const dse = [
    {
      icon: <SiPython className="skills_details-icon" />,
      title: "Machine Learning",
      technologies: "PySpark | Pandas | Scikit-learn",
      experience: "Experienced",
    },
    {
      icon: <SiRstudio className="skills_details-icon" />,
      title: "RStudio",
      technologies: "",
      experience: "Experienced",
    },
    {
      icon: <AiOutlineConsoleSql className="skills_details-icon" />,
      title: "(No)SQL",
      technologies: "SQL | MongoDB | BigQuery",
      experience: "Experienced",
    },
    {
      icon: <ImDatabase className="skills_details-icon" />,
      title: "Data Engineering",
      technologies: "Apache Airflow | Kafka",
      experience: "Experienced",
    },
  ];
  const financeAndStats = [
    {
      icon: <ImStatsDots className="skills_details-icon" />,
      title: "Market Research",
      technologies: "Bloomberg | Factiva",
      experience: "Experienced",
    },

    {
      icon: <SiMicrosoftexcel className="skills_details-icon" />,
      title: "Financial Valuation and Modelling",
      technologies: "",
      experience: "Intermediate",
    },
  ];

  const renderSkills = (skills) => {
    return skills.map((skill, index) => (
      <article className="skill_details" key={index}>
        {skill.icon}
        <div>
          <h4>{skill.title}</h4>
          <h5>{skill.technologies}</h5>
          <small className="text-light">{skill.experience}</small>
        </div>
      </article>
    ));
  };

  return (
    <section id="skill">
      <h2>Skills</h2>
      <div className="container skill_container">
        <div className="skill_swe">
          <h3>Frontend Development</h3>
          <div className="skill_content">
            {renderSkills(frontendDevelopment)}
          </div>
        </div>

        <div className="skill_dsa">
          <h3>Backend Development</h3>
          <div className="skill_content">
            {renderSkills(backendDevelopment)}
          </div>
        </div>

        <div className="skill_dse">
          <h3>Data Science & Engineering</h3>
          <div className="skill_content">{renderSkills(dse)}</div>
        </div>

        <div className="skill_fin">
          <h3>Finance</h3>
          <div className="skill_content">{renderSkills(financeAndStats)}</div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
