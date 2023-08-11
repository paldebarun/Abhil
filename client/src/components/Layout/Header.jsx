import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiPhoneCall } from "react-icons/bi";
import { HiMenu } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";
import "./layout.css";
const Header = () => {
  const [activeUrl, setActiveUrl] = useState(location.pathname);
  const [menuOpen, setMenuOpen] = useState(false);
  const NavLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Appointment",
      path: "/appointment",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "FAQ",
      path: "/faq",
    },
    {
      title: "About Us",
      path: "/aboutus",
    },
    {
      title: "Contact Us",
      path: "/contactus",
    },
  ];
  const menuHnadler = (path) => {
    setActiveUrl(path);
    setMenuOpen(false);
  };

  return (
    <div className="bg-primary_color py-3 px-[1rem] xl:px-[6rem] relative">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div>
          <Link className=" ">
            <img
              src="https://gtkit.rometheme.pro/genical/wp-content/uploads/sites/18/2023/02/Genical-Logo-2.png"
              alt=""
              className="h-[3.5rem] sm:h-[4rem] opacity-0 animate-slideright"
            />
          </Link>
        </div>

        {/* Nav Item  */}
        <div className="hidden lg:flex gap-2 xl:gap-[2rem]  text-white transition-all ease-linear">
          {NavLinks.map((item, index) => (
            <Link
              to={item.path}
              onClick={() => setActiveUrl(item.path)}
              className={`${
                activeUrl == item.path ? "text-secondary_color  " : ""
              }text-lg font-medium  transition-all ease-linear duration-3  px-2 py-1 hover:text-secondary_color opacity-0 animate-slideBottom`}
              style={{
                animationDelay: `${0.2 * index}s`,
              }}
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* Email Us  */}
        <div className="hidden lg:flex  items-center gap-3">
          <div className="text-5xl text-secondary_color">
            <BiPhoneCall />
          </div>
          <div className="">
            <p className="text-white text-lg font-semibold">Call Us</p>
            <span className="text-lg text-secondary_color">+123-234-1234</span>
          </div>
        </div>

        {/* NavMenuBar  */}
        <div
          className="lg:hidden bg-secondary_color p-3  rounded-b-xl rounded-tl-xl text-xl sm:text-3xl text-white  cursor-pointer border-2 border-secondary_color hover:bg-transparent transition-colors ease duration-500 "
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <RiCloseFill /> : <HiMenu />}
        </div>
      </div>

      {/* NavPhone  */}
      <div
        className={`lg:h-0 absolute left-0 top-[100%]  bg-primary_color ${
          menuOpen ? "h-[18rem] duration-300" : "h-0 duration-100"
        } w-[100%]   overflow-hidden  transition-min-h ease-linear `}
      >
        <div className="flex flex-col px-4 py-1 gap-2 h-[1005]  text-white transition-all ease-linear">
          {NavLinks.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={() => menuHnadler(item.path)}
              className={`${
                activeUrl == item.path ? "text-secondary_color  " : ""
              }text-lg font-medium px-2 py-1 hover:text-secondary_color `}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
