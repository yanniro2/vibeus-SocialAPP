import React from 'react'
import user from "../assests/img/users.jpg"
import { AiFillCheckCircle } from "react-icons/ai"
import { MdAddCircle, MdCancel } from "react-icons/md"
function RightBar()
{
    return (
        <div className='Right fixed right-0 w-[25vw] h-screen top-[8vh] bottom-0 font-popins  flex flex-col font-md capitalize text-dark-blue bg-[#eee] gap-5 z-50'>

            <div className='Suggestion drop-shadow bg-white shadow-md rounded flex flex-col'>
                <small className='p-2 text-[#4e4e4e] font-open font-lg'>Suggestion for you</small>
                <div className="user p-3 flex flex-col gap-2">
                    <div className="details flex items-center gap-3">
                        <img src={user} alt="img user" className='w-[2rem] h-[2rem] rounded-full' />
                        <h4 className='underline font-lg cursor-pointer capitalize'>Jane Doe</h4>
                    </div>
                    <div className='flex gap-3 capitalize'>
                        <button className='flex items-center gap-2 bg-blue text-white px-2 py-1 rounded drop-shadow shadow-md'>follow <MdAddCircle /></button>
                        <button className='flex items-center gap-2 bg-yellow text-black px-2 py-1 rounded drop-shadow shadow-md'>Dismiss <MdCancel /></button>
                    </div>
                </div>
                <div className="user p-3 flex flex-col gap-2">
                    <div className="details flex items-center gap-3">
                        <img src={user} alt="img user" className='w-[2rem] h-[2rem] rounded-full' />
                        <h4 className='underline font-lg cursor-pointer capitalize'>Jane Doe</h4>
                    </div>
                    <div className='flex gap-3 capitalize'>
                        <button className='flex items-center gap-2 bg-blue text-white px-2 py-1 rounded drop-shadow shadow-md'>follow <MdAddCircle /></button>
                        <button className='flex items-center gap-2 bg-yellow text-black px-2 py-1 rounded drop-shadow shadow-md'>Dismiss <MdCancel /></button>
                    </div>
                </div>
            </div>

            <div className="last_Activities  bg-white drop-shadow-md shadow-md rounded  flex flex-col gap-2">
                <small className='p-2 text-[#4e4e4e] font-open font-lg'>Latest Activities</small>
                <div className="user flex items-center justify-between p-3 text-[14px]">
                    <div className="details flex items-center gap-3">
                        <img src={user} alt="img user" className='w-[2rem] h-[2rem] rounded-full' />
                        <h4 className='underline font-lg cursor-pointer capitalize'>Jane Doe</h4>
                        <small className='text-[#4e4e4e]'>Change Profile Pic</small>
                    </div>
                    <div>
                        <small className='text-[#7e7e7e] '>
                            1 min ago
                        </small>
                    </div>
                </div>
                <div className="user flex items-center justify-between p-3 text-[14px]">
                    <div className="details flex items-center gap-3">
                        <img src={user} alt="img user" className='w-[2rem] h-[2rem] rounded-full' />
                        <h4 className='underline font-lg cursor-pointer capitalize'>Jane Doe</h4>
                        <small className='text-[#4e4e4e]'>Comments on your ...</small>
                    </div>
                    <div>
                        <small className='text-[#7e7e7e] '>
                            1 min ago
                        </small>
                    </div>
                </div>
            </div>

            <div className='Suggestion drop-shadow bg-white shadow-md rounded flex flex-col'>
                <small className='p-3 text-[#4e4e4e] font-open font-lg'>Online</small>
                <div className="user flex justify-between p-3">
                    <div className="details flex items-center gap-3">
                        <img src={user} alt="img user" className='w-[2rem] h-[2rem] rounded-full' />
                        <h4 className=' font-lg cursor-pointer capitalize'>Jane Doe</h4>

                    </div>
                    <AiFillCheckCircle className='text-[green]' />
                </div>
                <div className="user flex justify-between p-3">
                    <div className="details flex items-center gap-3">
                        <img src={user} alt="img user" className='w-[2rem] h-[2rem] rounded-full' />
                        <h4 className=' font-lg cursor-pointer capitalize'>Jane Doe</h4>

                    </div>
                    <AiFillCheckCircle className='text-[green]' />
                </div>
            </div>
        </div>
    )
}

export default RightBar
