import React from 'react'
import LayoutPolicy from '../components/common/LayoutPolicy'
import Header from '../components/common/Header'


const cancellation = [
  {
    subTitle: "Review the Receipt or Confirmation Email: ",
    para: "Often, when you make a donation, the organization will send you a confirmation email or provide a receipt that outlines the details of your donation, including any relevant policies on refunds or cancellations."
  },
  {
    subTitle: "Check the Organization's Website:",
    para: "Most organizations have a section on their website dedicated to donation-related queries, including cancellation policies."
  },
  {
    subTitle: "Contact Customer Support:",
    para: "If the information is not readily available online or you need clarification, it's a good idea to contact the organization directly. Look for a contact email, phone number, or even a contact form on their website. Be ready to provide details of your donation to facilitate the process."
  },
  {
    subTitle: "Understand the Terms for Recurring Donations: ",
    para: "If your donation is recurring, there's typically a process to modify or cancel future payments. This could often be managed directly through a user account on the organization's website or by contacting their support team."
  },
]

const PrivacyPolicy = () => {
  return (
    <>
      <LayoutPolicy text={"Privacy Policy"}>
        <div className='w-full max-w-screen-xl px-4 sm:px-8 md:px-12 mx-auto py-6 sm:py-12   '>
          <p className='max-sm:text-sm  mb-4'>
            Welcome to Abhil Young Mind.We are Protecting your privacy is of paramount importance to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our mobile application, or engage with our services (collectively, the "Services"). Please read this policy carefully to understand our practices regarding your information.
          </p>
          <Header ind={1} text={"Information We Collect"} />
          <p className='max-sm:text-sm mb-3'>
            We may collect personal information that you voluntarily provide to us when registering for the Services, expressing an interest in obtaining information about us or our products and services, participating in activities on the Services, or otherwise contacting us. The personal information we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. This information may include:</p>
          <ul className="max-sm:text-sm ps-4 md:ps-8 list-disc space-y-2 mb-5 sm:mb-8" >
            <li>
              <span className={"font-medium text-gray-700 me-2"}>
                Personal Identifiers:
              </span>
              Such as your name, email address, phone number, etc.
            </li>
            <li>
              <span className={"font-medium text-gray-700 me-2"}>
                Payment Information:
              </span>
              If you make purchases, we collect necessary data to process your payment.
            </li>
            <li>
              <span className={"font-medium text-gray-700 me-2"}>
                Social Media Login Data:
              </span>
              We may provide you with the option to register using social media account details.
            </li>
            <li>
              <span className={"font-medium text-gray-700 me-2"}>
                Other Information:
              </span>
              Any other information you choose to provide directly to us.
            </li>
          </ul>
          <Header ind={2} text={"How We Use Your Information"} />
          <p className='max-sm:text-sm mb-3'>We use personal information collected via our Services for a variety of business purposes, including to:</p>
          <ul className="max-sm:text-sm ps-4 md:ps-8 list-disc space-y-2 mb-5 sm:mb-8" >
            <li className={"font-medium text-gray-700 me-2"}>
              Provide, operate, and maintain our Services
            </li>
            <li className={"font-medium text-gray-700 me-2"}>
              Improve, personalize, and expand our Services
            </li>
            <li className={"font-medium text-gray-700 me-2"}>
              Understand and analyze how you use our Services
            </li>
            <li className={"font-medium text-gray-700 me-2"}>
              Develop new products, services, features, and functionality
            </li>
            <li className={"font-medium text-gray-700 me-2"}>
              Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes
            </li>
            <li className={"font-medium text-gray-700 me-2"}>
              Process your transactions
            </li>
            <li className={"font-medium text-gray-700 me-2"}>
              Send you emails
            </li>
            <li className={"font-medium text-gray-700 me-2"}>
              Find and prevent fraud
            </li>
          </ul>
          <Header ind={3} text={"Sharing Your Information"} />
          <p className="max-sm:text-sm mb-3">
            We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
          </p>
          <ul className="max-sm:text-sm ps-4 md:ps-8 list-disc space-y-2 mb-5 sm:mb-8" >
            <li>
              <span className={"font-medium text-gray-700 me-2"}>
                Third-Party Service Providers:
              </span>
              We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
            </li>
            <li>
              <span className={"font-medium text-gray-700 me-2"}>
                Business Transfers:
              </span>
              We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
            </li>
          </ul>
          <Header ind={4} text={"Your Privacy Rights"} />
          <p className="max-sm:text-sm mb-4">Depending on your location, you may have rights under certain privacy laws. These may include the right to access, correct, or delete the personal information we have about you. To exercise these rights, please contact us at 1234567890.</p>
          <Header ind={5} text={" Cookies and Similar Technologies"} />
          <p className="max-sm:text-sm mb-4">We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information.</p>
          <Header ind={6} text={"Security of Your Information"} />
          <p className="max-sm:text-sm mb-4">  We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that no security measures are perfect or impenetrable.</p>
          <Header ind={7} text={"Changes to This Privacy Policy"} />
          <p className="max-sm:text-sm mb-4">We may update this privacy policy from time to time. The updated version will be indicated by an updated "Revised" date, and the updated version will be effective as soon as it is accessible.</p>
          <Header ind={7} text={"Contact Us"} />
          <p className="max-sm:text-sm mb-4"> If you have questions or comments about this policy, you may contact us at [contact information].</p>
          <p>
            If "Abhil Young Mind" is a specific initiative or a lesser - known organization, and you're unable to find information online, directly contacting them via their provided contact details would be the best course of action to understand their cancellation policy for donations.
          </p>
        </div>
      </LayoutPolicy>
    </>
  )
}

export default PrivacyPolicy
