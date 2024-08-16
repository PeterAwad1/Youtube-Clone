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

const video = [
  {
    thubmail: "./../../../public/thubmail.jpg",
    time: "30:23",
    name: "London Is Most Amazing City ",
    channel: "Englend",
    views: "234k",
    history: "1 year ago",
    channelImage: "./../../../public/ChannelImage.jpg",
    subscription: "305K subscribers",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque deleniti reiciendis dignissimos corporis delectus temporibus obcaecati praesentium omnis. Fugit omnis rem deleniti esse harum dicta nisi exercitationem porro enim dolores!",
  },
  {
    thubmail: "./../../../public/thubmail.jpg",
    time: "30:23",
    name: "London Is Most Amazing City",
    channel: "Englend",
    views: "234k",
    history: "1 year ago",
    channelImage: "./../../../public/ChannelImage.jpg",
    subscription: "305K subscribers",
  },
  {
    thubmail: "./../../../public/thubmail.jpg",
    time: "30:23",
    name: "London Is Most Amazing City",
    channel: "Englend",
    views: "234k",
    history: "1 year ago",
    channelImage: "./../../../public/ChannelImage.jpg",
    subscribtion: "305K subscribers",
  },
  {
    thubmail: "./../../../public/thubmail.jpg",
    time: "30:23",
    name: "London Is Most Amazing City",
    channel: "Englend",
    views: "234k",
    history: "1 year ago",
    channelImage: "./../../../public/ChannelImage.jpg",
    subscribtion: "305K subscribers",
  },
  {
    thubmail: "./../../../public/thubmail.jpg",
    time: "30:23",
    name: "London Is Most Amazing City",
    channel: "Englend",
    views: "234k",
    history: "1 year ago",
    channelImage: "./../../../public/ChannelImage.jpg",
    subscribtion: "305K subscribers",
  },
  {
    thubmail: "./../../../public/thubmail.jpg",
    time: "30:23",
    name: "London Is Most Amazing City",
    channel: "Englend",
    views: "234k",
    history: "1 year ago",
    channelImage: "./../../../public/ChannelImage.jpg",
    subscribtion: "305K subscribers",
  },
  {
    thubmail: "./../../../public/thubmail.jpg",
    time: "30:23",
    name: "London Is Most Amazing City",
    channel: "Englend",
    views: "234k",
    history: "1 year ago",
    channelImage: "./../../../public/ChannelImage.jpg",
    subscribtion: "305K subscribers",
  },
  {
    thubmail: "./../../../public/thubmail.jpg",
    time: "30:23",
    name: "Landan",
    channel: "Englend",
    views: "234k",
    history: "1 year ago",
    channelImage: "./../../../public/ChannelImage.jpg",
    subscribtion: "305K subscribers",
  },
];
function App() {
  const [openMenu, setOpenMenu] = useState(true);

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
              <Routes>
                <Route path="/">
                  <Route index element={<HomePage data={video} />} />
                  <Route path="video">
                    <Route path=":id" element={<Video data={video} />} />
                  </Route>
                </Route>
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
