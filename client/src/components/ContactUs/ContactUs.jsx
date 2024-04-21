import { useState } from "react";
import { BiLocationPlus, BiPhoneCall, BiWorld } from "react-icons/bi";
import { CiFacebook, CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import PageHeader from "../Layout/PageHeader";
import axios from "axios";
import { server } from "../../main";
import Loading from "../../utils/Loading";
import { toast } from "react-hot-toast";
import MetaData from "../../utils/MetaData";
import { AnimationData } from "../../utils/animationData";
import { motion } from "framer-motion";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const contactDetails = [
    {
      icon: <BiPhoneCall />,
      title: "Call Us",
      content: "+91 8447308007",
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
      content: "Plot No 184 Kh No 8/21/2, And 18/1/1 Sainik Enclave, Najafgarh, South West Delhi, New Delhi, Delhi, India, 110043",
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
  const groupStyle = "flex flex-col mb-[1rem]";
  const labelStyle = "text-lg font-medium mb-[0.3rem]";
  const inputStyle =
    "p-4 rounded-2xl border-[1px] outline-none border-black bg-background_color text-text_color1 ";

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const { data } = await axios.post(
        `${server}/sendmessage`,
        {
          name,
          email,
          subject,
          message,
        },
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
      );
      setLoading(false);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      toast.success(data.message);
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="w-full min-h-[100vh] bg-background_color">
      {/* MetData  */}
      <MetaData title={"Connect with Abhil Young Mind: We're Here to Help!"} description="Reach Out to Abhil Young Mind Foundation. Find our contact information, including phone number, email address, and a contact form. We look forward to hearing from you!" />

      {/* PageHeader  */}
      <PageHeader title1={"Contact"} title2={"Us"} />

      <div className="w-full px-5 lg:px-[4rem] xl:px-[8rem] py-[5rem] flex gap-[4rem] lg:gap-[2rem] xl:gap-[4rem] flex-col-reverse  lg:flex-row  transition-all duration-300">
        {/* Message Send Form */}
        <motion.div {...AnimationData.slideRight} className="lg:w-[45%]">
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
                value={name}
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
                value={email}
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
                value={subject}
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
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            <button
              className="flex items-center justify-center gap-3 px-3 py-4 mt-6 font-semibold text-white bg-primary_color border-2 border-primary_color  rounded-b-2xl rounded-tl-2xl hover:bg-transparent hover:text-primary_color transition-all duration-300"
              type="submit"
              disabled={loading}
            >
              {loading ? "SENDING" : "SEND MESSAGE"}{" "}
              {loading ? <Loading /> : ""}
            </button>
          </form>
        </motion.div>

        {/* Contact Details  */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Head  */}
          <div className="contact-us">
            <h3 className="  font-[cursive] text-secondary_color text-xl  my-4">
              Contact Us
            </h3>
            <motion.h1
              {...AnimationData.slideUp}
              className="opacity-0 font-medium text-3xl lg:text-5xl"
            >
              Get In Touch
            </motion.h1>
            <p
              className="my-4 text-justify text-text_color1 "
              style={{
                letterSpacing: "1px",
                wordSpacing: "1px",
              }}
            >
              Have questions or need support? Get in touch with us for guidance on fostering mental growth, improving well-being, and embracing a better, smarter life. We&apos;re here to help.
            </p>
          </div>

          {/* Contacts  */}
          <article className="w-full flex flex-col sm:flex-row sm:flex-wrap">
            {contactDetails.map((item, index) => (
              <div key={index} className="sm:w-[50%] flex gap-2 mb-4">
                <div className=" text-5xl text-secondary_color">
                  {item.icon}
                </div>
                <div>
                  <span className="text-xl font-medium"> {item.title}</span>
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
                  className=" bg-secondary_color mr-4 text-4xl p-1 rounded-full text-white flex items-center justify-center border-2 transition-all  duration-300   border-secondary_color hover:bg-transparent hover:text-primary_color hover:-translate-y-1 "
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
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
