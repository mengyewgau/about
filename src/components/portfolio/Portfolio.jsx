import React from "react";
import "./portfolio.css";
import portfolio1 from "../../assets/portfolio1.jpg";
import portfolio2 from "../../assets/portfolio2.png";
import portfolio3 from "../../assets/portfolio3.jpg";
import portfolio4 from "../../assets/portfolio4.png";
import portfolio5 from "../../assets/portfolio5.jpg";
import portfolio6 from "../../assets/portfolio6.png";
import portfolio7 from "../../assets/portfolio7.png";
import portfolio8 from "../../assets/portfolio8.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Projects</h2>
      <div className="container portfolio_container">
        {data.map(({ id, image, title, skills, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-img">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <small className="portfolio_item-skills">{skills}</small>
              <div className="portfolio_item-cta">
                <a href={demo} download className="btn">
                  Preview
                </a>
                <a
                  href={github}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

const data = [
  {
    id: 8,
    image: portfolio8,
    title: "Smartfolio",
    skills: "ExpressJS | Vue.js | Node.js | Docker | Python | Optimisation",
    github: "https://github.com/mengyewgau/Smartfolio",
    demo: "https://smartfolio-16224.web.app/",
  },
  {
    id: 7,
    image: portfolio7,
    title: "BookIt",
    skills: "ExpressJS | ReactJS | Node.js",
    github: "https://github.com/mengyewgau/BookIt",
    demo: "https://bookit-398804.as.r.appspot.com/",
  },
  {
    id: 6,
    image: portfolio6,
    title: "SSID",
    skills: "Ruby on Rails | HTML | CSS | JS",
    github: "https://github.com/WING-NUS/SSID",
    demo: "https://github.com/WING-NUS/SSID",
  },
  {
    id: 5,
    image: portfolio5,
    title: "NFT Price Predictor Pipeline",
    skills: "Apache Airflow | BigQuery | Python",
    github: "https://github.com/mengyewgau/IS3107_Group_16",
    demo: "https://github.com/mengyewgau/IS3107_Group_16",
  },
  {
    id: 4,
    image: portfolio4,
    title: "OptiRound",
    skills: "VBA | Optimisation",
    github:
      "https://uvents.nus.edu.sg/event/22nd-steps/module/IS4250/project/4",
    demo: "https://uvents.nus.edu.sg/event/22nd-steps/module/IS4250/project/4",
  },
  {
    id: 3,
    image: portfolio3,
    title: "ALS Database",
    skills: "MySQL | SQLAlchemy | Pillow | Tkinter",
    github: "https://github.com/mengyewgau/ALSDatabase",
    demo: "https://github.com/mengyewgau/ALSDatabase",
  },
  {
    id: 2,
    image: portfolio2,
    title: "OCBC Digital Transformation",
    skills: "Risk Assessment | Market Research",
    github:
      "https://drive.google.com/file/d/1G3Noo4GCkucmVQZxCqL-pxblLZVLssjb/view?usp=share_link",
    demo: "https://drive.google.com/file/d/1G3Noo4GCkucmVQZxCqL-pxblLZVLssjb/view?usp=share_link",
  },
  {
    id: 1,
    image: portfolio1,
    title: "Risk Management in Tech Industry",
    skills: "VaR | Risk Assessment | Financial Risk Management",
    github:
      "https://drive.google.com/file/d/1sJ23V4Enz8zfPwggkWQVjQPGQPrwMoTM/view?usp=sharing",
    demo: "https://drive.google.com/file/d/1sJ23V4Enz8zfPwggkWQVjQPGQPrwMoTM/view?usp=sharing",
  },
];

export default Portfolio;
