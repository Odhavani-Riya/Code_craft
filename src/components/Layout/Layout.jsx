import React, {useState} from 'react'
import Home from '../../pages/Home/Home';
// import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";/
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import './Layout.css'
import Menus from '../Menus/Menus';
const Layout = () => {
    const [toggle,setToggle] = useState(true);

    //change toggle
    const handleToggle = () =>{
        setToggle(!toggle);
    }
  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle sidebar":"sidebar"}>
            <div className="sidebar-toggle-icons">
              
                <p onClick={handleToggle}>
                    {
                        toggle? (<MdOutlineArrowBackIos size={25} />):(<MdOutlineArrowForwardIos size={25} />)
                    }
                    
                </p>
            </div>
            <Menus toggle={toggle}/>
        </div>
        <div className="container">
            <Home/>
        </div>
      </div>
    </>
  )
}

export default Layout
