import "./index.css";
import Logo from "../../assets/Logo.png";
import Twitter from "../../assets/twitter-svgrepo-com.svg";
import Facebook from "../../assets/facebook-svgrepo-com (1).svg";
import Instagram from "../../assets/instagram-socials-social-media-icon-svgrepo-com.svg";
const Footer = () => {
  return (
    <footer>
      <div className="logo_container">
        <img src={Logo} alt="شعار موقع امجد غنيمة" />
        <h1>
          <span> أمجد </span>
          غنيمة
        </h1>
      </div>{" "}
      <div className="serv_list">
        <a href="#home">الرئيسية</a>
        <a href="#services">الخدمات</a>
        <a href="#contact">تواصل معنا</a>
      </div>{" "}
      <div className="banner_social">
        <img src={Twitter} alt="ايقونة تويتر امجد غنيمة " />{" "}
        <img src={Facebook} alt="ايقونة فيسبوك امجد غنيمة " />{" "}
        <img src={Instagram} alt="ايقونة انستقرام امجد غنيمة " />
      </div>{" "}
    </footer>
  );
};

export default Footer;
