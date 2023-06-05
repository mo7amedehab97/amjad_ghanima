import React, { useState } from "react";

import "./index.css";
import Logo from "../../assets/مفرغ للموقع-04.png";
import burgerImg from "../../assets/burger.svg";
import { useNavigate } from "react-router-dom";
import { InlineWidget,useCalendlyEventListener } from "react-calendly";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  
  const navigate = useNavigate();

  const [toggle ,setToggle] = useState(false)
  const [err ,setErr] = useState('')
  const toggleMenu = () => {
  setShowMenu(!showMenu);
  }
  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: (e) => {
      setToggle(false)
    },
  });
  console.log(toggle)
  return (
    <nav className="nav_container">
      <div className="logo_container">
        <img src={Logo} alt="شعار موقع امجد غنيمة" />
       
      </div>
      <div className="serv_list">
        <a onClick={() => navigate("/")}>الرئيسية</a>
        <a onClick={() => navigate("/services")}> خدمات التسويق </a>
        <a onClick={() => navigate("/about")}> نماذج لك </a>
        
      </div>
      <div className="hire_me_container">
      <button  onClick={()=>{
        console.log("fff")
        setToggle(true)
      }}  type="button" >تواصل معي</button>        </div>
      <div className="burger_menu">
    <div className="burger_img" onClick={toggleMenu}>
      <img src={burgerImg} alt="burger menu" />
    </div>
    <div className={`menu ${showMenu ? "show" : "hide"}`}>
    <a onClick={() => navigate("/")}>الرئيسية</a>
        <a onClick={() => navigate("/services")}> خدمات التسويق </a>
        <a onClick={() => navigate("/about")}> نماذج لك </a>
      <button  onClick={()=>{
        console.log("fff")
        setToggle(true)
      }}  type="button">تواصل معي</button>
      </div>
      </div>
      {
        toggle && <div style={{
          position: "absolute"
          , top:0,
          left: 0,
          width:'100vw',
          height: "100vh",
          backgroundColor: "rgba(0,0,0,0.5)", zIndex:99999
          ,display: "flex",
          justifyContent: "center", 
          alignItems: "center"
        }}>
          <div style={{
          width: "100%",
          }}>
            
      <InlineWidget url="https://calendly.com/mo7amedehab" />
          </div>

        </div>
      }
    </nav>
  );
};

export default NavBar;
