import React, { useState,useRef } from "react";
import emailjs from 'emailjs-com';

import "./index.css";
import Logo from "../../assets/مفرغ للموقع-04.png";
import burgerImg from "../../assets/burger.svg";
import { useNavigate } from "react-router-dom";
import close from "../../assets/cancel.svg"
const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [drop, setDrop] = useState(false);
  
  const navigate = useNavigate();

  const [toggle ,setToggle] = useState(false)
  const [err ,setErr] = useState('')
  const toggleMenu = () => {
  setShowMenu(!showMenu);
  }
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    const form = event.target;
    const nameInput = form.elements.user_name;
    const emailInput = form.elements.user_email;
    const messageInput = form.elements.message;

    if (
      nameInput.value.trim() === '' ||
      emailInput.value.trim() === '' ||
      messageInput.value.trim() === ''
    ) {
      alert('رجاءا قم بتعبئة الخانات المطلوبة'); // Display an error message
      return; // Stop the function execution
    }
    emailjs.sendForm('service_6q5xyhm', 'template_acdesw6', form.current, 'XcGsom-zzVzAk9uGO')
      .then((result) => {
          // show the user a success message
          console.log(result, "success")
          setToggle(false)
          setErr("")
      }, (error) => {
console.log(error,'fuckhere')
      setErr("حدث خطأ ما يرجي المحاولة مرة اخري")
      });
  };
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
 <form ref={form} onSubmit={sendEmail} className="form_send">
  <div className="form_header">
    <button type="button" onClick={()=>{
      setToggle(false)
    }}>
    <img src={close} alt="close form " />
    </button>
  </div>
  <div className="form_row">
  <label>الاسم</label>
     <input type="text" name="user_name" />
  </div>
    <div className="form_row">

     <label>الايميل</label>
     <input type="email" name="user_email" />
    </div>
    <div className="form_row">

     <label>رسالة</label>
     <textarea name="message" />
    </div>

    {
      err && <span style={{
        color: "red"
      }}>
        {err}
      </span>
    }
    <div className="form_send_container">
     <input type="submit" value="ارسل" />
    </div>
   </form>
        </div>
      }
    </nav>
  );
};

export default NavBar;
