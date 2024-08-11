import { useState, useEffect } from "react";
import MainSection from "./components/mainsection/MainSection";
import Navbar from "./components/navbar/Navbar";
import SideMenu from "./components/sidemenu/SideMenu";
import HomePage from "./components/pages/HomePage";
import Video from "./components/pages/Video";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
function App() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="bg-black">
      <BrowserRouter>
        <div className="flex flex-col justify-start">
          <div>
            <Navbar setOpenMenu={setOpenMenu} openMenu={openMenu} />
          </div>
          <div className="flex w-full justify-between h-[calc(100vh-50px)] ">
            <div className="bg-gray-900">
              <SideMenu open={openMenu} />
            </div>
            <div className="w-full p-5">
              <MainSection>
                <Routes>
                  <Route path="/">
                    <Route index element={<HomePage />} />
                    <Route path="video">
                      <Route path=":id" element={<Video />} />
                    </Route>
                  </Route>
                </Routes>
              </MainSection>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
