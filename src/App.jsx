import { useState, useEffect } from "react";
import MainSection from "./components/mainsection/MainSection";
import Navbar from "./components/navbar/Navbar";
import SideMenu from "./components/sidemenu/SideMenu";

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="bg-black">
      <div className="flex flex-col justify-start">
        <div>
          <Navbar setOpenMenu={setOpenMenu} openMenu={openMenu} />
        </div>
        <div className="flex w-full h-[calc(100vh-50px)] ">
          <div className="bg-gray-950">
            <SideMenu open={openMenu} />
          </div>
          <MainSection />
        </div>
      </div>
    </div>
  );
}

export default App;
