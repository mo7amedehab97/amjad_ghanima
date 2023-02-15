import "./index.css";
import bg1 from "../../assets/bg1.jpg";
import bg2 from "../../assets/bg2.jpg";
import bg3 from "../../assets/bg3.jpg";
import bg4 from "../../assets/bg4.jpg";
import bg5 from "../../assets/bg5.jpg";
import bg6 from "../../assets/bg6.jpg";
const LatestWork = () => {
  return (
    <section className="latest_work_contaienr">
      <div className="latest_work_col">
        <img src={bg1} alt="" />
        <img src={bg3} alt="" />
      </div>{" "}
      <div className="latest_work_col">
        <img src={bg4} alt="" />
        <img src={bg2} alt="" />
      </div>{" "}
      <div className="latest_work_col">
        <img src={bg6} alt="" />
        <img src={bg5} alt="" />
      </div>
    </section>
  );
};

export default LatestWork;
