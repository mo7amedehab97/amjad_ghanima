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
        <h3>كن يجب أن أشرح لك كيف ولدت كل هذه الفكرة الخاطئة المتمثلة في إدانة السرور ومدح الألم ، وسأقدم لك وصفًا كاملاً للنظام ، وأشرح التعاليم الفعلية للمستكشف العظيم للحقيقة ، الباني البارع. السعادة البشرية. لا أحد يرفض أو يكره أو يتجنب المتعة نفسها ، لأنها متعة ، ولكن لأن أولئك الذين لا يعرفون كيفية السعي وراء المتعة يواجهون عواقب مؤلمة للغاية. ولا يوجد أيضًا أي شخص يحب أو يسعى أو يرغب في الحصول على الألم من نفسه ، لأنه ألم ، ولكن في بعض الأحيان تحدث ظروف يمكن أن يجلب له فيها الكدح والألم بعض المتعة الكبيرة. لنأخذ مثالا تافها ، أي منا يقوم بتمارين بدنية شاقة ، إلا للحصول على بعض المزايا منها؟ ولكن من له الحق في أن يخطئ في رجل يختار أن يستمتع بسرور ليس له عواقب مزعجة ، أو من يتجنب الألم الذي لا ينتج عنه متعة؟  </h3>
    
      </div>
    </section>
  );
};

export default Banner;
