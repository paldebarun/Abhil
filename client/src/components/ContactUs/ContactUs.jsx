import React, { useState } from "react";
import { BiLocationPlus, BiPhoneCall, BiWorld } from "react-icons/bi";
import { CiFacebook, CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import PageHeader from "../Layout/PageHeader";

const ContactUs = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

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
      content: "sfbsdf sndfs fnsd bf sd sdkhf ",
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

  //Styled
  const groupStyle = "flex flex-col mb-[10px]";
  const labelStyle = "text-lg font-medium mb-[0.3rem]";
  const inputStyle =
    "p-3 rounded-2xl border-[1px] outline-none border-black bg-background_color text-text_color1 ";

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name, email, subject, message);
  };

  return (
    <div className="w-full min-h-[100vh] bg-background_color">
      <PageHeader title1={"Contact"} title2={"Us"} />

      <div className="w-full px-5 lg:px-[4rem] xl:px-[8rem] py-[5rem] flex gap-[4rem] lg:gap-[2rem] xl:gap-[4rem] flex-col-reverse  lg:flex-row  transition-all duration-300">
        {/* Message Send Form */}
        <div className="lg:w-[45%] animate-slideright">
          <form className="h-full" onSubmit={submitHandler}>
            <div className={groupStyle}>
              <label className={labelStyle} htmlFor="name">
                Your Name
              </label>
              <input
                className={inputStyle}
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className={groupStyle}>
              <label className={labelStyle} htmlFor="email">
                Your Email
              </label>
              <input
                className={inputStyle}
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={groupStyle}>
              <label className={labelStyle} htmlFor="subject">
                Subject
              </label>
              <input
                className={inputStyle}
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <div className={groupStyle}>
              <label className={labelStyle} htmlFor="message">
                Your Message
              </label>
              <textarea
                className={inputStyle}
                name="message"
                id="message"
                cols="30"
                rows="6"
                placeholder="Message"
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            <button
              className="px-3 py-4 mt-6 font-semibold text-white bg-primary_color border-2 border-primary_color  rounded-b-xl rounded-tl-xl hover:bg-transparent hover:text-primary_color transition-all duration-300 "
              type="submit"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>

        {/* Contact Details  */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Head  */}
          <div className="contact-us">
            <h3 className="  font-[cursive] text-secondary_color text-xl lg:text-4xl my-4">
              Contact Us
            </h3>
            <h1 className="opacity-0 animate-slideup font-medium text-3xl lg:text-5xl">
              Get In Touch
            </h1>
            <p
              className="my-4 text-justify text-text_color1 "
              style={{
                letterSpacing: "1px",
                wordSpacing: "1px",
              }}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. At magni
              excepturi eos tempora temporibus quasi ipspora temporibus quasi
              ipspora temporibus quasi ipsa corrupti mollitia, doloribus, dicta
              aliquam iste reprehenderit inventore officiis.
            </p>
          </div>

          {/* Contacts  */}
          <article className="w-full flex flex-col sm:flex-row sm:flex-wrap">
            {contactDetails.map((item, index) => (
              <div key={index} className="sm:w-[50%] flex gap-2 mb-4">
                <span className=" text-5xl text-secondary_color">
                  {item.icon}
                </span>
                <div>
                  <span className="  text-xl font-medium"> {item.title}</span>
                  <p className="text-lg text-text_color1 break-all">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </article>

          {/* Social Media  */}
          <div className="">
            <h1 className="sm:text-2xl mb-4 font-medium ">Fallow Us On</h1>

            <div className="flex">
              {socialMediaAccounts.map((item, index) => (
                <a
                  key={index}
                  className=" bg-secondary_color mr-4 text-4xl p-1 rounded-full text-white flex items-center justify-center border-2 transition-all  duration-300 border-secondary_color hover:bg-transparent hover:text-primary_color hover:-translate-y-1 "
                  href="/"
                  target={item.url}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
