import React from "react";
import PageHeader from "../Layout/PageHeader";

const Faq = () => {
  const FAQ = [
    {
      ques: "What is Help India Online foundation?",
      ans: "Help India Online foundation is a hybrid organisation. It is a mission driven, affiliate foundation, or Non-profit organization that helps people online in fundraising, donate to charities and solve social issues.",
    },
    {
      ques: "How can I register with HIO?",
      ans: "Non Profit Organization doesn't gain any benefits for its owner. Instead, the organization donates the money it receives to help fund the organization’s objectives and goals. A not-for-profit might also use received donations to stay up and running.",
    },
    {
      ques: "What are the causes supported on Help India Online?",
      ans: "Help India Online created a special website “Helping Hands” for fundraising. A campaign will have the information, photos and documents that you have provided during the campaign. A campaign is related to many different payment options, and donors can access this page to make donations. Every donation is made through reflected in the progress bar. You can set up the fundraising campaign for yourself, for health, for memorial, and for daughter marriage. You may attach supporting documents( Photos, ID, medical documents) related to your cause on the campaign page to build trust.",
    },
    {
      ques: "How can I register with HIO?",
      ans: "Non Profit Organization doesn't gain any benefits for its owner. Instead, the organization donates the money it receives to help fund the organization’s objectives and goals. A not-for-profit might also use received donations to stay up and running.",
    },
    {
      ques: "How can I register with HIO?",
      ans: "Non Profit Organization doesn't gain any benefits for its owner. Instead, the organization donates the money it receives to help fund the organization’s objectives and goals. A not-for-profit might also use received donations to stay up and running.",
    },
    {
      ques: "What are the causes supported on Help India Online?",
      ans: "Help India Online created a special website “Helping Hands” for fundraising. A campaign will have the information, photos and documents that you have provided during the campaign. A campaign is related to many different payment options, and donors can access this page to make donations. Every donation is made through reflected in the progress bar. You can set up the fundraising campaign for yourself, for health, for memorial, and for daughter marriage. You may attach supporting documents( Photos, ID, medical documents) related to your cause on the campaign page to build trust.",
    },
    {
      ques: "How can I register with HIO?",
      ans: "Non Profit Organization doesn't gain any benefits for its owner. Instead, the organization donates the money it receives to help fund the organization’s objectives and goals. A not-for-profit might also use received donations to stay up and running.",
    },
    {
      ques: "How NPO benefits individuals?",
      ans: "A nonprofit corporation can be formed for any lawful purpose in most, if not all, states. A nonprofit corporation for the benefit of a single person would therefore be permissible, but would not qualify for federal charitable tax exemption. Donations to it would be legal, but not deductible for federal income tax purposes. If it did not qualify for any other exemption, it would be subject to payment of federal income tax and filing of income tax returns without regard to how it used the funds.",
    },
    {
      ques: "What are the causes supported on Help India Online?",
      ans: "Help India Online created a special website “Helping Hands” for fundraising. A campaign will have the information, photos and documents that you have provided during the campaign. A campaign is related to many different payment options, and donors can access this page to make donations. Every donation is made through reflected in the progress bar. You can set up the fundraising campaign for yourself, for health, for memorial, and for daughter marriage. You may attach supporting documents( Photos, ID, medical documents) related to your cause on the campaign page to build trust.",
    },
    {
      ques: "How NPO benefits individuals?",
      ans: "A nonprofit corporation can be formed for any lawful purpose in most, if not all, states. A nonprofit corporation for the benefit of a single person would therefore be permissible, but would not qualify for federal charitable tax exemption. Donations to it would be legal, but not deductible for federal income tax purposes. If it did not qualify for any other exemption, it would be subject to payment of federal income tax and filing of income tax returns without regard to how it used the funds.",
    },
    {
      ques: "How NPO benefits individuals?",
      ans: "A nonprofit corporation can be formed for any lawful purpose in most, if not all, states. A nonprofit corporation for the benefit of a single person would therefore be permissible, but would not qualify for federal charitable tax exemption. Donations to it would be legal, but not deductible for federal income tax purposes. If it did not qualify for any other exemption, it would be subject to payment of federal income tax and filing of income tax returns without regard to how it used the funds.",
    },
    {
      ques: "How NPO benefits individuals?",
      ans: "A nonprofit corporation can be formed for any lawful purpose in most, if not all, states. A nonprofit corporation for the benefit of a single person would therefore be permissible, but would not qualify for federal charitable tax exemption. Donations to it would be legal, but not deductible for federal income tax purposes. If it did not qualify for any other exemption, it would be subject to payment of federal income tax and filing of income tax returns without regard to how it used the funds.",
    },

    {
      ques: "What is a fundraising campaign, how do I set a fundraiser campaign?",
      ans: "The crowdfunding for charities included medical expenses of family, memorial, daughter marriage.",
    },

    {
      ques: "What are the causes supported on Help India Online?",
      ans: "Help India Online created a special website “Helping Hands” for fundraising. A campaign will have the information, photos and documents that you have provided during the campaign. A campaign is related to many different payment options, and donors can access this page to make donations. Every donation is made through reflected in the progress bar. You can set up the fundraising campaign for yourself, for health, for memorial, and for daughter marriage. You may attach supporting documents( Photos, ID, medical documents) related to your cause on the campaign page to build trust.",
    },

    {
      ques: "What are the causes supported on Help India Online?",
      ans: "Help India Online created a special website “Helping Hands” for fundraising. A campaign will have the information, photos and documents that you have provided during the campaign. A campaign is related to many different payment options, and donors can access this page to make donations. Every donation is made through reflected in the progress bar. You can set up the fundraising campaign for yourself, for health, for memorial, and for daughter marriage. You may attach supporting documents( Photos, ID, medical documents) related to your cause on the campaign page to build trust.",
    },
    {
      ques: "How does the Digital Help Wing work?",
      ans: "Help Wing extends helping hands to members in crisis through community fundraising for marriage of sister or daughter in blood relation, major crisis like death, permanent disablement and for thirty-four critical illnesses. While empathizing the happiness of giving to contributors, the power of multiplication transforms small donation from Rs. 3/- to Rs. 10/- into a big financial help to needy as per Rules & Regulations in force and benefitted 443 members by digital help worth Rs. 2.56 crores to in just one and half year.",
    },
  ];

  return (
    <div className="w-full min-h-[100vh]   ">
      {/* PageHeader  */}
      <PageHeader title1={"FAQ"} title2={""} />

      <div className="px-4 lg:mx-auto lg:w-[55rem] py-[5rem] ">
        {/* Heading  */}
        <div className=" text-center mb-6 transition-all duration-300">
          <h1 className="text-2xl md:text-4xl  text-secondary_color font-bold animate-slideright">
            Frequently Asked Questions
          </h1>
          <p className="md:mx-[3rem] text-lg font-medium text-text_color1 py-6">
            HIO Foundation FAQ answers questions about who we are, where we
            work, how we save lives, when we respond to disasters and what you
            can do to help.
          </p>
        </div>

        {/* FAQ  */}
        <div className=" space-y-8 transition-all duration-300">
          {FAQ.map((item, index) => (
            <>
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
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
