import React from "react";
import img1 from "../../assets/personalImg.jpg";
const SingleTestiComp = () => {
  return (
    <div className="singgle_opinion_container">
      <img src={img1} alt="صورة الشخص صاحب التوصية" />

      <p>محمد</p>

      <p>
        {" "}
        امجد شخص جاد ومثابر بشان العمل كان من الممتع العمل معه ينجز العمل بسرعة
        ويفهم المطلوب
      </p>
    </div>
  );
};

export default SingleTestiComp;
