import "./index.css";
import Twitter from "../../assets/twitter-svgrepo-com.svg";
import Facebook from "../../assets/facebook-svgrepo-com (1).svg";
import Instagram from "../../assets/instagram-socials-social-media-icon-svgrepo-com.svg";
import Star from "../../assets/star-svgrepo-com.svg";
import Amjad from "../../assets/personalImg.jpg";
const Banner = () => {
  return (
    <section className="banner_container">
     
      <div className="col_details2">
        <img src={Amjad} alt="صورة  امجد غنيمة " />
      </div>
      <div className="col_details3">
        <h1>تسويق الكتروني, تسويق رقمي</h1>
        <span></span>
        <div className="banner_numbers">
          <div>
            <h1>6</h1>
            <p>سنوات من الخبرة</p>
          </div>
          <div>
            <h1>74</h1>
            <p>مشروع مكتمل</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
