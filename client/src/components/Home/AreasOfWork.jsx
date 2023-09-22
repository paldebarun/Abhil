import React from "react";
import { AnimationData } from "../../utils/animationData";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { FaPeopleArrows } from "react-icons/fa";

const AreasOfWork = () => {
  const areaOfWorkData = [
    {
      image:
        "https://www.wework.com/ideas/wp-content/uploads/sites/4/2019/10/Web_72DPI-20181123-WeWork-Embassy-Tech-Village-Common-Areas-Wide-2_v1-800x533.jpg",
      icon: <FaPeopleArrows />,
      work: "Preventive Healthcare",
      bgColor: "bg-[#ef4444]",
    },
    {
      image:
        "https://www.wework.com/ideas/wp-content/uploads/sites/4/2019/10/Web_72DPI-20181123-WeWork-Embassy-Tech-Village-Common-Areas-Wide-2_v1-800x533.jpg",
      icon: <FaPeopleArrows />,
      work: "Education",
      bgColor: "bg-[#f59e0b]",
    },
    {
      image:
        "https://www.wework.com/ideas/wp-content/uploads/sites/4/2019/10/Web_72DPI-20181123-WeWork-Embassy-Tech-Village-Common-Areas-Wide-2_v1-800x533.jpg",
      icon: <FaPeopleArrows />,
      work: "Livelihood",
      bgColor: "bg-[#be123c]",
    },
    {
      image:
        "https://www.wework.com/ideas/wp-content/uploads/sites/4/2019/10/Web_72DPI-20181123-WeWork-Embassy-Tech-Village-Common-Areas-Wide-2_v1-800x533.jpg",
      icon: <FaPeopleArrows />,
      work: "Digital Transformation",
      bgColor: "bg-[#c026d3]",
    },
    {
      image:
        "https://www.wework.com/ideas/wp-content/uploads/sites/4/2019/10/Web_72DPI-20181123-WeWork-Embassy-Tech-Village-Common-Areas-Wide-2_v1-800x533.jpg",
      icon: <FaPeopleArrows />,
      work: "Skill Development",
      bgColor: "bg-[#2563eb]",
    },
    {
      image:
        "https://www.wework.com/ideas/wp-content/uploads/sites/4/2019/10/Web_72DPI-20181123-WeWork-Embassy-Tech-Village-Common-Areas-Wide-2_v1-800x533.jpg",
      icon: <FaPeopleArrows />,
      work: "Arts And Culture",
      bgColor: "bg-[#db2777]",
    },
    {
      image:
        "https://www.wework.com/ideas/wp-content/uploads/sites/4/2019/10/Web_72DPI-20181123-WeWork-Embassy-Tech-Village-Common-Areas-Wide-2_v1-800x533.jpg",
      icon: <FaPeopleArrows />,
      work: "Energy adn Environment",
      bgColor: "bg-[#57534e]",
    },
    {
      image:
        "https://www.wework.com/ideas/wp-content/uploads/sites/4/2019/10/Web_72DPI-20181123-WeWork-Embassy-Tech-Village-Common-Areas-Wide-2_v1-800x533.jpg",
      icon: <FaPeopleArrows />,
      work: "Health",
      bgColor: "bg-[#06b6d4]",
    },
  ];

  return (
    <div className="w-full  px-5 lg:px-[4rem] xl:px-[6rem] mb-[8rem] transition-all duration-300">
      {/* Heading  */}
      <div className="mb-10">
        <h3 className="font-[cursive] text-secondary_color text-xl  my-4">
          What We can do?
        </h3>
        <div>
          <motion.h1
            {...AnimationData.slideUp}
            className="opacity-0 font-medium text-3xl lg:text-5xl my-6"
          >
            Area of Work
          </motion.h1>
        </div>
      </div>

      {/* Work Areas Item  */}
      <div className="grid grid-cols-2  lg:grid-cols-4 gap-3 xl:gap-6">
        {areaOfWorkData.map((item, index) => (
          <div
            key={index}
            className="h-[16rem] relative group transition-all duration-300 overflow-hidden cursor-pointer rounded-sm"
          >
            <div className="h-full">
              {/* Image */}
              <img
                src={item.image}
                alt={item.work}
                className=" h-full w-full"
              />
            </div>

            {/* Top Icon  */}
            <div
              className={`absolute top-0 left-0 ${item.bgColor} p-4 md:p-5  grid place-items-center text-3xl text-white group-hover:translate-x-[-100%] transition-all duration-300`}
            >
              {item.icon}
            </div>

            {/* Bottm Text  */}
            <div className="bg-black bg-opacity-70 absolute left-0 bottom-0 w-full group-hover:translate-x-[-100%] transition-all duration-300">
              <p className=" text-white sm:text-2xl lg:text-xl p-2 text-center lg:text-left">
                {item.work}
              </p>
            </div>

            {/* Hover Effect */}
            <div
              className={`absolute top-0 left-0 h-full w-full ${item.bgColor} bg-opacity-50 translate-y-[-100%] group-hover:translate-y-0 flex items-center justify-center transition-all duration-300`}
            >
              <div className=" flex flex-col items-center justify-center text-white">
                <span className=" text-center text-4xl">{item.icon}</span>
                <p className="text-xl">{item.work}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AreasOfWork;
