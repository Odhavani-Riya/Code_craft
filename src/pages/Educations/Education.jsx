import React from 'react'
import './Education.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoMdSchool } from "react-icons/io";
import { useTheme } from "../../context/ThemeContext";


const Education = () => {

  const [theme, setTheme] = useTheme();
  return (

    <>
    <div className="education" id='education'>
    <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">education</h2>
      <hr />
    

    <VerticalTimeline>
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: theme === "light" ? "white" : "#1e1e2c", 
      color:theme === "light" ? "black": "white" }}
    contentArrowStyle={{ borderRight: theme === "light" ? "7px solid white" : "7px solid #1e1e1e "}}
    date="2022 - 2026"
    iconStyle={{ background: ' #289892ab', color: '#fff' }}
    icon={<IoMdSchool />}
  >
    <h3 className="vertical-timeline-element-title">B.Tech in Information Technology</h3>
    <h4 className="vertical-timeline-element-subtitle">CVM University, Anand </h4>
  </VerticalTimelineElement>
  
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: theme === "light" ? "white" : "#1e1e2c", 
    color:theme === "light" ? "black": "white"}}
    contentArrowStyle={{ borderRight: theme === "light" ? "7px solid white" : "7px solid #1e1e1e " }}
    date="2022"
    iconStyle={{ background: ' #289892ab', color: '#fff' }}
    icon={<IoMdSchool />}
  >
    <h3 className="vertical-timeline-element-title">HSC(GSEB)</h3>
    <h4 className="vertical-timeline-element-subtitle">Sheth Khimji Ramdas Kanya Vidyalaya, Mandvi - Kutch</h4>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{  background: theme === "light" ? "white" : "#1e1e2c", 
    color:theme === "light" ? "black": "white"}}
    contentArrowStyle={{ borderRight: theme === "light" ? "7px solid white" : "7px solid #1e1e1e " }}
    date="2020"
    iconStyle={{ background: '#289892ab', color: '#fff' }}
    icon={<IoMdSchool />}
  >
    <h3 className="vertical-timeline-element-title">SSC(GSEB)</h3>
    <h4 className="vertical-timeline-element-subtitle">Sheth Khimji Ramdas Kanya Vidyalaya, Mandvi - Kutch</h4>
  </VerticalTimelineElement>
  
    </VerticalTimeline>
    </div>
    </>
  )
}

export default Education
