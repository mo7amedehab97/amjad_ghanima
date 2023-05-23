import "./index.css";
import Twitter from "../../assets/twitter-svgrepo-com.svg";
import Facebook from "../../assets/facebook-svgrepo-com (1).svg";
import Instagram from "../../assets/instagram-socials-social-media-icon-svgrepo-com.svg";
import Star from "../../assets/star-svgrepo-com.svg";
import Amjad from "../../assets/personalImg.jpg";
const Banner = () => {
  return (
    <section className="banner_container">
     
      <div className="col_details1">
        <img src={Amjad} alt="صورة  امجد غنيمة " />
      </div>
      <div className="col_details2">
        <h1>*</h1>
        <h3> <span> "   </span> أنا<span>
          
        أمجد،
          </span>  مستشار رقمي متخصص في <span> تعزيز المبيعات وتطوير العلامات التجارية عبر الإنترنت</span>.أعمل جنبًا إلى جنب مع الشركات والعلامات التجارية <span> لتحسين تواجدهم الرقمي وزيادة مبيعاتهم</span>. أستخدم البيانات والأدوات التسويقية <span> لاستهداف الجمهور المناسب </span>وبناء حملات فعالة. هدفي هو مساعدة الشركات والعلامات التجارية في تحقيق النجاح والتطور المستمر في عالم الويب. إذا كنت تحتاج إلى دعم استراتيجي رقمي فعال،  <span> فأنا هنا للمساعدة</span><span>  "
          </span></h3>
    
      </div>
    </section>
  );
};

export default Banner;
