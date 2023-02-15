import "./banner.css";
import Amjad from "../../assets/work.jpg";

const skills = [
  {
    title: "group 1",
    items: [
      { name: "  *", bgc: "#000", clr: "#fff" },
      { name: " تسويق رقمي", bgc: "#000", clr: "#fff" },
      { name: "تسويق الكتروني", bgc: "#F74C2B", clr: "#fff" },
    ],
  },
  {
    title: "group 2",
    items: [
      { name: "حملات اعلانية ", bgc: "#ddd", clr: "#000" },
      { name: "اعدات خططط تطويرية ", bgc: "#FDD309", clr: "#000" },
    ],
  },
  {
    title: "group 3",
    items: [
      { name: " اعلانات جوجل", bgc: "#7F1DFD", clr: "#fff" },
      { name: "اعلانات سناب ", bgc: "#ECEBEB", clr: "#000" },
    ],
  },
];
const SeconedBanner = () => {
  return (
    <section className="seconed_banner">
      <div className="second_banner_1">
        <div className="banner_first_col_img">
          <img src={Amjad} alt="صورة مكتب امجد غنيمة" />
        </div>
        <div className="banner_seconed_col_img">
          <img src={Amjad} alt="صورة مكتب امجد غنيمة" />
        </div>
      </div>
      <div className="second_banner_2">
        <p>_وظفني _</p>
        <h3>فلسطين, غزة</h3>
        <h3>amjad_ghanima@gmail.com</h3>
        <h3>+972 0595460603</h3>
      </div>
      <div className="second_banner_3">
        {skills.map((item) => {
          return (
            <div className="banner_skills_list" key={item.title}>
              {item.items.map((data) => {
                return (
                  <p
                    style={{
                      backgroundColor: `${data.bgc}`,
                      color: `${data.clr}`,
                       }}
                    key={data.name}
                  >
                    {data.name}
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SeconedBanner;
