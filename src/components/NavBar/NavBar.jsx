import React, { useState } from "react";
import "./index.css";
import Logo from "../../assets/مفرغ للموقع-04.png";
import burgerImg from "../../assets/burger.svg";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
  setShowMenu(!showMenu);
  }

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
        <a href="#">تواصل معي</a>
      </div>
      <div className="burger_menu">
    <div className="burger_img" onClick={toggleMenu}>
      <img src={burgerImg} alt="burger menu" />
    </div>
    <div className={`menu ${showMenu ? "show" : "hide"}`}>
    <a onClick={() => navigate("/")}>الرئيسية</a>
        <a onClick={() => navigate("/services")}> خدمات التسويق </a>
        <a onClick={() => navigate("/about")}> نماذج لك </a>
      <a href="#">تواصل معي</a>
      </div>
      </div>
    </nav>
  );
};

export default NavBar;
