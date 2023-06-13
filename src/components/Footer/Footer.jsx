import "./index.css";
import Twitter from "../../assets/twitter-svgrepo-com.svg";
import Facebook from "../../assets/tiktok-outline-svgrepo-com.svg";
import Instagram from "../../assets/instagram-socials-social-media-icon-svgrepo-com.svg";
import Whatsappp from '../../assets/whatsapp-logo-thin-svgrepo-com.svg'
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
 
      <div className="banner_social">
        <Link >
        <img src={Twitter} alt="ايقونة تويتر امجد غنيمة " />
        </Link>
        <Link>
        <img src={Facebook} alt="ايقونة فيسبوك امجد غنيمة " />
        </Link>

        <Link>
        <img src={Instagram} alt="ايقونة انستقرام امجد غنيمة " />
        </Link>
        <Link to={'http://wa.me/+970567201050'} target="_blank">
        <img src={Whatsappp} alt="ايقونة واتساب امجد غنيمة " />
        </Link>
      </div>
      <div className="copyrights">
      <p> جميع الحقوق محفوظة لـ أمجد غنيمة 2023&#169;</p>
    </div>
    </footer>
  );
};

export default Footer;
