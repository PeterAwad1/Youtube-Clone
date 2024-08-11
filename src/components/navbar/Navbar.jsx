import Img from "./../../assets/youtube.png";
import { IoMdMenu } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
function Navbar({ setOpenMenu, openMenu }) {
  return (
    <div className="flex items-center w-full h-[50px] bg-gray-900 p-2 sm:px-4  justify-between">
      {/* Log Section */}
      <div className="flex justify-between gap-5">
        {/* Menu Buttom */}
        <IoMdMenu
          className="text-white w-5 h-5 sm:w-7 sm:h-7 cursor-pointer"
          onClick={() => setOpenMenu(!openMenu)}
        />
        {/* Logo Img and label */}
        <Link to="/" className="flex items-center gap-1">
          <img
            id="Logo"
            src={Img}
            className="sm:w-7 sm:h-7 w-5 h-5"
            alt="YouTube Logo"
          />
          <span className="text-white font-semibold">YouTube</span>
        </Link>
      </div>
      {/* Search Field */}
      <form className="relative">
        <input
          type="search"
          name="search"
          className="bg-inherit rounded-3xl border-gray-600 border-[1px] w-[150px] sm:w-[300px]  md:w-[400px] lg:w-[500px] h-5 sm:h-8 focus:outline-none px-4 py-2 text-white"
          placeholder="Search..."
        />
        <IoIosSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 h-3 w-5 sm:h-5 text-white cursor-pointer" />
      </form>
      {/* Sign In Button */}
      <div className="flex gap-2 items-center justify-center border-[1px] border-blue-400 sm:rounded-md p-2 sm:p-4 rounded-full w-[30px] sm:w-[130px] h-5 sm:h-7 cursor-pointer hover:scale-105">
        <FaUserCircle className="text-blue-400 w-5 h-3 sm:h-5" />
        <p className="text-blue-400 font-simebold hidden sm:block">SIGN IN</p>
      </div>
    </div>
  );
}

export default Navbar;
