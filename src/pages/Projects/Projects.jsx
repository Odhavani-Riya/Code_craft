import React from 'react'
import './Projects.css'
import Image1 from './Pro_1.png'
import Image2 from './Pro_2.png'
import { FaExternalLinkAlt } from "react-icons/fa"

const projectData = [
  {
    title: "Hand-Cricket With AI",
    tags: ["Python", "OpenCV", "CVZone", "Webcam"],
    badge: "AI/ML",
    img: Image1,
    link: "https://github.com/Odhavani-Riya/Hand_cricket_with_AI"
  },
  {
    title: "CineChan",
    tags: ["PHP", "MySQL", "HTML/CSS", "JavaScript", "Bootstrap"],
    badge: "Full Stack",
    img: Image2,
    link: "https://github.com/Odhavani-Riya/CineChan"
  },
  {
    title: "Code_Craft",
    tags: ["React", "Node", "Express", "MongoDB", "Bootstrap"],
    badge: "MERN Stack",
    img: Image1,
    link: "#"
  }
];

const Projects = () => {
  return (
    <section className="projects-section" id='projects'>
      <h2 className="projects-title text-uppercase">Project Showcase🚀</h2> <hr />
      <p className="projects-subtitle">
        Explore a selection of full-stack and AI-based projects, crafted using modern tech like MERN, Python, and more 💻.
      </p>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={project.img} alt={`Project ${index + 1}`} />
              <span className="project-badge">{project.badge}</span>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span className="tag-pill" key={i}>{tag}</span>
                ))}
              </div>
              <a href={project.link} className="project-btn" target="_blank" rel="noreferrer">
                <FaExternalLinkAlt /> View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

