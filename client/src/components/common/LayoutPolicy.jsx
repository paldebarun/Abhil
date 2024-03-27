import React from 'react'

const LayoutPolicy = ({ text, children }) => {
    return (
        <>
            <div className='w-full bg-white text-[#18191F] '>
                <div className='w-full h-40 sm:h-56 md:h-80 bg-[#FAFAFA] flex justify-center items-center  '>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#212121] max-md:mb-10 text-center'>{text}</h1>
                </div>
                {children}
            </div>
        </>
    )
}

export default LayoutPolicy
