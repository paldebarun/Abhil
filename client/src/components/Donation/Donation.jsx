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
import DonatationHelp from "./DonationHelp";
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
        <div className="h-full flex items-center justify-between gap-1 p-2 border-2 border-black">
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
        <div className="h-full flex gap-1 items-center justify-between p-2 border-2 border-black">
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
        <div className="h-full flex items-center gap-1 justify-between p-2 border-2 border-black">
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
        <div className="h-full flex items-center justify-between p-2 border-2 border-black">
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

      {/* PageHeader  */}
      {/* <PageHeader title1={"Donate"} title2={"Now"} /> */}

      {/* Donation Content Componet */}
      <div
        className="h-[100vh]"
        style={{
          backgroundImage: `url(https://png.pngtree.com/thumb_back/fh260/back_our/20190614/ourmid/pngtree-positive-energy-youth-poster-background-material-image_122998.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="h-full flex items-center justify-center sm:justify-start px-1 sm:px-5 lg:px-[4rem] xl:px-[8rem]">
          {/* Donatation Box  */}
          <motion.div
            className="bg-white py-4 px-3 rounded-lg shadow-xl"
            {...AnimationData.slideRight}
          >
            {/* Heading  */}
            <div>
              <h1 className="text-4xl font-bold">MAKE A</h1>
              <h1 className="text-4xl font-bold text-secondary_color">
                DONATION
              </h1>
            </div>

            {/* Donation Box */}
            <div>
              {/* Amount Tabs  */}
              <div className="grid grid-cols-4 gap-1 py-2">
                {AmountTabs.map((item, index) => (
                  <button
                    key={index}
                    className={`py-1 px-1 sm:px-2 sm:text-2xl border-2 border-black ${
                      showTab == index ? "bg-secondary_color" : ""
                    } transition-all duration-300`}
                    onClick={() => setShowTab(index)}
                  >
                    {item.amount}
                  </button>
                ))}
              </div>

              {/* Donation Discripton  */}
              <div className=" border-2 border-black h-[10rem] p-2">
                {AmountTabs[showTab].content}
              </div>

              {/* Next Button  */}
              <button
                onClick={() => donateSubmitHandler()}
                className="bg-secondary_color w-full py-3 my-4 text-xl font-bold hover:bg-transparent border-2 border-secondary_color transition-all duration-300"
              >
                NEXT
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Donation Dialog Box Popup  */}
      {/* <div
        className={`fixed z-10 top-0 w-full h-full bg-black bg-opacity-50 overflow-auto ${
          showPopup ? "block opacity-100" : "hidden opacity-0"
        } transition-all duration-300`}
        onClick={() => setShowPopup(false)}
      >
        <div className="h-[80%] w-[80%] m-auto mt-20 bg-white shadow-xl rounded-sm py-4 px-6 relative">
          <figure
            className="text-white text-3xl absolute top-0 -right-10 cursor-pointer hover:scale-125 transition-all duration-300"
            onClick={() => setShowPopup(false)}
          >
            <MdOutlineClose />
          </figure>

          <div>Payment Verfication Content</div>
        </div>
      </div> */}

      {/* Donation Discription  */}
      <motion.div
        {...AnimationData.slideUp}
        className="w-[95%] sm:w-[80%] lg:w-[65%] m-auto bg-white -mt-10 py-[4rem] px-10 shadow-lg rounded-xl mb-[8rem]"
      >
        <p className=" text-center">
          <span className=" text-lg font-bold">
            Abhil Young Mind Donor Family
          </span>{" "}
          is a family of changemakers who believe we can help{" "}
          <span className=" text-lg font-bold">children thrive and grow</span>{" "}
          to their full potential when{" "}
          <span className=" text-lg font-bold">
            we all unite as a family and pledge to support every child.
          </span>
        </p>
      </motion.div>

      {/* Donation impact start  */}

      <div className="p-4 md:p-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-5 md:mt-0 p-4 md:p-10">
            <motion.h2
              {...AnimationData.slideRight}
              className="text-2xl md:text-4xl font-bold uppercase"
            >
              "You make a living by what you get, You make a life by what you
              give."
            </motion.h2>
            <div className="text-xl md:text-2xl pt-4 md:pt-20">
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
              className="w-full md:w-auto h-auto pl-4 md:pl-10"
            />
          </div>
        </div>
        <motion.h2
          {...AnimationData.slideRight}
          className="text-2xl md:text-4xl font-bold mt-4 md:mt-8 pl-4 md:pl-10"
        >
          Our Impact Last Year
        </motion.h2>
        <DonationImpact />
      </div>
      {/* Donation impact End  */}

      {/* Donate and save tax End */}

      <div className="p-4 md:p-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-3/5">
            <motion.h2
              {...AnimationData.slideRight}
              className="text-2xl md:text-4xl font-bold pb-2 md:pb-4"
            >
              DONATE & SAVE TAX
            </motion.h2>
            <p className="text-xl md:text-2xl mt-2 md:mt-4 font-500">
              When you make a donation under Section 80G to Smile Foundation,
              you can claim a tax deduction on the donated amount. This reduces
              your overall taxable income, and you end up paying less in income
              tax. We are registered under Section 12A (a) of the Income Tax
              Act, 1961 and the Indian Trusts Act, 1882.
            </p>
            <ul className="text-xl md:text-2xl font-semibold mt-2 md:mt-4 list-none mb-2 md:mb-4">
              <li className="relative">
                <div className="before:absolute before:content-[''] before:w-3 before:h-3 before:bg-green-500 before:rounded-full before:left-[-24px] before:top-5"></div>
                Make a donation online through this donation page
              </li>
              <li className="relative">
                <div className="after:absolute after:content-[''] after:w-3/5 after:bg-green-500 after:h-1"></div>
              </li>
              <li className="relative">
                <div className="before:absolute before:content-[''] before:w-3 before:h-3 before:bg-green-500 before:rounded-full before:left-[-24px] before:top-5"></div>
                Smile Foundation will provide you with a tax-exempt certificate
                after the donation is made (by 31st May of the next financial
                year)
              </li>
              <li className="relative">
                <div className="after:absolute after:content-[''] after:w-3/5 after:bg-green-500 after:h-1"></div>
              </li>
              <li className="relative">
                <div className="before:absolute before:content-[''] before:w-3 before:h-3 before:bg-green-500 before:rounded-full before:left-[-24px] before:top-5"></div>
                Use the provided certificate when filing your income tax return
                to claim the tax deduction under Section 80G
              </li>
              <li className="relative">
                <div className="after:absolute after:content-[''] after:w-3/5 after:bg-green-500 after:h-1"></div>
              </li>
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
      </div>

      {/* Donate and save tax End */}

      {/* How Donation Help start*/}
      <div className="p-8">
        <motion.h2
          {...AnimationData.slideRight}
          className="text-4xl font-bold pb-4 pl-5"
        >
          HOW WILL YOUR DONATION HELP?
        </motion.h2>
        <div className="flex flex-wrap items-center justify-center pt-5">
          <DonatationHelp />
        </div>
      </div>
      {/* How Donation Help End*/}

      {/* About Foundation Start */}
      <div className="p-8">
        <motion.h2
          {...AnimationData.slideRight}
          className=" text-4xl font-bold pb-4 pl-5 uppercase"
        >
          ABOUT SMILE FOUNDATION
        </motion.h2>
        <div className="p-5">
          <p className=" text-lg font-medium leading-7">
            Started in 2002, Smile Foundation is an Indian development
            organisation that works with children and their families to provide
            access to quality education, primary healthcare and livelihood
            opportunities. We have over 400 projects, spread over 2000 villages
            and slums in 25 states of the country.{" "}
          </p>
          <p className=" text-lg font-medium leading-7">
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
      <div className="p-8">
        <motion.h2
          {...AnimationData.slideRight}
          className=" text-4xl font-bold pb-10 pl-5 uppercase"
        >
          DONOR TESTIMONIALS
        </motion.h2>
        <DonorTestimonials />
      </div>
      {/* Testimonial End */}

      {/* FAQs Start */}
      <div className="px-4 lg:mx-auto lg:w-[55rem] py-[5rem] ">
        <DonationFaq />
      </div>
      {/* FAQs Start */}
    </div>
  );
};

export default Donation;
