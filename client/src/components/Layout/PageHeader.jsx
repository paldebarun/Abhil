import React from "react";
import { Link } from "react-router-dom";
import pageHeaderBack from "../../assets/PageHeader/background.jpg";
import { useMyContext } from "../../context/ActiveLinkContext";

const PageHeader = ({ title1, title2 }) => {
  const { setActiveUrl } = useMyContext();

  return (
    <div
      className="w-full h-[20rem] flex items-center justify-center relative pageheader bg-center bg-no-repeat bg-cover "
      style={{
        backgroundImage: `url(${pageHeaderBack})`,
      }}
    >
      {/* Overlay  */}
      <div className="w-full h-full absolute top-0  left-0  bg-primary_color opacity-60"></div>

      {/* Page Name And Path  */}
      <div className="z-10 flex flex-col gap-6">
        <div className=" text-5xl md:text-6xl font-semibold">
          <span className=" text-secondary_color">{title1}</span>{" "}
          <span className=" text-white">{title2}</span>
        </div>
        <p className="text-lg text-white text-center">
          <Link
            onClick={() => setActiveUrl("/")}
            to={"/"}
            className=" hover:text-secondary_color"
          >
            Home
          </Link>
          /{" "}
          <span className=" text-secondary_color">{`${title1} ${title2}`}</span>
        </p>
      </div>
    </div>
  );
};

export default PageHeader;
