import React from 'react'
import LayoutPolicy from '../components/common/LayoutPolicy'

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


const CancellationPolicy = () => {
  return (
    <>
      <LayoutPolicy text={"Cancellation Policy"}>
        <div className='w-full max-w-screen-xl px-4 sm:px-8 md:px-12 mx-auto py-6 sm:py-12 '>
          <p className='max-sm:text-sm mb-4'>
            Welcome to Abhil Young Mind.We are Protecting your privacy is of paramount importance to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our mobile application, or engage with our services (collectively, the "Services"). Please read this policy carefully to understand our practices regarding your information.
          </p>
          <h4 className={"sm:text-lg font-semibold mb-2 sm:my-3"}>Generally, here are a few steps you might consider if you're looking to understand or enact a cancellation policy for a donation:</h4>
          <ul className="max-sm:text-sm ps-4 md:ps-8 list-disc space-y-2 mb-5 sm:mb-8" >
            {
              cancellation.map(item => (
                <li key={item.subTitle} > <span className={"font-medium text-gray-700 me-2"}>{item.subTitle}</span>{item.para}</li>
              ))
            }
          </ul>
          <p className='max-sm:text-sm'>
            If "Abhil Young Mind" is a specific initiative or a lesser - known organization, and you're unable to find information online, directly contacting them via their provided contact details would be the best course of action to understand their cancellation policy for donations.
          </p>
        </div>
      </LayoutPolicy>
    </>
  )
}

export default CancellationPolicy
