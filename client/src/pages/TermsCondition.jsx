import React from 'react'
import LayoutPolicy from '../components/common/LayoutPolicy'
import Header from '../components/common/Header'
import Subheading from '../components/common/Subheading'

const termsList = [
    "The content of the pages of this website is subject to change without notice.",
    "Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose.You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.",
    "Your use of any information or materials on our website and / or product pages is entirely at your own risk, for which we shall not be liable.It shall be your own responsibility to ensure that any products, services or information available through our website and / or product pages meet your specific requirements.",
    "Our website contains material which is owned by or licensed to us.This material includes, but are not limited to, the design, layout, look, appearance and graphics.Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.",
    "All trademarks reproduced in our website which are not the property of, or licensed to, the operator are acknowledged on the website.",
    "Unauthorized use of information provided by us shall give rise to a claim for damages and / or be a criminal offense.",
    "From time to time our website may also include links to other websites.These links are provided for your convenience to provide further information.",
    "You may not create a link to our website from another website or document without ABHIL YOUNG MIND GROWTH FOUNDATION’s prior written consent.",
    "Any dispute arising out of use of our website and / or purchase with us and / or any engagement with us is subject to the laws of India.",
    "We, shall be under no liability whatsoever in respect of any loss or damage arising directly or indirectly out of the decline of authorization for any Transaction, on Account of the Cardholder having exceeded the preset limit mutually agreed by us with our acquiring bank from time to time"
]


const TermsCondition = () => {
    return (
        <>
            <LayoutPolicy text={"Terms & Conditions"}>
                <div className='w-full max-w-screen-xl px-4 sm:px-8 md:px-12 mx-auto py-6 sm:py-12  '>
                    <h2 className='text-xl sm:text-2xl font-[700] text-[#18191F] mb-2 sm:my-4'>Welcome to Abhil Young Mind </h2>
                    <p className='max-sm:text-sm mb-4'>For the purpose of these Terms and Conditions, The term "we", "us", "our" used anywhere on this page shall mean ABHIL YOUNG MIND GROWTH FOUNDATION, whose registered/operational office is ABHIL YOUNG MIND GROWTH FOUNDATION Najafgarh New Delhi 43 Plot no 184 KH No 8/2/2AND 18/1/1 SAINIK ENCLAVE PART lll NAJAFGARH NEW DELHI 43 South West Delhi DELHI 110043 . "you", “your”, "user", “visitor” shall mean any natural or legal person who is visiting our website and/or agreed to purchase from us.</p>
                    <h4 className={"text-lg font-semibold my-3"}>Your use of the website and/or purchase from us are governed by following Terms and Conditions:</h4>
                    <ul className="ps-4 sm:ps-8 list-disc space-y-3 max-sm:text-sm" >
                        {
                            termsList.map(item => (
                                <li key={item} >{item}</li>
                            ))
                        }
                    </ul>
                </div>
            </LayoutPolicy>
        </>
    )
}

export default TermsCondition















