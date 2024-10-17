import React from 'react'
import { FaHouse } from 'react-icons/fa6'
import { FaUserCircle } from "react-icons/fa";

import Link from 'next/link'

const navLinks = [
    {
        id: 1,
        name: 'Home',
        link: '/'
    },
    {
        id: 2,
        name: 'About',
        link: '/about'
    },
    {
        id: 3,
        name: 'Listing',
        link: '/listing'

    },
    {
        id: 3,
        name: 'Property',
        link: '/contact'

    },
    {
        id: 3,
        name: 'Contact',
        link: '/contact'

    }
]

const Nav = () => {
    return (
        <div className="fixed h-[10vh] z-[100] w-full transition-all duration-200 bg-amber-950">
            <div className='flex items-center justify-between h-full w-[95%] sm:w-[90%] xl:w-[80%] mx-auto'>
                {/* logo */}
                <div className='flex items-center space-x-2'>
                    <div className='md:w-10 md:h-10 w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center flex-col text-white'>
                        <FaHouse />
                    </div>
                    <h1 className='text-white font-bold text-sm md:text-xl'>MatrixHomes</h1>
                </div>
                {/* Navigation links */}
                <div className='lg:flex items-center space-x-14 text-white hidden font-bold'>
                    {navLinks.map((link) => {
                        return (

                            <Link key={link.id} href={link.link} ><p className='font-medium hover:text-black'>{link.name}</p></Link>

                        );
                    })}
                </div>
                {/*CTA /harmburger  */}
                <div className="flex items-center space-x-4 ">
                    {/* CTA */}
                    <div className="flex items-center cursor-pointer text-white space-x-2 hover:text-red-400 transition-all duration-200">
                        <FaUserCircle className="w-5 h-5"/>
                        <p className='font-bold text-xs sm:text-base'>Login/Register</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav
