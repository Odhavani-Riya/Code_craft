import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from "react";
import './index.css'; 
import Layout from "./components/layout/layout";
import About from "./pages/About/About";
import Techstack from "./pages/Techstack/Techstack";
import Projects from "./pages/Projects/Projects";
import Education from "./pages/Educations/Education";
import WorkExp from "./pages/WorkExp/WorkExp";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import MobileNav from "./components/MobileNav/MobileNav";


function App() {
  const [theme] = useTheme()
  return (
    <>
    <div className={theme}>
    <ToastContainer />
    <MobileNav/>
      <Layout />
      <div className="container">
        <About />
        <Education />
        <Techstack />
        <Projects />
        <WorkExp />
        <Contact />
      </div>
     <div className="footer bg-dark text-light py-3 mt-auto text-center w-100">
  <h6 className="mb-0">© 2025 Riya Odhavani. All Rights Reserved.</h6>
</div>

      </div>
      <ScrollToTop smooth 
      color="#138781"
      style={{backgroundColor: "#1e1e2c", borderRadius:"80px"}}
      />
    </>
  );
}

export default App;
