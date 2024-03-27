
import React from 'react'

const Header = ({ text, ind }) => {
    return (
        <h3 className='sm:text-lg font-semibold my-2'>
            <span className='me-2 '>{ind}.</span>
            {text}
        </h3>
    )
}

export default Header;