import React from "react";
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
      icon: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      title1: "Who",
      title2: "We Are",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis modi impedit exercitationem distinctio aspernatur deleniti ab suscipit repellendus quam tempora sint animi est tenetur ut aliquid consequatur, enim voluptas at!",
    },
    {
      icon: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      title1: "Who",
      title2: "We Are",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis modi impedit exercitationem distinctio aspernatur deleniti ab suscipit repellendus quam tempora sint animi est tenetur ut aliquid consequatur, enim voluptas at!",
    },
    {
      icon: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      title1: "Who",
      title2: "We Are",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis modi impedit exercitationem distinctio aspernatur deleniti ab suscipit repellendus quam tempora sint animi est tenetur ut aliquid consequatur, enim voluptas at!",
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
            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
            alt="owner"
            className="rounded-full w-full h-full object-cover"
          />
        </div>

        <div className=" text-center">
          <h1 className="text-2xl font-semibold mb-2">Dr. Jagdish Pareek</h1>
          <p className=" text-gray-500 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            ipsam dignissimos recusandae velit earum, sequi laboriosam, id sunt
            necessitatibus non repellendus molestias officiis! Dolorum atque
            voluptates soluta, vero laborum delectus.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default WelcomeDesk;
