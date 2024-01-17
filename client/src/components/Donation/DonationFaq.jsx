import { motion } from "framer-motion";
import { AnimationData } from "../../utils/animationData";

const DonationFaq = () => {
  const DonationFAQ = [
    {
      ques: "What is Abhil Young Mind Growth Foundation's mission and focus??",
      ans: "Our mission is to empower young individuals in their mental growth and well-being journey, helping them lead better and smarter lives through comprehensive support and guidance.",
    },
    {
      ques: "How can your foundation help young people with their mental growth and well-being?",
      ans: "We offer a range of resources, expert guidance, and a supportive community to assist young people in prioritizing their mental health and fostering personal growth.",
    },
    {
      ques: "Is your support available online or in-person?",
      ans: "Our support is primarily available online for easy accessibility, ensuring young individuals can access our services from the comfort of their homes.",
    },
    {
      ques: "Do I need to pay for your services or resources?",
      ans: "No, our services and resources are provided free of charge to ensure that every young person has access to the help they need.",
    },
    {
      ques: "Who are the experts and professionals behind your foundation?",
      ans: "Our team consists of experienced psychologists and mental health professionals dedicated to guiding young minds towards better mental well-being.",
    },
    {
      ques: "How do I make an appointment or access your services?",
      ans: "You can schedule an appointment or access our services through our website or contact us for further assistance.",
    },
    {
      ques: "Is my information and communication with your foundation kept confidential?",
      ans: "Yes, we prioritize your privacy, and all interactions and information shared with us are held in strict confidence.",
    },
    {
      ques: "What age group does your foundation primarily serve?",
      ans: "We primarily focus on helping young people, typically between the ages of 12 and 25, but we welcome anyone seeking support for their mental growth and well-being.",
    },
    {
      ques: "What types of resources and programs do you offer for young minds?",
      ans: "We provide a range of resources, including articles, webinars, and self-help materials, along with one-on-one guidance from our experts.",
    },
    {
      ques: "How can I get involved or support Abhil Young Mind Growth Foundation's mission?",
      ans: "You can get involved by volunteering, donating, or spreading awareness about our foundation's mission. Visit our ' Contact Us' section on the website for more information on how to support us",
    },
  ];
  return (
    <>
      <div className=" text-center mb-6 transition-all duration-300">
        <motion.h1
          {...AnimationData.slideRight}
          className="text-2xl md:text-4xl  text-secondary_color font-bold "
        >
          Frequently Asked Questions
        </motion.h1>
      </div>

      <div className=" space-y-8 transition-all duration-300">
        {DonationFAQ.map((item, index) => (
          <div key={index} className=" shadow-md px-6 py-4 rounded-lg">
            <h1
              className="text-2xl font-semibold py-2"
              style={{
                letterSpacing: "1px",
              }}
            >
              {item.ques}
            </h1>
            <p
              className=" text-text_color1"
              style={{
                letterSpacing: "1px",
                wordSpacing: "1px",
              }}
            >
              {item.ans}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default DonationFaq;
