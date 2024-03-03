import Testimonial1 from "../../assets/Donations/testimonial1.png";
import Testimonial2 from "../../assets/Donations/testimonial2.png";
import { BiSolidQuoteRight } from "react-icons/bi";
import { AnimationData } from "../../utils/animationData";
import { motion } from "framer-motion";

const DonorTestimonials = () => {
  const testimonialData = [
    {
      img: Testimonial1,
      name: "Swakeerat Jain",
      bgcolor: "#FFD700",
      message:
        "I learned about Smile Foundation through a friend, and upon searching more about it, I discovered the truly commendable work they are doing for children. I want to express my appreciation to the Smile Team member who visited my house to hand over the tax-savings certificate personally.",
    },
    {
      img: Testimonial2,
      name: "Rajeev Rastogi",
      bgcolor: "#D1D5DB",
      message:
        "I learned about Smile Foundation through a friend, and upon searching more about it, I discovered the truly commendable work they are doing for children. I want to express my appreciation to the Smile Team member who visited my house to hand over the tax-savings certificate personally.",
    },
  ];
  return (
    <>
      <div className="grid md:grid-cols-2 max-md:gap-y-12 md:gap-x-8">
        {testimonialData.map((item, index) => (
          <motion.div
            {...AnimationData.slideLeft}
            className="p-5  sm:p-10 mt-4 mb-4 rounded-xl shadow-lg w-full"
            style={{ backgroundColor: item.bgcolor }}
            key={index}
          >
            <div className="w-full flex items-start">
              <img
                className=" h-[6rem] w-[6rem] object-cover mt-[-3.75rem] rounded-full"
                src={item.img}
                alt="Swakeert Jain"
              />
              <div>
                <div className="flex justify-between mt-12 mb-4 ml-[-6.4rem]">
                  <h2 className="font-bold text-xl">{item.name}</h2>
                  <div className="flex justify-end">
                    <BiSolidQuoteRight
                      style={{ color: "green", fontSize: "2em" }}
                    />
                  </div>
                </div>
                <p className="text-lg font-600 ml-[-6.4rem]">{item.message}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default DonorTestimonials;
