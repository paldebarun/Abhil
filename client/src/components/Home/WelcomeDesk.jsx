import React from "react";
import FounderImage from "../../assets/WelcomeDesk/image.jpeg";
import What from "../../assets/WelcomeDesk/what.jpg"
import Why from "../../assets/WelcomeDesk/why.jpg"
import Who from "../../assets/WelcomeDesk/who.jpg"
import { AnimationData } from "../../utils/animationData";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";

const WelcomeDesk = () => {
  const welcomeData = [
    {
      icon: Who,
      title1: "Who",
      title2: "We Are",
      text: "Abhil Young Mind Foundation is a passionate community dedicated to nurturing young minds psychological well-being, offering guidance, and empowering them through education for a brighter future.",
    },
    {
      icon: What,
      title1: "What",
      title2: "We Do",
      text: "We prioritize the psychological well-being of youth, offering counseling and support. We provide guidance to break free from destructive habits and empower through education for a promising future.",
    },
    {
      icon: Why,
      title1: "Why",
      title2: "We Do It",
      text: "We believe in empowering young minds because their potential is our future. By nurturing well-being, providing guidance, and offering education, we pave the way for a brighter tomorrow.",
    },
  ];
  return (
    <div className="w-full  px-5 lg:px-[4rem] xl:px-[6rem] mb-[8rem] flex items-center gap-[4rem] lg:gap-[2rem] xl:gap-[4rem] flex-col lg:flex-row transition-all duration-300">
      {/* Left  */}

      <div className="lg:w-[70%]">
        {/* Header  */}
        <div className="mb-10">
          <h3 className="font-[cursive] text-secondary_color text-xl  my-4">
            Welcome To
          </h3>
          <div>
            <motion.h1
              {...AnimationData.slideUp}
              className="opacity-0 font-medium text-3xl lg:text-5xl my-6"
            >
              Abhi Young Mind
            </motion.h1>
          </div>
        </div>

        <div className="w-full flex flex-col gap-5 ">
          {welcomeData.map((item, index) => (
            <div key={index} className="flex gap-2 items-center justify-center">
              {/* icon  */}
              <div className="w-[8rem] h-[8rem] sm:w-[10rem] sm:h-[10rem] p-2">
                <img
                  src={item.icon}
                  alt=""
                  className="rounded-full w-full h-full object-cover border-4"
                />
              </div>

              {/* text */}
              <div className="flex-1 text-sm sm:text-lg">
                <h1 className="text-2xl sm:text-3xl">
                  <span className=" text-orange-400 font-bold ">
                    {item.title1}
                  </span>{" "}
                  {item.title2}
                </h1>

                <p className="text-gray-500">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right  */}
      <motion.div
        {...AnimationData.slideLeft}
        className="lg:w-[30%] h-full shadow-lg flex flex-col justify-center items-center gap-4 py-10 px-5"
      >
        <div className="w-[16rem] h-[16rem] p-2">
          <img
            src={FounderImage}
            alt="owner"
            className="rounded-full w-full h-full object-cover"
          />
        </div>

        <div className=" text-center">
          <h1 className="text-2xl font-semibold mb-2">Dr. Karam Chand</h1>
          <p className=" text-gray-500 text-xl">
          Meet Karam Chand, Director of Abhil Young Mind Foundation,is a Neuroscience  dedicated to empowering youth through education and fostering positive change. A visionary shaping tomorrow's leaders.

          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default WelcomeDesk;
