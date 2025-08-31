import React from 'react'
import './WorkExp.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { GrReactjs } from "react-icons/gr";
import { DiTechcrunch } from "react-icons/di";
import { useTheme } from "../../context/ThemeContext";

const WorkExp = () => {
  const [theme, setTheme] = useTheme();
  return (
    <>
      <div className="work" id='workexp'>
        <div className="container work-exp">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">work experience</h2>
        <hr />
        <VerticalTimeline lineColor='rgba(94, 192, 187, 0.112)'>
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: theme === "light" ? "#ADD8E6" : "#1e1e2c", 
    color:theme === "light" ? "black": "white" }}
    contentArrowStyle={{ borderRight: theme === "light" ? "7px solid white" : "7px solid #1e1e1e " }}
    date="May 2025 - June 2025"
    iconStyle={{ background: ' #289892ab', color: '#fff' }}
    icon={<DiTechcrunch />}
  >
    <h3 className="vertical-timeline-element-title">Frontend Intern</h3> <br />
    <h4 className="vertical-timeline-element-subtitle">InternPE , Jaipur - Rajasthan</h4>
    <p>
    Completed a frontend internship focused on responsive UI development using HTML, CSS, and JavaScript.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: theme === "light" ? "#ADD8E6" : "#1e1e2c", 
    color:theme === "light" ? "black": "white"  }}
    contentArrowStyle={{ borderRight: theme === "light" ? "7px solid white" : "7px solid #1e1e1e "  }}
    date="Feb 2025 - March 2025"
    iconStyle={{ background: ' #289892ab', color: '#fff' }}
    icon={<GrReactjs />}
  >
    <h3 className="vertical-timeline-element-title">ReactJS Intern</h3> <br />
    <h4 className="vertical-timeline-element-subtitle">Webito Infotech PVT LTD , Ahmedabad</h4>
    <p>
    Gained practical exposure by working on tasks related to ReactJS components and UI development
    </p>
  </VerticalTimelineElement>

        </VerticalTimeline>
        </div>
      </div>
    </>
  )
}

export default WorkExp
