import "./index.css";
import Twitter from "../../assets/twitter-svgrepo-com.svg";
import Facebook from "../../assets/facebook-svgrepo-com (1).svg";
import Instagram from "../../assets/instagram-socials-social-media-icon-svgrepo-com.svg";
const Footer = () => {
  return (
    <footer>
 
      <div className="banner_social">
        <img src={Twitter} alt="ايقونة تويتر امجد غنيمة " />{" "}
        <img src={Facebook} alt="ايقونة فيسبوك امجد غنيمة " />{" "}
        <img src={Instagram} alt="ايقونة انستقرام امجد غنيمة " />
      </div>
      <div className="copyrights">
      <p> جميع الحقوق محفوظة لـ أمجد غنيمة 2023&#169;</p>
    </div>
    </footer>
  );
};

export default Footer;
