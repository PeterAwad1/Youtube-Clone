import "./App.css";
import MainSection from "./components/mainsection/MainSection";
import Navbar from "./components/navbar/Navbar";
import SideMenu from "./components/sidemenu/SideMenu";

function App() {
  return (
    <div>
      <Navbar />
      <SideMenu />
      <MainSection />
    </div>
  );
}

export default App;
