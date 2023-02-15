import "./index.css";
import amjad from "../../assets/personalImg.jpg";
import whatsApp from "../../assets/whatsapp-svgrepo-com.svg";
const TalkSection = () => {
  return (
    <section className="talk_container">
      <div className="talk_holder">
        <img src={amjad} alt="" />
        <div className="circle_header">
          <h1>تواصل معي لناخذ الاعمال الخاصة بك الي المرحلة المقبل </h1>
          <span></span>
        </div>
      </div>
      <div className="talk_contact">
        <img src={whatsApp} alt="ايقونة واتساب" />
        <a href="@"> تحدث معي </a>
      </div>
    </section>
  );
};

export default TalkSection;
