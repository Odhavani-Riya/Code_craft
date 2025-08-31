import React from 'react'
import './Menus.css'
import {Link} from "react-scroll";
import { FcHome, FcAbout, FcReading, FcNook, FcBusinessContact } from "react-icons/fc";
import { HiOfficeBuilding } from 'react-icons/hi';
import { SiTechcrunch } from "react-icons/si";



const Menus = ({toggle}) => {
  return (
    <>
    {/* {toggle && (
        <div className="navbar-profile-pic">
        <img src={GhibliImage} alt="profile pic" className="profile-pic"/>
    </div>
    )}
     */}
        {toggle ? (
        <>

        
    <div className="nav-items">
        <div className="nav-item">
            
            <div className="nav-link">
                <Link 
                to="home" 
                spy={true} 
                offset={-100} 
                smooth={true} 
                duration={100}>
                <FcHome />
                Home
                </Link>
            </div>

                <div className="nav-link">
                    <Link 
                to="about" 
                spy={true} 
                offset={-100} 
                smooth={true} 
                duration={100}>
                    <FcAbout />
                About
                    </Link>
                </div>

                <div className="nav-link">
                    <Link
                    to="education" 
                    spy={true} 
                    offset={-100} 
                    smooth={true} 
                    duration={100}>
                    <FcReading />
                        Education
                    </Link>
               
                </div>

                <div className="nav-link">
                    <Link
                    to="techstack" 
                    spy={true} 
                    offset={-100} 
                    smooth={true} 
                    duration={100}>
                    <SiTechcrunch color='#696765'/>
                        Tech stack
                    </Link>
                </div>

                <div className="nav-link">
                    <Link
                    to="projects" 
                    spy={true} 
                    offset={-100} 
                    smooth={true} 
                    duration={100}>
                    <FcNook />
                Projects
                    </Link>
            </div>

                <div className="nav-link">
                <Link
                to="workexp" 
                spy={true} 
                offset={-100} 
                smooth={true} 
                duration={100}>
                <HiOfficeBuilding size={18} color="#f29f67" />
                Work Experience
                </Link>
                </div>

                

                

               

                {/* <div className="nav-link">
            <FcVoicePresentation />
                Testimonial</div> */}

                <div className="nav-link">
                <Link
                to="contact" 
                spy={true} 
                offset={-100} 
                smooth={true} 
                duration={100}>
            <FcBusinessContact />
                Contact
                </Link>
                </div>
        </div>
    </div>
    
    </>
    ) : (
        <>
        <div className="nav-items">
        <div className="nav-item">
            <div className="nav-link">
            <Link 
                data-aos="fade-right"
                to="home" 
                spy={true} 
                offset={-100} 
                smooth={true} 
                duration={100}>
                <FcHome />
                </Link>
            </div>

                <div className="nav-link">
                <Link 
                to="about" 
                spy={true} 
                offset={-100} 
                smooth={true} 
                duration={100}>
                    <FcAbout />
                    </Link>
                </div>

                <div className="nav-link">
                <Link
                    to="education" 
                    spy={true} 
                    offset={-100} 
                    smooth={true} 
                    duration={100}>
                    <FcReading />
                    </Link>
                </div>    

                <div className="nav-link">
                <Link
                    to="techstack" 
                    spy={true} 
                    offset={-100} 
                    smooth={true} 
                    duration={100}>
                    <SiTechcrunch color='#696765' title='Tech Stack'/>
                    </Link>
                </div>


                <div className="nav-link">
                <Link
                    to="projects" 
                    spy={true} 
                    offset={-100} 
                    smooth={true} 
                    duration={100}>
                    <FcNook />
                    </Link>
            </div>

                <div className="nav-link">
                <Link
                to="workexp" 
                spy={true} 
                offset={-100} 
                smooth={true} 
                duration={100}>
                <HiOfficeBuilding size={18} color="#f29f67" title='Work Experince'/>
                </Link>
                </div>

                {/* <div className="nav-link">
            <FcVoicePresentation title='Testimonial' /></div> */}

                <div className="nav-link">
                <Link
                to="contact" 
                spy={true} 
                offset={-100} 
                smooth={true} 
                duration={100}>
           <FcBusinessContact title='Contact'/>
                </Link>
            </div>
        </div>
    </div>
        </>
    )}

    </>
  )
}

export default Menus
