import React, { useState } from "react";
import axios from "axios";
import MetaData from "../../utils/MetaData";
import { AnimationData } from "../../utils/animationData";
import { motion } from "framer-motion";
import Family from "../../assets/Donations/Family.jpg";
import Assuarance from "../../assets/Donations/Assurance.jpg";
import Part from "../../assets/Donations/PartsofCommunity.jpg";
import Map from "../../assets/Donations/map.png";
import SaveTax from "../../assets/Donations/Donate_save_tax1.png";
import DonationHelp from "./DonationHelp";
import DonationImpact from "./DonationImpact";
import DonationFaq from "./DonationFaq";
import DonorTestimonials from "./DonorTestimonials";

const Donation = () => {
  const [showTab, setShowTab] = useState(0);
  const [manualAmount, setManualAmount] = useState("");

  const AmountTabs = [
    {
      amount: 800,
      content: (
        <div className="h-full flex items-center justify-around gap-1 p-2 border-2 border-black">
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
      amount: 1000,
      content: (
        <div className="h-full flex gap-1 items-center justify-around p-2 border-2 border-black">
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
      amount: 1500,
      content: (
        <div className="h-full flex items-center gap-1 justify-around p-2 border-2 border-black">
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
        <div className="h-full flex items-center justify-around p-2 border-2 border-black">
          <input
            className="border-2 w-full py-2 px-4 border-gray-700"
            type="number"
            placeholder="₹ OTHER AMOUNT"
            onChange={(e) => setManualAmount(e.target.value)}
          ></input>
        </div>
      ),
    },
  ];

  const Benefits = [
    {
      title: "ASSURANCE & TRANSPARENCY",
      icon: Assuarance,
      description:
        "Our foundation's unwavering commitment to assurance and transparency builds trust, ensuring a brighter future for young minds we empower.",
    },
    {
      title: "A Family of Changemakers",
      icon: Family,
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

  const donateSubmitHandler = async () => {
    try {
      if (AmountTabs[showTab].amount === "OTHER") {
        AmountTabs[showTab].amount = parseInt(manualAmount, 10);
      } else if (typeof AmountTabs[showTab].amount === "string") {
        amount = parseInt(amount, 10);
      }

      if (
        !AmountTabs[showTab].amount ||
        typeof AmountTabs[showTab].amount !== "number"
      ) {
        console.log(AmountTabs[showTab].amount);
        console.error("Invalid amount:");
        return;
      }

      const {
        data: { key1 },
      } = await axios.get("http://localhost:8000/api/v1/getkey");

      const orderURL = "http://localhost:8000/api/v1/payment";
      const {
        data: { order },
      } = await axios.post(orderURL, {
        amount: AmountTabs[showTab].amount,
      });

      const options = {
        key: key1,
        amount: order.amount,
        currency: "INR",
        name: "Abhil Young Mind Foundation",
        discription: "Donation for better future of poor childs.",
        order_id: order.id,
        callback_url: "http://localhost:8000/api/v1/paymentverification",

        theme: {
          color: "#3399cc",
        },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
      // initiatePayment(data);
    } catch (error) {
      console.log("order not placed", error);
    }
  };

  return (
    <div className="w-full">
      {/* MetData  */}
      <MetaData title={"Donate Now"} />

      {/* Donation Content Componet */}
      <div className="h-screen  desktopView relative" >
        <div className=" text-white capitalize w-[90%] max-sm:mx-auto sm:w-[25rem] absolute max-sm:translate-x-[-50%] left-[50%] sm:left-[6rem] top-6 sm:top-[4.5rem]">
          <h1 className="text-5xl sm:text-6xl max-sm:text-center font-bold leading-[55px] sm:leading-[70px] mb-4 sm:mb-8">humanity starts with charity</h1>
          <p className="sm:text-2xl max-sm:text-center opacity-80">embrace humanity, spark hope change lives.</p>
          <button className="max-sm:w-[15rem] mx-auto px-12 py-4 bg-orange-600 my-4 sm:my-8 text-xl font-bold uppercase max-sm:absolute max-sm:translate-x-[-50%] max-sm:left-[50%]" >Donate now</button>
        </div>
        <div className="max-lg:hidden w-[16rem]  absolute bottom-12 right-36 text-white opacity-90 text-2xl"> 
          Making a difference one donation at a time
        </div>
      </div>

      <div className="w-full max-w-screen-xl mx-auto p-4 sm:p-8">
        {/* Donation Discription  */}
        <motion.div
          {...AnimationData.slideUp}
          className="w-full sm:w-[85%] md:w-3/4 lg:w-2/3 m-auto bg-white -mt-16 p-4 md:p-8 lg:p-12 shadow-lg rounded-xl mb-4 sm:mb-16"
        >
          <p className="text-center sm:text-lg">
            <span className=" font-semibold">
              Abhil Young Mind Donor Family
            </span>{" "}
            is a family of changemakers who believe we can help{" "}
            <span className="font-semibold">children thrive and grow</span>{" "}
            to their full potential when{" "}
            <span className=" font-semibold">
              we all unite as a family and pledge to support every child.
            </span>
          </p>
        </motion.div>

        {/* Donation impact start  */}

        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 my-8 md:mt-0">
            <motion.h2
              {...AnimationData.slideRight}
              className="text-2xl md:text-4xl font-bold uppercase"
            >
              "You make a living by what you get, You make a life by what you
              give."
            </motion.h2>
            <div className="md:text-xl pt-3 md:pt-6 opacity-80">
              Even a small donation is a big help for someone in need and can
              provide long lasting support to underserved communities. Smile
              Foundation works to provide better lives to vulnerable children
              and families, and our work is completely dependent on the generous
              contributions made by socially committed and responsible
              individuals.
            </div>
          </div>
          <div className="md:w-1/2">
            <motion.img
              {...AnimationData.slideLeft}
              src={Map}
              alt="India illustration"
              className="w-full md:w-auto h-auto object-contain "
            />
          </div>
        </div>
        <motion.h2
          {...AnimationData.slideRight}
          className="text-2xl md:text-4xl max-sm:text-center font-bold  mt-8 mb-3 md:mt-12"
        >
          Our Impact Last Year
        </motion.h2>
        <DonationImpact />


        <div className="flex flex-col lg:flex-row my-16 items-center">
          <div className="lg:w-3/5">
            <motion.h2
              {...AnimationData.slideRight}
              className="text-2xl md:text-4xl max-sm:text-center font-bold pb-2 md:pb-4"
            >
              DONATE & SAVE TAX
            </motion.h2>
            <p className="sm:text-xl opacity-80">
              When you make a donation under Section 80G to Smile Foundation,
              you can claim a tax deduction on the donated amount. This reduces
              your overall taxable income, and you end up paying less in income
              tax. We are registered under Section 12A (a) of the Income Tax
              Act, 1961 and the Indian Trusts Act, 1882.
            </p>
            <ul className="text-lg md:text-xl font-semibold my-2 md:my-4 px-6 list-disc space-y-1 sm:space-y-2">
              <li className="relative">
                {/* <div className="before:absolute before:content-[''] before:w-2 before:h-2 before:bg-green-500 before:rounded-full before:left-0.5 before:-bottom-3 after:absolute after:content-[''] after:w-2/5 after:bg-green-500 after:h-1 after:left-5 after:-bottom-2.5 after:rounded-2xl"></div> */}
                Make a donation online through this donation page
              </li>
              <li className="relative">
                {/* <div className="before:absolute before:content-[''] before:w-3 before:h-3 before:bg-green-500 before:rounded-full before:left-[-24px] before:top-5"></div> */}
                Smile Foundation will provide you with a tax-exempt certificate
                after the donation is made (by 31st May of the next financial
                year)
              </li>
              <li className="relative">
                {/* <div className="before:absolute before:content-[''] before:w-3 before:h-3 before:bg-green-500 before:rounded-full before:left-[-24px] before:top-5"></div> */}
                Use the provided certificate when filing your income tax return
                to claim the tax deduction under Section 80G
              </li>
              {/* <li className="relative">
                <div className="after:absolute after:content-[''] after:w-3/5 after:bg-green-500 after:h-1"></div>
              </li> */}
            </ul>
          </div>
          <div className="md:w-2/5 mt-4 md:mt-0">
            <motion.img
              {...AnimationData.slideLeft}
              src={SaveTax}
              alt="Donate and save tax"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Donate and save tax End */}

        {/* How Donation Help start*/}
        <motion.h2
          {...AnimationData.slideRight}
          className="text-2xl md:text-4xl  font-bold pb-5 md:pb-8"
        >
          HOW WILL YOUR DONATION HELP?
        </motion.h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <DonationHelp />
        </div>
        {/* How Donation Help End*/}

        {/* About Foundation Start */}
        <div className="my-6  md:my-12" >
          <motion.h2
            {...AnimationData.slideRight}
            className="text-2xl md:text-4xl max-sm:text-center font-bold pb-3  uppercase"
          >
            ABOUT SMILE FOUNDATION
          </motion.h2>
          <div className="opacity-80">
            <p className=" sm:text-xl leading-5 sm:leading-7 mb-2">
              Started in 2002, Smile Foundation is an Indian development
              organisation that works with children and their families to provide
              access to quality education, primary healthcare and livelihood
              opportunities. We have over 400 projects, spread over 2000 villages
              and slums in 25 states of the country.{" "}
            </p>
            <p className=" sm:text-xl leading-5 sm:leading-7">
              {" "}
              Smile Foundation acts as a catalyst in the cycle of change,
              complementing and supplementing government efforts towards achieving
              the Sustainable Development Goals (SDGs). We collaborate, sensitize
              and partner with like-minded institutions and individuals to
              implement high-impact programmes. The focus is to enable access,
              enhance quality and bring long-term behavioral change to
              communities, especially at the grassroots.
            </p>
          </div>
        </div>
        {/* About Foundation End */}

        {/* Testimonial Start */}
        <div className="my-8 md:my-16">
          <motion.h2
            {...AnimationData.slideRight}
            className="text-2xl max-sm:text-center md:text-4xl font-bold max-sm:pb-12 pb-6 md:pb-10 uppercase"
          >
            DONOR TESTIMONIALS
          </motion.h2>
          <DonorTestimonials />
        </div>
        {/* Testimonial End */}

        {/* FAQs Start */}
        <div className="md:px-4 mx-auto lg:w-3/4">
          <DonationFaq />
        </div>
        {/* FAQs Start */}
      </div>
    </div>
  );
};

export default Donation;
