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

const RefundPolicy = () => {
  return (
    <>
      <LayoutPolicy text={"Refund Policy"}>
        <div className='w-full max-w-screen-xl px-4 sm:px-8 md:px-12 mx-auto py-6 sm:py-12 '>
          <p className='max-sm:text-sm mb-4'>
            At Abhil Young Mind, we are grateful for the generosity of donors like you who support our cause. Your donation is vital to helping us achieve our mission and make a difference in the area(s) we focus on. We understand that financial situations can change, and errors can occur, so we have outlined our refund policy below.
          </p>
          <Header ind={1} text={"General Policy"} />
          <p className="max-sm:text-sm mb-3">
            Donations made to Abhil Young Mind are generally non-refundable. When you make a donation, we put those funds to work immediately to support our programs and initiatives. However, we acknowledge that there may be exceptional circumstances that warrant a refund
          </p>
          <Header ind={2} text={" Eligibility for Refund"} />
          <p className="max-sm:text-sm mb-3">
            Refunds for donations may be considered in the following situations:
          </p>
          <ul className="max-sm:text-sm ps-4 md:ps-8 list-disc space-y-2 mb-5 sm:mb-8" >
            <li>
              <span className={"font-medium text-gray-700 me-2"}>
                Unauthorized Use:
              </span>
              If your credit card was used without your permission, we will refund the donation amount upon notification and confirmation of the unauthorized charge by your credit card company.
            </li>
            <li>
              <span className={"font-medium text-gray-700 me-2"}>
                Clerical Errors:
              </span>
              If you intended to donate a different amount than what was processed (e.g., you accidentally donate $500 instead of $50), please contact us within 30 days of the transaction. We will review your request and may issue a refund for the difference.
            </li>
            <li>
              <span className={"font-medium text-gray-700 me-2"}>
                Other Circumstances:
              </span>
              Refunds for other circumstances will be considered on a case-by-case basis. We aim to ensure fairness and satisfaction among our donors while maintaining the integrity of our fundraising efforts.
            </li>
          </ul>
          <Header ind={3} text={"Process for Requesting a Refund"} />
          <p className="max-sm:text-sm mb-3">
            To request a refund, please follow the steps below:
          </p>
          <ul className="max-sm:text-sm ps-4 md:ps-8 list-disc space-y-2 mb-5 sm:mb-8" >
            <li>
              <span className={"font-medium text-gray-700 me-2"}>
                Notification:
              </span>
              Contact us at [contact information] as soon as you recognize a need for a refund. Please provide your name, the donation amount, the date of the donation, and the reason for the refund request.
            </li>
            <li>
              <span className={"font-medium text-gray-700 me-2"}>
                Review:
              </span>
              We will review your refund request and may require additional information or documentation. Please cooperate with our team to facilitate this process.
            </li>
            <li>
              <span className={"font-medium text-gray-700 me-2"}>
                Decision:
              </span>
              We aim to process refund requests promptly. However, please allow up to 30days for your request to be processed. We will notify you of our decision by email or phone.
            </li>
          </ul>
          <Header ind={4} text={"Contact Us"} />
          <p className="max-sm:text-sm mb-3">
            If you have questions or concerns about our refund policy or your donation, please don't hesitate to contact us at [contact information]. Your support is important to us, and we strive to ensure that your donation experience is positive and transparent.
          </p>
        </div>
      </LayoutPolicy>
    </>
  )
}

export default RefundPolicy
