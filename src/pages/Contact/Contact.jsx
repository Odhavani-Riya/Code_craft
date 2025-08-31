import React,{useState} from "react";
import "./Contact.css";
import image from "./contact.jpg";
import image1 from "./darkcontact.jpg";
import { FaLinkedin , FaGithub } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext"; 
import { toast } from 'react-toastify';
import axios from "axios";
// adjust path


const Contact = () => {
  const [theme] = useTheme();
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [msg,setMsg] = useState("")

  //handle submit button
  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      if(!name || !email || !msg){
        toast.error("Please Provide all fields");
      }
      const res = await axios.post('http://localhost:8080/api/v1/portfolio/sendEmail',  {name,email,msg})
      //validation success
      if(res.data.success) {
        toast.success(res.data.message);
        setName(" ")
        setEmail(" ")
        setMsg(" ")
      }
      else{
        toast.error(res.data.message);
      }
    }catch(error){
      console.log(error)
    }
  }

  return (
    <>
      <div className={`contact ${theme === "dark" ? "contact-dark" : ""}`} id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                <img
                  src={theme === "light" ? image: image1}
                  alt="contact"
                  className="image"
                />
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="card2 d-flex card border-0 px-4 py-5">
                <div className="row">
                  <div className="row">
                  <h6 className={`contact-heading fw-bold mb-4 ${theme === "dark" ? "text-light" : "text-dark"}`}>
  Contact With
  <span className="social-icons ms-3">
    <a
      href="https://linkedin.com/in/riya-odhavani-1b80a32a6/"
      target="_blank"
      rel="noopener noreferrer"
      
    >
      <FaLinkedin
        color={theme === "light" ? "rgb(34, 103, 176)" : "#8ab4f8"}
        size={30}
        className="icon-glow"
      />
    </a>

    <a
      href="https://github.com/Odhavani-Riya"
      target="_blank"
      rel="noopener noreferrer"
      
    >
      <FaGithub
        color={theme === "light" ? "#000" : "#ccc"}
        size={30}
        className="icon-glow"
      />
    </a>

  </span>
</h6>

                  </div>

                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>

                  <div className="row px-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      className="mb-3"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="row px-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="mb-3"
                      value={email}
                       onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="row px-3">
                    <textarea
                      type="text"
                      name="msg"
                      placeholder="write your message"
                      className="mb-3"
                      value={msg}
                       onChange={(e) => setMsg(e.target.value)}
                    />
                  </div>

                  <div className="row px-3">
                    <button className="button text-uppercase" type="submit" onClick={handleSubmit}>
                      send message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
