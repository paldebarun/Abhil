import React, { useState } from "react";
import MetaData from "../../utils/MetaData";
import PageHeader from "../Layout/PageHeader";
import { AnimationData } from "../../utils/animationData";
import { motion } from "framer-motion";
import { PiHandshakeBold } from "react-icons/pi";
import { MdOutlineClose } from "react-icons/md";
import Family  from "../../assets/Donations/Family.jpg";
import Assuarance from "../../assets/Donations/Assurance.jpg";
import Part from "../../assets/Donations/PartsofCommunity.jpg";
 

const Donation = () => {
  const [showTab, setShowTab] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const AmountTabs = [
    {
      amount: "₹800",
      content: (
        <div className="h-full flex items-center justify-between gap-1 p-2 border-2 border-black">
          <div className="h-[80%]">
            <img
              src="https://image.info.unicef.org/lib/fe2f11717064047b751d76/m/1/0252ee0c-3de8-43ce-b257-08a249d23924.jpeg"
              alt="childhelp"
              className="h-full"
            />
          </div>

          <div>
            <h1 className=" sm:text-xl font-bold">INR 800 PER MONTH</h1>
            <p className=" sm:text-lg font-medium">
              Could help a child thrive.
            </p>
          </div>
        </div>
      ),
    },
    {
      amount: "₹1000",
      content: (
        <div className="h-full flex gap-1 items-center justify-between p-2 border-2 border-black">
          <div className="h-[80%]">
            <img
              src="https://image.info.unicef.org/lib/fe2f11717064047b751d76/m/1/0252ee0c-3de8-43ce-b257-08a249d23924.jpeg"
              alt="childhelp"
              className="h-full"
            />
          </div>

          <div>
            <h1 className=" sm:text-xl font-bold">INR 1000 PER MONTH</h1>
            <p className=" sm:text-lg font-medium">
              Could help a child thrive.
            </p>
          </div>
        </div>
      ),
    },
    {
      amount: "₹1500",
      content: (
        <div className="h-full flex items-center gap-1 justify-between p-2 border-2 border-black">
          <div className="h-[80%]">
            <img
              src="https://image.info.unicef.org/lib/fe2f11717064047b751d76/m/1/0252ee0c-3de8-43ce-b257-08a249d23924.jpeg"
              alt="childhelp"
              className="h-full"
            />
          </div>

          <div>
            <h1 className=" sm:text-xl font-bold">INR 1500 PER MONTH</h1>
            <p className=" sm:text-lg font-medium">
              Could help a child thrive.
            </p>
          </div>
        </div>
      ),
    },
    {
      amount: "OTHER",
      content: (
        <div className="h-full flex items-center justify-between p-2 border-2 border-black">
          <input
            className="border-2 w-full py-2 px-4 border-gray-700"
            type="text"
            placeholder="₹ OTHER AMOUNT"
          ></input>
        </div>
      ),
    },
  ];

  const Benefits = [
    {
      title: "ASSURANCE & TRANSPARENCY",
      icon:  Assuarance ,
      description:
        "Our foundation's unwavering commitment to assurance and transparency builds trust, ensuring a brighter future for young minds we empower.",
    },
    {
      title: "A Family of Changemakers",
      icon:Family ,
      description:
        "A united family, dedicated changemakers, nurturing young minds, fostering a brighter tomorrow, together making a difference.",
    },
    {
      title: "Part of Community",
      icon: Part,
      description:
      "We are part of a vibrant community, working together to empower young minds and create positive change.",
    },
  ];

  const Membership = [
    {
      title: "Flexible Amount",
      description:
      "Membership offers flexibility, allowing you to contribute any amount to support our mission empowering young minds.",
    },
    {
      title: "Flexible Duration",
      description:
      "Choose your membership duration, ensuring flexibility and alignment with your commitment to empowering young minds.",
    },
    {
      title: "Flexible Payment",
      description:
      "Membership offers flexible payment options, making it easy for you to support our mission of empowering young minds.",
    },
  ];

  const donateSubmitHandler = () => {};

  return (
    <div className="w-full">
      {/* MetData  */}
      <MetaData title={"Donate Now"} />

      {/* PageHeader  */}
      <PageHeader title1={"Donate"} title2={"Now"} />

      {/* Donation Content Componet */}
      <div
        className="h-[100vh]"
        style={{
          backgroundImage: `url(https://png.pngtree.com/thumb_back/fh260/back_our/20190614/ourmid/pngtree-positive-energy-youth-poster-background-material-image_122998.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="h-full flex items-center justify-center sm:justify-start px-1 sm:px-5 lg:px-[4rem] xl:px-[8rem]">
          {/* Donatation Box  */}
          <motion.div
            className="bg-white py-4 px-3 rounded-lg shadow-xl"
            {...AnimationData.slideRight}
          >
            {/* Heading  */}
            <div>
              <h1 className="text-4xl font-bold">MAKE A</h1>
              <h1 className="text-4xl font-bold text-secondary_color">
                DONATION
              </h1>
            </div>

            {/* Donation Box */}
            <div>
              {/* Amount Tabs  */}
              <div className="grid grid-cols-4 gap-1 py-2">
                {AmountTabs.map((item, index) => (
                  <button
                    className={`py-1 px-1 sm:px-2 sm:text-2xl border-2 border-black ${
                      showTab == index ? "bg-secondary_color" : ""
                    } transition-all duration-300`}
                    onClick={() => setShowTab(index)}
                  >
                    {item.amount}
                  </button>
                ))}
              </div>

              {/* Donation Discripton  */}
              <div className=" border-2 border-black h-[10rem] p-2">
                {AmountTabs[showTab].content}
              </div>

              {/* Next Button  */}
              <button
                onClick={() => setShowPopup(true)}
                className="bg-secondary_color w-full py-3 my-4 text-xl font-bold hover:bg-transparent border-2 border-secondary_color transition-all duration-300"
              >
                NEXT
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Donation Dialog Box Popup  */}
      <div
        className={`fixed z-10 top-0 w-full h-full bg-black bg-opacity-50 overflow-auto ${
          showPopup ? "block opacity-100" : "hidden opacity-0"
        } transition-all duration-300`}
        onClick={() => setShowPopup(false)}
      >
        <div className="h-[80%] w-[80%] m-auto mt-20 bg-white shadow-xl rounded-sm py-4 px-6 relative">
          <figure
            className="text-white text-3xl absolute top-0 -right-10 cursor-pointer hover:scale-125 transition-all duration-300"
            onClick={() => setShowPopup(false)}
          >
            <MdOutlineClose />
          </figure>

          <div>Payment Verfication Content</div>
        </div>
      </div>

      {/* Donation Discription  */}
      <motion.div
        {...AnimationData.slideUp}
        className="w-[95%] sm:w-[80%] lg:w-[65%] m-auto bg-white -mt-10 py-[4rem] px-10 shadow-lg rounded-xl mb-[8rem]"
      >
        <p className=" text-center">
          <span className=" text-lg font-bold">Abhil Young Mind Donor Family</span> is a
          family of changemakers who believe we can help{" "}
          <span className=" text-lg font-bold">children thrive and grow</span>{" "}
          to their full potential when{" "}
          <span className=" text-lg font-bold">
            we all unite as a family and pledge to support every child.
          </span>
        </p>
      </motion.div>

      {/* MEMBERSHIP   */}
      <div className="w-full  px-5 lg:px-[4rem] xl:px-[6rem] mb-[8rem] transition-all duration-300">
        <div>
          <h3 className="font-[cursive] text-secondary_color text-xl  my-4">
            Benefits?
          </h3>
        </div>

        <div>
          <motion.h1
            {...AnimationData.slideUp}
            className="opacity-0 font-medium text-3xl lg:text-5xl my-6"
          >
            BENEFITS OF JOINING OUR DONOR FAMILY
          </motion.h1>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 transition-all duration-300">
          {Benefits.map((item, index) => (
            <div className=" text-center shadow-xl rounded-xl overflow-hidden">
              <div>
                <h1 className="bg-primary_color text-white font-bold text-lg p-2">
                  {item.title}
                </h1>
              </div>
              {/* <figure className="text-[12rem] text-secondary_color grid place-items-center">
                {item.icon}
              </figure> */}
              <img src={item.icon} className="text-[12rem] display-flex justify-content-center  pb-10 text-secondary_color grid place-items-center"></img>
              <p className=" pb-10 px-4">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* BENEFITS   */}
      <div className="w-full  px-5 lg:px-[4rem] xl:px-[6rem] mb-[8rem] transition-all duration-300">
        <div>
          <h3 className="font-[cursive] text-secondary_color text-xl  my-4">
            Why take Membership?
          </h3>
        </div>

        <div>
          <motion.h1
            {...AnimationData.slideUp}
            className="opacity-0 font-medium text-3xl lg:text-5xl my-6"
          >
            FLEXIBILITY ON YOUR MEMBERSHIP
          </motion.h1>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 transition-all duration-300">
          {Membership.map((item, index) => (
            <div className=" text-center shadow-xl rounded-xl overflow-hidden">
              <div>
                <h1 className=" bg-primary_color text-white font-bold text-lg p-2">
                  {item.title}
                </h1>
              </div>

              <p className=" py-10 px-4">{item.description}</p>
            </div>
          ))}
        </div>

        <button className="bg-secondary_color px-16 py-3 mt-10 text-xl font-bold hover:bg-transparent border-2 border-secondary_color transition-all duration-300 rounded-xl text-white hover:text-black ">
          NEXT
        </button>
      </div>
    </div>
  );
};

export default Donation;