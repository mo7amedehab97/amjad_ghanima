import Advantages from "./components/Advantages/Advantages";
import Banner from "./components/Banner/Banner";
import SeconedBanner from "./components/Banner/SeconedBanner";
import Expereince from "./components/Experience/Expereince";
import LatestWork from "./components/LatestWork/LatestWork";
import NavBar from "./components/NavBar/NavBar";
import ShowCases from "./components/ShowCases/ShowCases";
import Title from "./components/Title/Title";

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <SeconedBanner />
      <ShowCases />
      <Title title="المهارات" />
      <Advantages />
      <Title title="الخبرة والأعمال " />
      <Expereince />
      <Title title=" أخر الأعمال" />
      <LatestWork />
    </>
  );
}

export default App;
