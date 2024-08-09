import "./App.css";
import MainSection from "./components/mainsection/MainSection";
import Navbar from "./components/navbar/Navbar";
import SideMenu from "./components/sidemenu/SideMenu";

function App() {
  return (
    <div>
      <div className="flex flex-col justify-start">
        <Navbar />
        <div className="flex">
          <SideMenu />
          <MainSection />
        </div>
      </div>
    </div>
  );
}

export default App;
