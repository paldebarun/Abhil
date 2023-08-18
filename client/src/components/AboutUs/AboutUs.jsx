import React from "react";
import PageHeader from "../Layout/PageHeader";
import { HiOutlineUserGroup } from "react-icons/hi";
import { RiArrowRightSLine } from "react-icons/ri";
import { BsFillChatSquareFill } from "react-icons/bs";
import { CiFacebook, CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci";
import communityBack from "../../assets/AboutUs/communityTrust.jpg";
import { GoThumbsup } from "react-icons/go";
import { TbUsersGroup } from "react-icons/tb";
import { PiHandshakeLight } from "react-icons/pi";
import { TiUserAdd } from "react-icons/ti";

const AboutUs = ({ setActiveUrl }) => {
  return (
    <div className="w-full min-h-[100vh] bg-background_color  ">
      <PageHeader title1={"About"} title2={"Us"} setActiveUrl={setActiveUrl} />

      {/* About Content */}
      <div className="w-full pt-[8rem] ">
        {/* About  */}
        <div className="w-full px-5 lg:px-[4rem] xl:px-[6rem] mb-[8rem] flex items-center gap-[4rem] lg:gap-[2rem] xl:gap-[4rem] flex-col-reverse  lg:flex-row transition-all duration-300">
          {/* Left About Contet  */}
          <div className=" lg:w-[50%]">
            <div>
              <h3 className="font-[cursive] text-secondary_color text-xl  my-4">
                About AbhiYoungMind
              </h3>
            </div>

            <div>
              <h1 className="opacity-0 animate-slideup font-medium text-3xl lg:text-5xl my-6">
                We Are Here for You
              </h1>
            </div>

            <div>
              <p
                className="my-4 text-justify text-text_color1 "
                style={{
                  letterSpacing: "1px",
                  wordSpacing: "1px",
                }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
                ipsam explicabo, aspernatur totam quibabo, aspernatur totam
                quibabo, aspernatur totam quibusdam unde?
              </p>

              <p
                className="my-3 text-justify text-text_color1 "
                style={{
                  letterSpacing: "1px",
                  wordSpacing: "1px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
                quod? Lorem ipsum dolor sit amet.
              </p>
            </div>

            <section className="flex flex-col md:flex-row gap-5 py-6">
              <div className="md:w-[50%] flex gap-3 mb-4">
                <div className=" text-5xl text-secondary_color">
                  <HiOutlineUserGroup />
                </div>
                <div>
                  <h1 className="  text-2xl font-medium">
                    Expert Psychologist
                  </h1>
                  <p className="text-lg text-text_color1 break-all">
                    Etiam posuere sapien ut sed vehicula aenean non.
                  </p>
                </div>
              </div>

              <div className="md:w-[50%] flex gap-2 mb-4">
                <div className=" text-5xl text-secondary_color">
                  <HiOutlineUserGroup />
                </div>
                <div>
                  <h1 className="  text-2xl font-medium">Confidentiality</h1>
                  <p className="text-lg text-text_color1 break-all">
                    Etiam tiam posuere sapien ut sed vehicula aenean non.
                  </p>
                </div>
              </div>
            </section>

            <div className="p-7 border-l-2 border-secondary_color rounded-tl-3xl">
              <p className=" font-[cursive] text-xl text-text_color1">
                “Vestibulum blandit felis a auctor efficitur. In in erated nec
                ipsum eleifend lacinia in nec libero sed dictum magna.”
              </p>
            </div>
          </div>

          {/* Right About Banner */}
          <div className="w-[100%] sm:w-[80%] lg:flex-1 relative h-[80vh] xl:h-[85vh] animate-slideleft">
            <div className="w-[80%] h-[90%] bg-primary_color p-6 rounded-[3rem]  absolute left-6 -bottom-6  "></div>
            <div className="w-[90%] top-0 right-0 absolute h-full ">
              <img
                src="https://gtkit.rometheme.pro/genical/wp-content/uploads/sites/18/2023/02/psychiatrists-doctor-provide-mental-health-counsel-74S9LDRa.jpg"
                alt="about us"
                className="rounded-l-[3rem] w-full h-full "
              />
            </div>

            <div className="absolute -bottom-12 left-0 w-[50%] h-[28%] bg-secondary_color border-[0.8rem] border-white rounded-r-[3rem] rounded-tl-[3rem] text-white text-center grid place-items-center ">
              <div>
                <h1 className="text-3xl sm:text-5xl font-bold relative">
                  13 <span className="text-xl absolute sm:ml-2 ">Th</span>
                </h1>
                <p className="sm:text-xl">Years Experience</p>
              </div>
            </div>
          </div>
        </div>

        {/* Community Trust  */}
        <CommunityTrust />

        {/* Why Choose Us  */}
        <WhyChooseUs />

        {/* Experiance People  */}
        <ExperiencedPeople />
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  const SkillSet = [
    {
      title: "Confidentiality",
      rating: "99",
    },
    {
      title: "Therapy",
      rating: "95",
    },
    {
      title: "Counseling",
      rating: "97",
    },
  ];
  return (
    <div className="w-full  px-5 lg:px-[4rem] xl:px-[6rem] mb-[8rem] flex items-center gap-[4rem] lg:gap-[2rem] xl:gap-[4rem] flex-col lg:flex-row transition-all duration-300">
      {/* Left About Contet  */}
      <div className="w-[100%] sm:w-[80%] lg:flex-1 relative h-[80vh] xl:h-[85vh] animate-slideright">
        <div className="w-[80%] h-[90%] bg-primary_color p-6 rounded-[3rem]  absolute right-6 -bottom-6  "></div>
        <div className="w-[90%] top-0 left-0 absolute h-full ">
          <img
            src="https://gtkit.rometheme.pro/genical/wp-content/uploads/sites/18/2023/02/positive-african-american-couple-hugging-after-rec-PFLEMJZ.jpg"
            alt="about us"
            className="rounded-r-[3rem] w-full h-full border-[0.6rem] border-white "
          />
        </div>

        <div className="absolute -bottom-12 right-0 w-[50%] h-[28%] bg-secondary_color border-[0.8rem] border-white rounded-l-[3rem] rounded-tr-[3rem] text-white text-center grid place-items-center overflow-hidden ">
          <img
            src="https://gtkit.rometheme.pro/genical/wp-content/uploads/sites/18/2023/02/support-prayer-and-trust-with-people-holding-hands-BRKJAD3.jpg"
            alt=""
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Right About Banner */}
      <div className=" lg:w-[50%]">
        <div>
          <h3 className="font-[cursive] text-secondary_color text-xl  my-4">
            Why Choose Genical
          </h3>
        </div>

        <div>
          <h1 className="opacity-0 animate-slideup font-medium text-3xl lg:text-5xl my-6">
            Taking Care of Your Mental Health
          </h1>
        </div>

        <div>
          <p
            className="my-2 text-justify text-text_color1 "
            style={{
              letterSpacing: "1px",
              wordSpacing: "1px",
            }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis ipsam
            explicabo, aspernatur totam quibabo, aspernatur totam quibabo,
            aspernatur totam quibusdam unde?
          </p>
        </div>

        {/* Visson and Misson  */}
        <section className="flex flex-col md:flex-row gap-5 py-6">
          <div className="md:w-[50%]">
            <h1 className="text-2xl font-medium ml-1">Our Vision</h1>
            <div>
              <p className="flex items-center text-text_color1">
                <span className=" text-xl text-secondary_color">
                  <RiArrowRightSLine />
                </span>
                Aenean blandit euismod ipsum.
              </p>
              <p className="flex items-center text-text_color1">
                <span className=" text-xl text-secondary_color">
                  <RiArrowRightSLine />
                </span>
                Aenean blandit euismod ipsum.
              </p>
              <p className="flex items-center text-text_color1">
                <span className=" text-xl text-secondary_color">
                  <RiArrowRightSLine />
                </span>
                Aenean blandit euismod ipsum.
              </p>
            </div>
          </div>

          <div className="md:w-[50%]">
            <h1 className="text-2xl font-medium  ml-1">Our Misson</h1>
            <div>
              <p className="flex items-center text-text_color1">
                <span className=" text-xl text-secondary_color">
                  <RiArrowRightSLine />
                </span>
                Aenean blandit euismod ipsum.
              </p>
              <p className="flex items-center text-text_color1">
                <span className=" text-xl text-secondary_color">
                  <RiArrowRightSLine />
                </span>
                Aenean blandit euismod ipsum.
              </p>
              <p className="flex items-center text-text_color1">
                <span className=" text-xl text-secondary_color">
                  <RiArrowRightSLine />
                </span>
                Aenean blandit euismod ipsum.
              </p>
            </div>
          </div>
        </section>

        {/* Skill Set Level  */}
        <div className="p-7 border-l-2 border-secondary_color rounded-tl-3xl">
          {SkillSet.map((item, index) => (
            <div key={index} className="mb-8">
              <h1 className="text-xl font-medium">{item.title}</h1>
              <div className="h-3 rounded-3xl my-2 bg-primary_color relative">
                <div
                  className={`absolute h-full top-0 left-0 rounded-3xl bg-secondary_color`}
                  style={{
                    width: `${item.rating}%`,
                  }}
                >
                  <span className="text-[3rem] absolute -right-4 translate-y-[-100%] text-primary_color">
                    <BsFillChatSquareFill />
                    <span className="text-sm absolute  top-1 left-2 font-medium  text-white">
                      {`${item.rating}%`}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ExperiencedPeople = () => {
  const People = [
    {
      title: "Emily Spector",
      position: "Founder",
      profileImg:
        "https://gtkit.rometheme.pro/genical/wp-content/uploads/sites/18/2023/02/portrait-of-female-psychologist-with-clipboard-sit-TREKR2T.jpg",
      facebookUrl: "",
      twitterUrl: "",
      instagramUrl: "",
    },
    {
      title: "Chris Hammer",
      position: "Co-Founder",
      profileImg:
        "https://gtkit.rometheme.pro/genical/wp-content/uploads/sites/18/2023/02/professional-psychologist-DMGX85A.jpg",
      facebookUrl: "",
      twitterUrl: "",
      instagramUrl: "",
    },
    {
      title: "Ammy Clara",
      position: "Psychologist",
      profileImg:
        "https://gtkit.rometheme.pro/genical/wp-content/uploads/sites/18/2023/02/at-the-psychologist-R7BQS5Z.jpg",
      facebookUrl: "",
      twitterUrl: "",
      instagramUrl: "",
    },
    {
      title: "Beatrix Kiddo",
      position: "Psychologist",
      profileImg:
        "https://gtkit.rometheme.pro/genical/wp-content/uploads/sites/18/2023/02/psychologist-listens-attentively-to-a-client-in-hi-HAXA734.jpg",
      facebookUrl: "",
      twitterUrl: "",
      instagramUrl: "",
    },
  ];
  return (
    <div className=" px-5 lg:px-[4rem] xl:px-[6rem] mb-[8rem]">
      <div className="lg:w-[60%] mx-auto mb-[4rem]">
        <h3 className="font-[cursive] text-secondary_color text-xl  my-4 text-center">
          Why Choose Genical
        </h3>

        <h1 className="opacity-0 animate-slideup font-medium text-3xl lg:text-5xl my-6  text-center">
          Taking Care of Your Mental Health
        </h1>

        <p
          className="my-2 text-center text-text_color1  "
          style={{
            letterSpacing: "1px",
            wordSpacing: "1px",
          }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis ipsam
          explicabo, aspernatur totam quibabo, aspernatur totam quibabo,
          aspernatur totam quibusdam unde?
        </p>
      </div>

      {/* People  */}
      <div className="w-full mb-[3rem]  grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {People.map((item, index) => (
          <div
            key={index}
            className="w-full rounded-[4rem] overflow-hidden bg-primary_color flex flex-col"
          >
            <div className="h-[75%] w-full relative group  ">
              <img
                src={item.profileImg}
                alt={item.title}
                className="w-full h-full object-cover "
              />
              <div className="w-full h-0  group-hover:h-[10rem]  transition-all ease duration-800 bg-primary_color bg-opacity-30 absolute bottom-0  backdrop-blur-sm overflow-hidden ">
                <div className="h-full flex gap-3 items-center justify-center">
                  <a
                    className=" bg-secondary_color  text-3xl p-1 rounded-full text-white flex items-center justify-center border-2 transition-all  duration-300   border-secondary_color hover:bg-transparent hover:-translate-y-1 "
                    href={item.facebookUrl}
                    target="_blank"
                  >
                    <CiFacebook />
                  </a>
                  <a
                    className=" bg-secondary_color text-3xl p-1 rounded-full text-white flex items-center justify-center border-2 transition-all  duration-300   border-secondary_color hover:bg-transparent hover:-translate-y-1 "
                    href={item.twitterUrl}
                    target="_blank"
                  >
                    <CiTwitter />
                  </a>
                  <a
                    className=" bg-secondary_color  text-3xl p-1 rounded-full text-white flex items-center justify-center border-2 transition-all  duration-300   border-secondary_color hover:bg-transparent hover:-translate-y-1 "
                    href={item.instagramUrl}
                    target="_blank"
                  >
                    <CiInstagram />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
              <h1 className="text-2xl font-medium text-white">{item.title}</h1>
              <span className="text-lg text-secondary_color">
                {item.position}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full grid place-items-center">
        <button
          className="px-3 py-4 font-semibold text-white bg-secondary_color border-2 border-secondary_color  rounded-b-xl rounded-tl-xl hover:bg-transparent hover:text-primary_color transition-all duration-300"
          type="submit"
        >
          VIEW ALL TEAM
        </button>
      </div>
    </div>
  );
};

const CommunityTrust = () => {
  return (
    <div
      className="w-full  bg-fixed relative mb-[8rem] "
      style={{
        backgroundImage: `url(${communityBack})`,
      }}
    >
      {/* Overlay  */}
      <div className="w-full h-full absolute top-0  left-0  bg-primary_color opacity-70"></div>

      <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 items-center gap-y-10 px-6 py-[8rem]">
        <div className=" flex flex-col items-center gap-2 z-10">
          <span className=" text-secondary_color text-6xl">
            <GoThumbsup />
          </span>
          <div className=" text-4xl font-bold text-white relative">
            13 <span className="text-xl absolute ml-2">Th</span>
          </div>
          <h1 className="text-2xl  text-white">Years Experience</h1>
        </div>

        <div className=" flex flex-col items-center gap-2 z-10">
          <span className=" text-secondary_color text-6xl">
            <TbUsersGroup />
          </span>
          <div className=" text-4xl font-bold text-white relative">
            750<span className="text-xl absolute ml-2 ">+</span>
          </div>
          <h1 className="text-2xl  text-white">Happy Client</h1>
        </div>

        <div className=" flex flex-col items-center gap-2 z-10">
          <span className=" text-secondary_color text-6xl">
            <PiHandshakeLight />
          </span>
          <div className=" text-4xl font-bold text-white relative">
            96 <span className="text-xl absolute ml-2">%</span>
          </div>
          <h1 className="text-2xl  text-white">Problem Solved</h1>
        </div>

        <div className=" flex flex-col items-center gap-2 z-10">
          <span className=" text-secondary_color text-6xl">
            <TiUserAdd />
          </span>
          <div className=" text-4xl font-bold text-white relative">
            120<span className="text-xl absolute ml-2">+</span>
          </div>
          <h1 className="text-2xl  text-white">Psyhologist</h1>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
