import Impact1 from "../../assets/Donations/map_impact_img_1.png";
import Impact2 from "../../assets/Donations/map_impact_img_2.png";
import Impact3 from "../../assets/Donations/map_impact_img_3.png";
import Impact4 from "../../assets/Donations/map_impact_img_4.png";
import Impact5 from "../../assets/Donations/map_impact_img_5.png";
import { AnimationData } from "../../utils/animationData";
import { motion } from "framer-motion";

const DonationImpact = () => {
  const ImpactData = [
    {
      src: Impact1,
      Heading: "1.5M+",
      SubHeading: "children and their families reached every year",
    },
    {
      src: Impact2,
      Heading: "400+",
      SubHeading:
        "welfare projects in 2000+ villages & slums covering 26 states",
    },
    {
      src: Impact3,
      Heading: "1,00,000+",
      SubHeading: "children receive quality education",
    },
    {
      src: Impact4,
      Heading: "10,00,000+",
      SubHeading:
        "people from villages & slums get doorstep healthcare services",
    },
    {
      src: Impact5,
      Heading: "75,000+",
      SubHeading:
        "youth are provided skill training and employment opportunities",
    },
  ];
  return (
    <>
      <div class="flex justify-center items-center p-4 flex-col lg:flex-row flex-wrap sm:flex-no-wrap md:flex-wrap">
        {ImpactData.map((item, index) => (
          <div class="block max-w-xs p-1 mb-5 sm:flex" key={index}>
            <img className="w-40 h-40" src={item.src} alt="icon" />
            <div className="block mt-4">
              <h2 class="text-2xl ml-1 font-bold mb-2">{item.Heading}</h2>
              <p class="text-xl ml-1 mb-2">{item.SubHeading}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default DonationImpact;
