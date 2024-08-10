import { FaHome } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { AiOutlineDownload } from "react-icons/ai";
import { FaHistory } from "react-icons/fa";
import { MdVideoLibrary } from "react-icons/md";
import { BiSolidJoystick } from "react-icons/bi";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { FaRegNewspaper } from "react-icons/fa6";
import { MdLiveTv } from "react-icons/md";
import SideLink from "./SideLink";

const MainMenu = [
  {
    icon: <FaHome />,
    path: "/",
    name: "Home",
  },
  {
    icon: <SiYoutubeshorts />,
    path: "/",
    name: "Shorts",
  },
  {
    icon: <MdSubscriptions />,
    path: "/",
    name: "Subscriptions",
  },
  {
    icon: <AiOutlineDownload />,
    path: "/",
    name: "Download",
  },
];

const SideMenuData1 = [
  {
    icon: "FaHome",
    path: "/",
    name: "Home",
  },
  {
    icon: "MdSubscriptions",
    path: "/",
    name: "Subscriptions",
  },
  {
    icon: "AiOutlineDownload",
    path: "/",
    name: "Download",
  },
];
const SideMenuData2 = [
  {
    icon: "FaHistory",
    path: "/",
    name: "History",
  },
  {
    icon: "MdVideoLibrary",
    path: "/",
    name: "Library",
  },
];

const SideMenuData3 = [
  {
    icon: "BiSolidJoystick",
    path: "/",
    name: "Games",
  },
  {
    icon: "MdOutlineSportsSoccer",
    path: "/",
    name: "Sports",
  },
  {
    icon: "FaRegNewspaper",
    path: "/",
    name: "News",
  },
  {
    icon: "FaRegNewspaper",
    path: "/",
    name: "Movies",
  },
  {
    icon: "MdLiveTv",
    path: "/",
    name: "Live",
  },
];
function SideMenu({ open }) {
  return (
    <div>
      <ul
        className={`${
          open ? "flex" : "hidden"
        } flex-col items-center justify-center gap-10 px-2 sm:px-4 py-10 duration-300 `}
      >
        {MainMenu.map((data) => (
          <SideLink
            key={data.name}
            name={data.name}
            path={data.path}
            icon={data.icon}
          />
        ))}
      </ul>
    </div>
  );
}

export default SideMenu;
SideMenu;
