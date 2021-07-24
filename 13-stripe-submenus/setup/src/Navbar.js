import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubmenu = (e) =>{
    //console.log(e.target);
    //get text on a button
    const page = e.target.textContent;
    //get location
    const tempBtn = e.target.getBoundingClientRect();
    // console.log(tempBtn);
    //getting the center position of the button
    const center = (tempBtn.left+tempBtn.right)/2
    //getting the posittion 3px up from bottom
    const bottom = tempBtn.bottom - 3;

    openSubmenu(page, { center, bottom })
  
  }

  const handleSubmenu =(e)=>{
    if(!e.target.classList.contains('link-btn')){
      closeSubmenu()
    }
  }
  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="stripe" className="nav-logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>products</button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>developer</button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>company</button>
          </li>
        </ul>
        <button className="btn signin-btn" onMouseOver={displaySubmenu}>Signin</button>
      </div>
    </nav>
  );
};

export default Navbar;
