import DonationImg1 from "../../assets/Donations/donation_help_1.png";
import DonationImg2 from "../../assets/Donations/donation_help_2.png";
import DonationImg3 from "../../assets/Donations/donation_help_3.png";
import DonationImg4 from "../../assets/Donations/donation_help_4.png";
import DonationImg5 from "../../assets/Donations/donation_help_5.png";
import DonationImg6 from "../../assets/Donations/donation_help_6.png";
import DonationImg7 from "../../assets/Donations/donation_help_7.png";
import DonationImg8 from "../../assets/Donations/donation_help_8.png";

const DonationHelp = () => {
  const DonationData = [
    {
      dtitle: "Quality Education",
      alt: "Quality Education",
      imgScr: DonationImg1,
    },
    {
      dtitle: "Vocational Education",
      alt: "Vocational Education",
      imgScr: DonationImg2,
    },
    {
      dtitle: "Livelihood",
      alt: "Livelihood",
      imgScr: DonationImg3,
    },
    {
      dtitle: "Financial Literacy",
      alt: "Financial Literacy",
      imgScr: DonationImg4,
    },
    {
      dtitle: "Nutrition Support",
      alt: "Nutrition Support",
      imgScr: DonationImg5,
    },
    {
      dtitle: "Life Skills Trainings",
      alt: "Life Skills Trainings",
      imgScr: DonationImg6,
    },
    {
      dtitle: "Health & Hygiene",
      alt: "Health & Hygiene",
      imgScr: DonationImg7,
    },
    {
      dtitle: "Holistic Wellbeing",
      alt: "Holistic Wellbeing",
      imgScr: DonationImg8,
    },
  ];
  return (
    <>
      {DonationData.map((item, index) => (
        <div className="w-full mb-5 rounded-md hover:overflow-hidden hover:shadow-lg hover:border transition-all delay-150 ease-in-out" key={index}>
          <img className="w-full mb-2 object-contain" src={item.imgScr} alt={item.alt} />
          <div>
            <h2 className="text-xl text-center font-semibold mb-2">{item.dtitle}</h2>
          </div>
        </div>
      ))}
    </>
  );
};

export default DonationHelp;
