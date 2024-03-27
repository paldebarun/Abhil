import { useState } from "react";
import MetaData from "../../utils/MetaData";
import { AnimationData } from "../../utils/animationData";
import { motion } from "framer-motion";
import Map from "../../assets/Donations/map.png";
import SaveTax from "../../assets/Donations/Donate_save_tax1.png";
import DonationHelp from "./DonationHelp";
import DonationImpact from "./DonationImpact";
import DonationFaq from "./DonationFaq";
import DonorTestimonials from "./DonorTestimonials";
import { useNavigate } from "react-router-dom";
import { MdCancel } from "react-icons/md";

const Donation = () => {
  const [details, SetDetails] = useState({
    amount: 0,
    toWhat: "",
  });
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const donateNow = () => {
    const { amount, toWhat } = details;
    if (amount <= 0) return alert("please enter valid amount");
    if (!toWhat) return alert("please choose payment option");
    navigate("/checkout", { state: { amount, toWhat } });
  };

  const handelChange = (e) => {
    const { name, value } = e.target;
    SetDetails({ ...details, [name]: value })
  }

  return (
    <div className="w-full">
      {/* MetData  */}
      <MetaData title={"Support Mental Wellness, Education, & Families. Donate Now to Abhil Young Mind!"} description="our donation makes a difference! Invest in the future by supporting Abhil Young Mind's mission: mental well-being, education, and empowered families. Donate today!" />

      {/* Donation Content Componet */}
      <div className="h-screen  desktopView relative">
        <div className=" text-white capitalize w-[90%] max-sm:mx-auto sm:w-[25rem] absolute max-sm:translate-x-[-50%] left-[50%] sm:left-[6rem] top-6 sm:top-[4.5rem]">
          <h1 className="text-5xl sm:text-6xl max-sm:text-center font-bold leading-[55px] sm:leading-[70px] mb-4 sm:mb-8">
            humanity starts with charity
          </h1>
          <p className="sm:text-2xl max-sm:text-center opacity-80">
            embrace humanity, spark hope change lives.
          </p>
          <button
            className="max-sm:w-[15rem] mx-auto px-12 py-4 bg-orange-600 my-4 sm:my-8 text-xl font-bold uppercase max-sm:absolute max-sm:translate-x-[-50%] max-sm:left-[50%]"
            onClick={() => setOpen(true)}
          >
            Donate now
          </button>
        </div>
        <div className="max-lg:hidden w-[16rem]  absolute bottom-12 right-36 text-white opacity-90 text-2xl">
          Making a difference one donation at a time
        </div>
      </div>
      {open && (
        <section className="w-full h-screen flex justify-center items-center bg-black/80 fixed top-0 left-0 z-[9999]">
          <div className="w-full   max-md:overflow-y-auto md:w-[35rem] min-h-[25rem] md:rounded-2xl bg-[#fef6e1] shadow-lg p-4 sm:p-8 relative">
            <MdCancel
              size={30}
              className="absolute top-2 right-2 cursor-pointer text-gray-600"
              onClick={() => setOpen(false)}
            />
            <h1 className="font-bold text-center text-3xl text-green-500 max-md:mt-6 mb-4 md:mb-6">
              Donate & Sav Tax
            </h1>
            <form onSubmit={donateNow}>
              <div className="flex flex-wrap items-center text-lg font-semibold">
                <div className="xl:w-2/3 mx-auto flex justify-between items-center">
                  <div>
                    <input type="radio" name="amount" className="radioBtn" id="3000" value={3000}
                      onChange={handelChange} />
                    <label htmlFor="3000" className="me-6">₹ 3000</label>
                  </div>
                  <div>
                    <input type="radio" name="amount" className="radioBtn" id="6000" value={6000}
                      onChange={handelChange} />
                    <label htmlFor="6000" className="me-6">₹ 6000</label>
                  </div>
                  <div>
                    <input type="radio" name="amount" className="radioBtn" id="12000" value={12000}
                      onChange={handelChange} />
                    <label htmlFor="12000" className="me-6">₹ 12000</label>
                  </div>
                </div>
                <div className="w-full">
                  <input
                    type="number"
                    className="border rounded-md bg-white placeholder:text-base placeholder:font-normal py-2 outline-none px-3 text-base font-normal w-full my-3"
                    placeholder="Other amount"
                    name="amount"
                    onChange={handelChange}
                  />
                </div>
              </div>
              <h3 className="text-base font-semibold mb-3 text-gray-800">
                We offer several ways to support our mission.
                Choose the one that aligns with your interests
              </h3>
              <div className="space-y-2 font-medi text-gray-600">
                <div className="space-x-2 flex ">
                  <input
                    type="radio"
                    name="toWhat"
                    className="radioBtn min-w-min mt-1"
                    style={{ minWidth: "16px" }}
                    value="Invest in a Child's Future: Support our education programs and empower underprivileged children to reach their full potential."
                    onChange={handelChange}
                  />
                  <label htmlFor="link-radio text-xs"> <span className="font-semibold text-gray-700">Invest in a Child&apos;s Future: </span>Support our education programs and empower underprivileged children to reach their full potential.</label>
                </div>
                <div className="space-x-2 flex ">
                  <input
                    type="radio"
                    name="toWhat"
                    className="radioBtn min-w-min mt-1"
                    style={{ minWidth: "16px" }}
                    value="Help Families in Need: Contribute to our poverty alleviation initiatives, providing vital resources and support to struggling families."
                    onChange={handelChange}
                  />
                  <label htmlFor="link-radio text-xs"> <span className="font-semibold text-gray-700">Help Families in Need: </span>Contribute to our poverty alleviation initiatives, providing vital resources and support to struggling families.</label>
                </div>
                <div className="space-x-2 flex">
                  <input
                    type="radio"
                    name="toWhat"
                    className="radioBtn min-w-min mt-1"
                    style={{ minWidth: "16px" }}
                    value={"Facilitate Empowering Marriages: Support our program facilitating dignified mass marriages for underprivileged communities."}
                    onChange={handelChange}
                  />
                  <label htmlFor="link-radio text-xs"> <span className="font-semibold text-gray-700"> Facilitate Empowering Marriages: </span>Support our program facilitating dignified mass marriages for underprivileged communities.</label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full uppercase bg-[#38b44a] text-xl font-semibold py-2.5 rounded-md text-white mt-4"
              >
                Donate Now
              </button>
            </form>
          </div>
        </section>
      )}

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
            <span className="font-semibold">children thrive and grow</span> to
            their full potential when{" "}
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
              &quot;You make a living by what you get, You make a life by what
              you give.&quot;
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
        <div className="my-6  md:my-12">
          <motion.h2
            {...AnimationData.slideRight}
            className="text-2xl md:text-4xl max-sm:text-center font-bold pb-3  uppercase"
          >
            ABOUT SMILE FOUNDATION
          </motion.h2>
          <div className="opacity-80">
            <p className=" sm:text-xl leading-5 sm:leading-7 mb-2">
              Started in 2002, Smile Foundation is an Indian development
              organisation that works with children and their families to
              provide access to quality education, primary healthcare and
              livelihood opportunities. We have over 400 projects, spread over
              2000 villages and slums in 25 states of the country.{" "}
            </p>
            <p className=" sm:text-xl leading-5 sm:leading-7">
              {" "}
              Smile Foundation acts as a catalyst in the cycle of change,
              complementing and supplementing government efforts towards
              achieving the Sustainable Development Goals (SDGs). We
              collaborate, sensitize and partner with like-minded institutions
              and individuals to implement high-impact programmes. The focus is
              to enable access, enhance quality and bring long-term behavioral
              change to communities, especially at the grassroots.
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
