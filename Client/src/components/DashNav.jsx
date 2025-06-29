import React from 'react'
import user from '../assets/user.png'
import 'remixicon/fonts/remixicon.css'

function DashNav() {
    return (
        <div className='w-full h-20 bg-transparent  rounded-lg flex '>
            <div className='flex justify-between items-center gap-15 w-full px-15'>
                <div className='text-logo font-semibold text-3xl text-[#7F8C8D]'>FootPrism</div>
                <div className='flex gap-5 '>

                    <div className='w-12 h-12 bg-[#7F8C8D] cursor-pointer flex justify-center items-center rounded-full'>
                        <i className="ri-search-line font-semibold"></i>
                    </div>
                    <div className='w-12 h-12 bg-[#7F8C8D] cursor-pointer flex justify-center items-center rounded-full'>
                        <i className="ri-notification-line font-semibold"></i>
                    </div>
                    <div className='w-12 h-12   bg-[#7F8C8D] cursor-pointer flex justify-center items-center rounded-full'>
                        <i className="ri-user-line font-semibold "></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashNav;