import React from 'react'
import { FaMendeley, FaRegUser, FaBell, FaMoon } from "react-icons/fa"
import { BsSearch, BsHouseFill, BsMessenger } from "react-icons/bs"
import { SiBytedance } from "react-icons/si"
import profile from "../assests/img/profile.jpg"
function Navbar()
{
    return (
        <div className='w-full px-5 h-[8%] fixed top-0 left-0 right-0 bg-white drop-shadaw shadow-md flex items-center text-ms font-ms justify-between font-popins z-[100]'>
            <div className="left flex items-center text-blue text-[16px] gap-5">

                <h3 className='text-blue font-popins font-xl tracking-tighter flex items-center cursor-pointer mr-10'>VibeUS <SiBytedance className='text-yellow hover:text-blue transition-all' /></h3>

                <BsHouseFill className='text-[30px] p-1 border-[1px]  rounded-full flex items-center justify-center cursor-pointer drop-shadow-md  shadow-inner hover:text-yellow transition-all hover:shadow-md' />

                <FaMoon className='text-[30px] p-1 border-[1px]  rounded-full flex items-center justify-center cursor-pointer drop-shadow-md  shadow-inner hover:text-yellow transition-all hover:shadow-md' />

                <FaMendeley className='text-[30px] p-1 border-[1px]  rounded-full flex items-center justify-center cursor-pointer drop-shadow-md  shadow-inner hover:text-yellow transition-all hover:shadow-md' />



            </div>

            <div className="middle flex items-center relative">
                <input type="search" name="" id="" className='border-b-2 border-blue p-1 pl-3   transition-all  outline-none peer focus:border-yellow default:w-1/2' placeholder='Search...' />
                <BsSearch className='text-[30px] p-2 rounded-full absolute right-2 flex items-center justify-center cursor-pointer bg-white transition-all shadow-inner -top-[1px] hover:bg-blue hover:text-white text-blue' />
            </div>

            <div className="right flex items-center text-yellow text-[16px] gap-5">
                <FaRegUser className='text-[20px]  border-white  flex items-center justify-center cursor-pointer drop-shadow-md  hover:text-blue transition-all ' />
                <BsMessenger className='text-[20px]  border-white  flex items-center justify-center cursor-pointer drop-shadow-md  hover:text-blue transition-all ' />
                <FaBell className='text-[20px]  border-white  flex items-center justify-center cursor-pointer drop-shadow-md  hover:text-blue transition-all ' />

                <div className='flex items-center gap-3'>
                    <img src={profile} alt="profile logo" className='w-[2.5rem] h-[2.5rem] rounded-full object-cover border-2 border-yellow drop-shadow' />

                    <span className='text-blue font-open font-lg drop-shadow '>Niroyan.K</span>
                </div>

            </div>
        </div>

    )
}

export default Navbar
