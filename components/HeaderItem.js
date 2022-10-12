import React from 'react'

function HeaderItem({ Icon, title }) {
    return (
        <div className=' flex flex-col items-center group cursor-pointer  hover:text-white'>
            <Icon className='text-xl xs:text-2xl group-hover:animate-bounce' />
            <p className='opacity-0 text-sm xs:text-base group-hover:opacity-100 transition '>{title}</p>
        </div>
    )

}

export default HeaderItem