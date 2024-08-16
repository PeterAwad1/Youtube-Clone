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
import Line from "../sharedCommpenets/Line";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { IoFlagOutline } from "react-icons/io5";
import { TbMessageReport } from "react-icons/tb";

const MainMenu = [
  {
    icon: <FaHome />,
    path: "/",
    name: "Home",
  },
  {
    icon: <SiYoutubeshorts />,
    path: "/",
    name: "Videos",
  },
  {
    icon: <MdSubscriptions />,
    path: "/",
    name: "Subscriptions",
  },
];

const SideMenuData2 = [
  {
    icon: <FaHistory />,
    path: "/",
    name: "History",
  },
  {
    icon: <MdVideoLibrary />,
    path: "/",
    name: "Library",
  },
];

const SideMenuData3 = [
  {
    icon: <BiSolidJoystick />,
    path: "/",
    name: "Games",
  },
  {
    icon: <MdOutlineSportsSoccer />,
    path: "/",
    name: "Sports",
  },
  {
    icon: <FaRegNewspaper />,
    path: "/",
    name: "News",
  },
  {
    icon: <FaRegNewspaper />,
    path: "/",
    name: "Movies",
  },
  {
    icon: <MdLiveTv />,
    path: "/",
    name: "Live",
  },
];
const SideMenuData4 = [
  {
    icon: <IoSettingsOutline />,
    path: "/",
    name: "Setting",
  },
  {
    icon: <IoFlagOutline />,
    path: "/",
    name: "Report",
  },
  {
    icon: <TbMessageReport />,
    path: "/",
    name: "Help",
  },
];
function SideMenu({ open }) {
  return (
    <div
      className={`${
        open ? "block" : "hidden"
      } fixed top-70px left-0 w-[250px] h-[calc(100vh-50px)]  bg-black transition-all duration-200 ease-in-out z-40`}
    >
      <ul className="flex flex-col gap-2 px-4 py-10">
        {MainMenu.map((data) => (
          <SideLink
            key={data.name}
            name={data.name}
            path={data.path}
            icon={data.icon}
          />
        ))}
        <Line />
        {SideMenuData2.map((data) => (
          <SideLink
            key={data.name}
            name={data.name}
            path={data.path}
            icon={data.icon}
          />
        ))}
        <Line />
        <div className="flex flex-col items-start gap-2">
          <p className="text-white text-sm w-[200px]">
            Sign in to like videos, comment, and subscribe.
          </p>
          <Link
            to="/signin"
            className="flex gap-2 items-center border-[1px] border-blue-400 rounded-full p-2 cursor-pointer hover:scale-105"
          >
            <FaUserCircle className="text-blue-400" />
            <p className="text-blue-400 hidden sm:block">SIGN IN</p>
          </Link>
        </div>
        <Line />
        {SideMenuData3.map((data) => (
          <SideLink
            key={data.name}
            name={data.name}
            path={data.path}
            icon={data.icon}
          />
        ))}
        <Line />
        {SideMenuData4.map((data) => (
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
