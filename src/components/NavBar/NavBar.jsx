import "./index.css";
import Logo from "../../assets/Logo.png";
const NavBar = () => {
  return (
    <nav className="nav_container">
      <div className="logo_container">
        <img src={Logo} alt="شعار موقع امجد غنيمة" />
        <h1>
          <span> أمجد </span>
          غنيمة
        </h1>
      </div>
      <div className="serv_list">
        <a href="#home">الرئيسية</a>
        <a href="#services">الخدمات</a>
        <a href="#contact">تواصل معنا</a>
      </div>
      <div className="hire_me_container">
        <a href="#">وظفني</a>
      </div>
    </nav>
  );
};

export default NavBar;
