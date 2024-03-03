import Impact1 from "../../assets/Donations/map_impact_img_1.png";
import Impact2 from "../../assets/Donations/map_impact_img_2.png";
import Impact3 from "../../assets/Donations/map_impact_img_3.png";
import Impact4 from "../../assets/Donations/map_impact_img_4.png";
import Impact5 from "../../assets/Donations/map_impact_img_5.png";

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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-8 my-3 md:my-6">
        {ImpactData.map((item, index) => (
          <div className="w-md sm:h-40 flex space-x-3 items-center max-sm:flex-col" key={index}>
            <img className="w-36 h-36" src={item.src} alt="icon" />
            <div className=" max-sm:mt-4">
              <h2 className="text-xl sm:text-2xl font-bold mb-1 max-sm:text-center">{item.Heading}</h2>
              <p className="sm:text-lg mb-2 sm:font-medium sm:leading-5 opacity-75 max-sm:text-center">{item.SubHeading}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default DonationImpact;
