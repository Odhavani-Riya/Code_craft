// import React from "react";
// import Typewriter from "typewriter-effect";
// import "./Home.css";
// import Resume from '../../assets/docs/ADIT_IT_OdhavaniRiyaRajeshbhai(1).pdf';
// const Home = () => {
//   return (
//     <>
//       <div className="container-fluid home-container">
//         <div className="container home-content">
//           <h2>Hello👋🏼 I'm a</h2>
//           <h1>
//             <Typewriter
//               options={{
//                 strings: ["Fullstack Developer!", "MERN Stack Developer!", "Python Developer!"],
//                 autoStart: true,
//                 loop: true,
//               }}
//             />
//           </h1>
//           <div className="home-buttons">
//             <button className="btn btn-hire">Hire Me</button>

//             <a className="btn btn-cv" href={Resume} download="Riya_Resume.pdf">Download CV</a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;


import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Typewriter from "typewriter-effect";
import "./Home.css";
import Resume from '../../assets/docs/ADIT_IT_OdhavaniRiyaRajeshbhai(1).pdf';
import ProfileImage from '../../components/Menus/Ghibli.jpg'; // adjust path
import { IoIosMoon, IoMdSunny } from "react-icons/io";

const Home = () => {
  const [theme,setTheme] = useTheme()
  //handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  } 
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === 'light' ? (<IoIosMoon size={30}/>):(<IoMdSunny size={30} id="sun"/>)}
        </div>
        <div className="container home-content">
          {/* Left: Text Content */}
          <div className="home-left">
            <h2>Hello👋🏻 I'm a</h2>
            <h1>
              <Typewriter
                options={{
                  strings: ["Fullstack Developer!", "MERN Stack Developer!", "Python Developer!"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className="home-buttons">
              <a href="https://api.whatsapp.com/send?phone=9537233405" className="btn btn-hire" 
              rel="noreferrer"
              target="_blank"
              >Hire Me</a>
              {/* <button className="btn btn-hire">Hire Me</button> */}
              <a className="btn btn-cv" href={Resume} download="Riya_Resume.pdf">Download CV</a>
            </div>
          </div>

          {/* Right: Image */}
          <div className="home-right">
            <img src={ProfileImage} alt="Riya Odhavani" className="home-image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
