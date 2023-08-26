import React from "react";
import homeBack from "../../assets/AboutUs/communityTrust.jpg";
import {
  About,
  CommunityTrust,
  ExperiencedPeople,
  WhyChooseUs,
} from "../AboutUs/AboutUs";
import { AppointmentForm } from "../Appointment/Appointment";
import { FaPeopleArrows } from "react-icons/fa";
import MetaData from "../../utils/MetaData";

const Home = () => {
  return (
    <div className="w-full min-h-[100vh]  ">
      {/* MetData  */}
      <MetaData title={"Home"} />

      {/* Home Content  */}
      <div>
        {/* Intro  */}
        <div
          className="w-full h-[90vh] relative "
          style={{
            backgroundImage: `url(${homeBack})`,
          }}
        >
          {/* Overlay  */}
          <div className=" absolute w-full h-full top-0 left-0 bg-primary_color bg-opacity-50"></div>

          {/* Intro Conent  */}
          <div className="w-full h-full absolute top-[10%] flex flex-col gap-8 sm:gap-10 items-center text-center  z-10 transition-all duration-300">
            <h3 className=" text-white text-2xl sm:text-3xl font-[cursive] animate-slideBottom">
              Welocme to Genical
            </h3>

            <h1 className=" text-white text-5xl lg:text-7xl font-bold animate-slideup">
              You Deserve{" "}
              <span className=" text-secondary_color">Peace & Freedom</span>
            </h1>

            <p className="md:w-[50%] text-center  text-white text-lg">
              Etiam posuere sapien ut luctus vehicula. Aenean non auctor arcu,
              et tempus arcu. Integer tristique volutpat posuere. Aenean ac
              lectus ultrices, lacinia leo.
            </p>

            <div>
              <button className="px-3 py-4 mt-6 font-semibold text-white bg-transparent border-2 border-secondary_color  rounded-b-2xl rounded-tl-2xl hover:bg-secondary_color  transition-all duration-300">
                Make An Appointment
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 w-full px-5 lg:px-[4rem] xl:px-[6rem] animate-slideup pb-[8rem] mt-[-6rem] sm:mt-[-8rem] transition-all duration-300">
          <div className="text-center bg-secondary_color flex flex-col gap-2 items-center justify-center py-8 sm:py-14 px-6 rounded-l-[3rem] rounded-br-[3rem]">
            <span className=" text-6xl">
              <FaPeopleArrows />
            </span>
            <h2 className=" text-white text-2xl font-medium">Consultation</h2>
            <p className=" text-lg text-white ">
              Vivamus pharetra neque a lacus. Aenean blandit euismod.
            </p>
          </div>

          <div className="text-center bg-primary_color flex flex-col  gap-2 items-center justify-center py-14 px-6 rounded-[3rem]">
            <span className=" text-6xl">
              <FaPeopleArrows />
            </span>
            <h2 className=" text-white text-2xl font-medium">Consultation</h2>
            <p className=" text-lg text-white ">
              Vivamus pharetra neque a lacus. Aenean blandit euismod.
            </p>
          </div>

          <div className="text-center bg-secondary_color flex flex-col  gap-2 items-center justify-center  py-14 px-6 rounded-r-[3rem] rounded-tl-[3rem]">
            <span className=" text-6xl">
              <FaPeopleArrows />
            </span>
            <h2 className=" text-white text-2xl font-medium">Consultation</h2>
            <p className=" text-lg text-white ">
              Vivamus pharetra neque a lacus. Aenean blandit euismod.
            </p>
          </div>
        </div>

        {/* About  */}
        <About />

        {/* Community trust  */}
        <CommunityTrust />

        {/* Why Choose */}
        <WhyChooseUs />

        {/* Experiance People  */}
        <ExperiencedPeople />

        {/* Appointment */}
        <AppointmentForm />
      </div>
    </div>
  );
};

export default Home;
