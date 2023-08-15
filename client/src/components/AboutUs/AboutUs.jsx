import React from "react";
import PageHeader from "../Layout/PageHeader";

const AboutUs = ({ setActiveUrl }) => {
  return (
    <div className="w-full min-h-[100vh]  ">
      <PageHeader title1={"About"} title2={"Us"} setActiveUrl={setActiveUrl} />
      About
    </div>
  );
};

export default AboutUs;
