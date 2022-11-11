import React from 'react'
import cover from "../assests/img/cover.jpg"
import user from "../assests/img/users.jpg"
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs"
import { ImLocation } from "react-icons/im"
import { FiMessageCircle } from "react-icons/fi"
import { MdAddCircle } from "react-icons/md"
import Post from "./Post"
function Profile()
{
    return (
        <div className='fixed top-[8vh] p-5 flex flex-col z-[100] left-[15vw] right-[25vw] h-full bottom-0 overflow-scroll bg-[#eee] gap-2'>
            <header className='w-full'>
                <img src={cover} alt="cover img" className='w-full h-[15rem] object-cover rounded-xl' />
            </header>
            <div className="profile flex flex-col justify-center w-full bg-white rounded relative items-center gap-3">
                <img src={user} alt="img user" className='w-[10rem] h-[10rem] rounded-full object-cover shadow drop-shadow border-4 border-light-blue -mt-[5rem]' />
                <div className="details flex items-center gap-3">
                    <h3 className='font-popins text-blue font-lg'>Jane Doe</h3>
                    <button className='bg-blue text-white px-3 py-1 rounded flex items-center gap-2 font-md drop-shadow-md shadow-md'>follow <MdAddCircle /></button>
                    <FiMessageCircle className='text-[25px] text-yellow drop-shadow cursor-pointer' />

                </div>
                <div className="address flex items-center font-open gap-2 text-[#afafaf] uppercase font-lg">
                    <ImLocation className='text-[red]' />
                    <p>usa </p>
                </div>
                <div className='flex items-center gap-5 text-[22px] p-3 text-[#c9c9c9]'>

                    < BsFacebook className='cursor-pointer hover:text-blue transition-all ' />
                    <BsInstagram className='cursor-pointer hover:text-[red] transition-all' />
                    <BsTwitter className='cursor-pointer hover:text-blue transition-all' />
                    <BsLinkedin className='cursor-pointer hover:text-blue transition-all' />
                </div>


            </div>
            <Post />
        </div>
    )
}

export default Profile
