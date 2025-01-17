
import homeBack from "../../assets/AboutUs/communityTrust.jpg";
import { useMyContext } from "../../context/ActiveLinkContext";
import {
  About,
  CommunityTrust,
  // ExperiencedPeople,
  WhyChooseUs,
} from "../AboutUs/AboutUs";
import { FaPeopleArrows } from "react-icons/fa";
import MetaData from "../../utils/MetaData";
import { AppintmentForm } from "../Appointment/Appointment";
import { AnimationData } from "../../utils/animationData";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import WelcomeDesk from "./WelcomeDesk";
import AreasOfWork from "./AreasOfWork";

const Home = () => {
  const { setActiveUrl } = useMyContext();
  return (
    <div className="w-full min-h-[100vh]  ">
      {/* MetData  */}
      <MetaData title={"Abhil Young Mind: Empowering Young Minds for Growth & Resilience"} description="Abhil Young Mind, a foundation dedicated to empowering young minds & building stronger communities. We provide resources for mental wellness, support children's education, & facilitate empowering marriages. Donate & make a difference!" />

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
          <div className="w-full h-full absolute top-[10%] flex flex-col gap-4 sm:gap-10 items-center text-center  z-10 transition-all duration-300">
            <motion.h3
              {...AnimationData.slidDown}
              className=" text-white text-2xl sm:text-3xl font-[cursive] "
            >
              Welcome to Abhil Young Mind
            </motion.h3>

            <motion.h1
              {...AnimationData.slideUp}
              className=" text-white text-3xl lg:text-5xl font-bold "
            >
              Empowering Youth,{" "}
              <span className=" text-secondary_color">Inspiring Tomorrow</span>
            </motion.h1>

            <motion.p
              {...AnimationData.slideRightDelay}
              className="md:w-[50%] text-center  text-white text-lg"
            >
              Abhil Young Mind, a foundation dedicated to empowering young minds & building stronger communities. We provide resources for mental wellness, support children's education, & facilitate empowering marriages. Donate & make a difference! 
            </motion.p>

            <motion.div {...AnimationData.slideUpDelay}>
              <Link
                to="/appointment"
                onClick={() => setActiveUrl("/appointment")}
              >
                {" "}
                <button className="px-3 py-4 mt-6 font-bold text-white bg-transparent border-2 border-secondary_color  rounded-b-2xl rounded-tl-2xl hover:bg-secondary_color  transition-all duration-300">
                  Let&apos;s Connect
                </button>{" "}
              </Link>
            </motion.div>
          </div>
        </div>
        <motion.div
          {...AnimationData.slideUp}
          className=" flex flex-col md:flex-row gap-8 w-full px-5 lg:px-[4rem] xl:px-[6rem]  pb-[8rem] mt-[-6rem] sm:mt-[-8rem] "
        >
          <div className="lg:w-1/3 text-center bg-secondary_color flex flex-col gap-2 items-center justify-center py-8 sm:py-14 px-6 rounded-l-[3rem] rounded-br-[3rem]">
            <span className=" text-6xl">
              <FaPeopleArrows color="white" />
            </span>
            <h2 className=" text-white text-xl font-medium">
            Thriving Minds, Stronger Communities
            </h2>
            <p className=" text-md text-white ">
            Empower young minds, build stronger communities. Donate to Abhil Young Mind!
            </p>
          </div>

          <div className=" lg:w-1/3 text-center bg-primary_color flex flex-col  gap-2 items-center justify-center py-14 px-6 rounded-[3rem]">
            <span className=" text-6xl">
              <FaPeopleArrows color="white" />
            </span>
            <h2 className="text-white text-xl font-medium">
            Building Resilience. Building Hope.
            </h2>
            <p className=" text-md text-white ">
            Support young mental well-being. Abhil Young Mind offers resources & guidance. Learn More!
            </p>
          </div>

          <div className="lg:w-1/3 text-center bg-secondary_color flex flex-col  gap-2 items-center justify-center  py-14 px-6 rounded-r-[3rem] rounded-tl-[3rem]">
            <span className=" text-6xl">
              <FaPeopleArrows color="white"/>
            </span>
            <h2 className=" text-white text-xl font-medium">
            Invest in the Future. Donate.
            </h2>
            <p className=" text-md text-white ">
            Your donation empowers young minds, strengthens families. Donate to Abhil Young Mind today!
            </p>
          </div>
        </motion.div>
        {/* About  */}
        <About />
        {/* Community trust  */}
        <CommunityTrust />
        {/* Why Choose */}
        <WhyChooseUs />
        {/* Welcome  */}
        <WelcomeDesk />
        {/* Areas of Work  */}
        <AreasOfWork />
        {/* Experiance People  */}
        {/* <ExperiencedPeople /> */}
        {/* Appointment */}
        <AppintmentForm />
      </div>
    </div>
  );
};

export default Home;
