import React, { useState } from "react";
import PageHeader from "../Layout/PageHeader";
import MetaData from "../../utils/MetaData";
import downArrow from "../../assets/down-arrow-svgrepo-com.svg";
import { toast } from "react-hot-toast";
import axios from "axios";
import { FaUserSecret, FaRegAddressBook, FaRegClock } from "react-icons/fa";
import { server } from "../../main";
import Loading from "../../utils/Loading";
import { AnimationData } from "../../utils/animationData";
import { motion } from "framer-motion";

const Appointment = () => {
  return (
    <div className="w-full min-h-[100vh] bg-background_color">
      {/* MetData  */}
      <MetaData title={"Appoinment"} />

      {/* PageHeader  */}
      <PageHeader title1={"Appoinment"} title2={""} />

      {/* Appintment Content  */}
      <div className="pt-[6rem]">
        <AppintmentForm />
      </div>
    </div>
  );
};

export const AppintmentForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");

  const [loading, setLoading] = useState(false);

  const contactDetails = [
    {
      icon: <FaUserSecret />,
      title: "Customeer Service",
      content: "+915708458245",
    },
    {
      icon: <FaRegAddressBook />,
      title: "Clinic Address",
      content: "99 Roving St., Big City, PKU 23456",
    },
    {
      icon: <FaRegClock />,
      title: "Opening Hours",
      content: "Monday - Saturday ( 09.00 - 21.00 ) Sunday ( Closed )",
    },
  ];

  // Submit Form Handler
  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const { data } = await axios.post(
        `${server}/appointment`,
        {
          name,
          email,
          phone,
          service,
          date,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(name, service, phone, date, email);
      setLoading(false);
      setName("");
      setEmail("");
      setPhone("");
      setService("");
      setDate("");
      toast.success(data.message);
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message);
    }
  };

  //Styled
  const groupStyle = "flex flex-col mb-[1rem]";
  const labelStyle = "text-lg font-medium mb-[0.3rem]";
  const inputStyle =
    "p-4 rounded-2xl border-[1px] outline-none border-black bg-background_color text-text_color1 ";

  return (
    <div className="w-full px-5 lg:px-[4rem] xl:px-[8rem] pb-[8rem] flex gap-[4rem] lg:gap-[2rem] xl:gap-[4rem] flex-col-reverse  lg:flex-row  transition-all duration-300 ">
      {/* Appointment Send Form */}
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
              Phone
            </label>
            <input
              className={inputStyle}
              type="number"
              name="subject"
              id="subject"
              value={phone}
              placeholder="Phone Number"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className={groupStyle}>
              <label className={labelStyle} htmlFor="message">
                Select Services
              </label>

              <select
                className={inputStyle}
                name="services"
                id="services"
                onChange={(e) => setService(e.target.value)}
                value={service}
                style={{
                  appearance: "none",
                  background: `url(${downArrow}) 95% / 5%  no-repeat`,
                }}
              >
                <option disabled hidden value="">
                  Select Option
                </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
              </select>
            </div>
            <div className={groupStyle}>
              <label className={labelStyle} htmlFor="message">
                Select Date
              </label>
              <input
                className={inputStyle}
                type="date"
                name="subject"
                id="subject"
                value={date}
                placeholder="Phone Number"
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
          </div>

          <button
            className="flex items-center justify-center gap-3 px-3 py-4 mt-6 font-semibold text-white bg-primary_color border-2 border-primary_color  rounded-b-2xl rounded-tl-2xl hover:bg-transparent hover:text-primary_color transition-all duration-300"
            type="submit"
            disabled={loading}
          >
            {loading ? "BOOKING" : " BOOK AND APPOINMENT"}{" "}
            {loading ? <Loading /> : ""}
          </button>
        </form>
      </motion.div>

      {/* Appointment Details  */}
      <div className="flex-1 flex flex-col gap-4">
        {/* Head  */}
        <div className="contact-us">
          <h3 className="  font-[cursive] text-secondary_color text-xl">
            Appointment
          </h3>
          <motion.h1
            {...AnimationData.slideUp}
            className="opacity-0 font-medium text-3xl lg:text-5xl my-8"
          >
            Make An Appointment
          </motion.h1>
          <p
            className="my-8 text-justify text-text_color1 "
            style={{
              letterSpacing: "1px",
              wordSpacing: "1px",
            }}
          >
            Nullam fermentum ullamcorper diam sit amet porta. Etiam ac enim
            velit. Ut ut mi sed turpis accumsan sagittis ac eu magna. Etiam ac
            nisi lorem et. Morbi at velit nisl. Donec ut felis libero donec
            tincidunt.
          </p>
        </div>

        {/* Contacts  */}
        <article className="w-full flex flex-col gap-4">
          {contactDetails.map((item, index) => (
            <div key={index} className="flex gap-4 mb-4">
              <div className=" text-6xl text-secondary_color">{item.icon}</div>
              <div>
                <span className="text-2xl font-medium"> {item.title}</span>
                <p className="text-lg text-text_color1 ">{item.content}</p>
              </div>
            </div>
          ))}
        </article>
      </div>
    </div>
  );
};

export default Appointment;
