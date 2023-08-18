import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useMyContext } from "../../context/ActiveLinkContext";
import { CiFacebook, CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci";
import { BiLocationPlus, BiPhoneCall, BiWorld } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  const { setActiveUrl } = useMyContext();

  const QuickLinks = [
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

  const Services = [
    {
      title: "Individual Therapy",
      path: "/",
    },
    {
      title: "Family Counseling",
      path: "/appointment",
    },
    {
      title: "Couples Therapy",
      path: "/services",
    },
    {
      title: "Children Therapy",
      path: "/faq",
    },
    {
      title: "Group Counselling",
      path: "/aboutus",
    },
    {
      title: "Career Counselling",
      path: "/contactus",
    },
  ];

  const socialMediaAccounts = [
    {
      icon: <CiFacebook />,
      url: "/",
    },
    {
      icon: <CiTwitter />,
      url: "/",
    },
    {
      icon: <CiInstagram />,
      url: "/",
    },
    {
      icon: <CiYoutube />,
      url: "/",
    },
  ];

  const contactDetails = [
    {
      icon: <BiPhoneCall />,
      title: "Call Us",
      content: "+915708458245",
    },
    {
      icon: <AiOutlineMail />,
      title: "Emil Us",
      content: "abhiyoungmind@gmail.com",
    },
    {
      icon: <BiWorld />,
      title: "Website",
      content: "www.abhiyoungmind.com",
    },
    {
      icon: <BiLocationPlus />,
      title: "Address",
      content: "sfbsdf sndfs fnsd bf sd sdkhf asdfsdfdsc sdf",
    },
  ];

  return (
    <div className="w-full  bg-primary_color">
      <div className="w-full min-h-[90vh] px-5 lg:px-[4rem] xl:px-[8rem] pt-28 pb-6 flex flex-col gap-10 justify-between ">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[5rem] ">
          {/* Logo And Social Media Accounts */}
          <div className="lg:w-[33%]">
            <Link to={"/"} onClick={() => setActiveUrl("/")}>
              <img
                src="https://gtkit.rometheme.pro/genical/wp-content/uploads/sites/18/2023/02/Genical-Logo-2.png"
                alt=""
                className="h-[6rem] lg:h-[5rem] mb-6 opacity-0 animate-slideright -ml-3 "
              />
            </Link>

            <p
              className="text-white mb-8 text-justify"
              style={{
                letterSpacing: "1px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
              velit voluptates maiores incidunt harum molestias explicabo. Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Nam velit
              voluptates maiores incidunt harum molestias explicabo.
            </p>

            {/* Social Media  */}
            <div className="">
              <div className="flex">
                {socialMediaAccounts.map((item, index) => (
                  <a
                    key={index}
                    className=" bg-secondary_color mr-4 text-2xl p-1 rounded-full text-white flex items-center justify-center border-2 transition-all  duration-300 border-secondary_color hover:bg-transparent  hover:-translate-y-1 "
                    href="/"
                    target={item.url}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Links  */}
          <div className=" flex-1 grid md:grid-cols-3 ">
            {/* Quick Links  */}
            <div className="pb-6">
              <h1 className=" text-white text-2xl mb-5 font-medium ml-1">
                Quick Links
              </h1>
              <div className="">
                {QuickLinks.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="mb-3 flex items-center  text-white hover:text-secondary_color transition-all duration-300"
                    onClick={() => setActiveUrl(item.path)}
                  >
                    <span className=" text-secondary_color text-2xl">
                      <RiArrowRightSLine />
                    </span>{" "}
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Services  */}
            <div className="pb-6">
              <h1 className=" text-white text-2xl mb-5 font-medium ml-1">
                Services
              </h1>
              <div className="">
                {Services.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="mb-3 flex items-center text-white hover:text-secondary_color transition-all duration-300"
                    onClick={() => setActiveUrl(item.path)}
                  >
                    <span className=" text-secondary_color text-2xl">
                      <RiArrowRightSLine />
                    </span>{" "}
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Informartion  */}
            <div className="pb-6">
              <h1 className=" text-white text-2xl mb-5 font-medium ml-1">
                Services
              </h1>

              {/* Contacts  */}
              <div className="w-full mb-5">
                {contactDetails.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 mb-2">
                    <span className=" text-3xl text-secondary_color">
                      {item.icon}
                    </span>
                    <div>
                      <p className=" text-white break-all">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h1 className=" text-white text-2xl mb-5 font-medium ml-1">
                Opening Hours
              </h1>

              <div className="text-white ml-1 ">
                <p className="mb-2">Monday - Saturday ( 09.00 - 21.00 )</p>
                <p>Sunday ( Closed )</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright  */}
        <div className=" border-t-2  border-secondary_color ">
          <p className=" text-white text-center py-4">
            Copyright 2023 © All Right Reserved Design by Achintya Solutions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
