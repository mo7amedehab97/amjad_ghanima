import React, { useState } from "react";

import "./index.css";
import Logo from "../../assets/مفرغ للموقع-04.png";
import burgerImg from "../../assets/burger.svg";
import { useNavigate } from "react-router-dom";

import whatsApp from '../../assets/whatsapp-svgrepo-com.svg'
const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  
  const navigate = useNavigate();

  const [toggle ,setToggle] = useState(false)
  const [err ,setErr] = useState('')
  const toggleMenu = () => {
  setShowMenu(!showMenu);
  }

  return (
    <nav className="nav_container">
      <div className="logo_container">
        <button type="button" onClick={()=>{
           navigate("/")
        }}>

        <img src={Logo} alt="شعار موقع امجد غنيمة" />
        </button>
       
      </div>
      <div className="serv_list">
        <a onClick={() => navigate("/")}>الرئيسية</a>
        <a onClick={() => navigate("/services")}> خدمات التسويق </a>
        <a onClick={() => navigate("/about")}> نماذج لك </a>
        
      </div>
      <div className="hire_me_container">
      <img src={whatsApp} alt="ايقونة واتساب" />
      <button  onClick={()=>{
        console.log("fff")
        setToggle(true)
      }}  type="button" >
          <a href="http://wa.me/+970567201050" target="_blank"
        >

أطلب الخدمة        </a>
</button>

      </div>

      
      
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
    </nav>
  );
};

export default NavBar;
