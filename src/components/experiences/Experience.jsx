import React from "react";
import "./experience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Check out my CV for more details!</h5>
      <h2>Work experiences</h2>
      <div className="container experience__container">
        <VerticalTimeline className="VTE">
          {timelineElements.map((expElement) => (
            <VerticalTimelineElement
              key={expElement.id}
              date={expElement.date}
              contentStyle={{ background: "#022140", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #022140" }}
            >
              <h3 className="workPosition">{expElement.title}</h3>
              <h5 className="workFirm">{expElement.company}</h5>
              <h5 className="workLoc">{expElement.location}</h5>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

const timelineElements = [
  {
    id: 6,
    title: "Data Scientist Intern",
    company: "SeaMoney (Shopee)",
    location: "Singapore",
    description: "",
    date: "Feb 2023 - Jul 2023",
  },
  {
    id: 5,
    title: "Data Analyst Intern",
    company: "data.ai formerly App Annie",
    location: "Singapore",
    description:
      "• Developed SQL queries for retrieval of product and performance data from Snowflake, which were used for dashboard development to visualise the company and team’s performance \n•  Designed dashboards that visualised current product performance and its variance across different countries and categories through time series and descriptive analysis\n• Conducted a diagnostic analysis on product requests and feedback, using time series and statistical coverage to determine the gaps in performance and built a dashboard for visualisation of results",
    date: "Aug 2022 - Jan 2023",
  },
  {
    id: 4,
    title: "Strategy Analyst Intern",
    company: "Pufferfish Partners",
    location: "Singapore",
    description:
      "• Designed and developed automation with Selenium and BeautifulSoup4 for LinkedIn functions including lead generation and outreach with Selenium, reducing research time by 83% \n• Initiated the data collection and analysis of business development leads under a Sales Acceleration project, generating 77.9% more sales qualified leads\n• Performed correlation analysis with Matplotlib and NumPy on survey feedback of a prototype program in collaboration with NTU, analysis was validated by MD and NTU stakeholders",
    date: "May 2022 - Aug 2022",
  },
  {
    id: 3,
    title: "Project Intern, ESG Scale Up Program",
    company: "McKinsey Co",
    location: "Singapore",
    description:
      "•	Initiated market research for a local shipbuilding start-up, forecasting the industry outlook in Singapore and market opportunities upcoming in the next 5 years; results were validated by the client company’s senior management",
    date: "Mar 2022 - May 2022",
  },
  {
    id: 2,
    title: "Research Intern",
    company: "Fewcents Co",
    location: "Singapore",
    description:
      '• Developed automation tools to aid with market research in micropayments and maintenance of business intelligence in data with Selenium, reducing lead research and data collection time by 55%{"\n"}• Initiated and designed a data checking system to verify duplicates and errors in data collection, saving 30% in data collection time',
    date: "Nov 2021 - Jan 2022",
  },
];

export default Experience;
