import React from 'react'
import './About.css'
import Image from './pic2.jpg'

const About = () => {
  return (
    <>
        <div className="about" id='about'>
            <div className="row">
                <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
                    <img src={Image} alt="Profile_Pic" />
                </div>
                <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
                    <h1>About me</h1>
                    <p>
                    I'm a Full Stack Developer 💻 with hands-on experience in the MERN stack ⚙️. I build scalable, responsive web applications 🌐 from frontend to backend 🔄. Passionate about clean code ✨, problem-solving 🧠, and continuous learning 📚, I love turning ideas 💡 into real-world projects using React ⚛️, Node.js, Express.js, and MongoDB 🍃. I’m always eager to grow 🌱 and contribute to impactful tech solutions 🚀.
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default About
