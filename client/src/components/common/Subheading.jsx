
import React from 'react'
import { FaCircleDot } from "react-icons/fa6";

const Subheading = ({ text, isBold = false }) => {
    return (
        <div className={`${isBold && "text-[#191A15] font-bold"} text-[16px] mb-4 flex  `}>
            <span className={` mt-[3px] me-3 font-medium w-5`}><FaCircleDot size={18} className='text-purple-900' /></span>
            {text}
        </div>
    )
}

export default Subheading;