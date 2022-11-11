import React from 'react'
import { FcButtingIn, FcPortraitMode, FcStatistics, FcAlarmClock, FcConferenceCall, FcRating, FcPlanner, FcPuzzle, FcPicture, FcComments, FcMoneyTransfer, FcTodoList, FcLibrary, FcStart } from "react-icons/fc"

function LeftBar()
{
    return (
        <div className='w-[15vw] fixed top-[8vh] bottom-0 h-screen LeftBar  left-0   bg-white drop-shadow-md font-open  flex flex-col font-md capitalize text-dark-blue shadow-md z-50'>
            <div className='flex border-b-[1px] border-[#eee] p-3 h-1/3 w-full'>
                <ul className='flex flex-col gap-2'>
                    <li className='flex items-center gap-2 cursor-pointer hover:text-blue  hover:text-[18px] transition-all'>  <FcButtingIn className='text-yellow' /> Niroyan.k</li>
                    <li className='flex items-center gap-2 cursor-pointer hover:text-blue  hover:text-[18px] transition-all'><FcPortraitMode /> friends</li>
                    <li className='flex items-center gap-2 cursor-pointer hover:text-blue  hover:text-[18px] transition-all'><FcConferenceCall /> groups</li>
                    <li className='flex items-center gap-2 cursor-pointer hover:text-blue  hover:text-[18px] transition-all'> <FcStatistics /> marketplace</li>
                    <li className='flex items-center gap-2 cursor-pointer hover:text-blue  hover:text-[18px] transition-all'><FcAlarmClock /> watch</li>
                    <li className='flex items-center gap-2 cursor-pointer hover:text-blue  hover:text-[18px] transition-all'><FcRating /> memories</li>
                </ul>

            </div>

            <div className='flex border-b-[1px] border-[#eee] flex-col h-1/3 w-full p-3'>
                <small className='text-light-blue font-open font-lg py-1'>
                    your shortcuts
                </small>
                <ul className='flex flex-col gap-2'>
                    <li className='flex items-center gap-2 cursor-pointer hover:text-blue  hover:text-[18px] transition-all'><FcPlanner /> Events</li>
                    <li className='flex items-center gap-2 cursor-pointer hover:text-blue  hover:text-[18px] transition-all'><FcPuzzle /> Games</li>
                    <li className='flex items-center gap-2 cursor-pointer hover:text-blue  hover:text-[18px] transition-all'><FcPicture /> Gallary</li>
                    <li className='flex items-center gap-2 cursor-pointer hover:text-blue  hover:text-[18px] transition-all'><FcStart />videos</li>
                    <li className='flex items-center gap-2 cursor-pointer hover:text-blue  hover:text-[18px] transition-all'><FcComments /> Message</li>
                </ul>

            </div>
            <div className='flex border-b-[1px] border-[#eee] p-3 flex-col h-1/3 w-full'>
                <small className='text-light-blue font-open font-lg py-1'>Others</small>
                <ul className='flex flex-col gap-2'>
                    <li className='flex items-center gap-2 cursor-pointer hover:text-blue  hover:text-[18px] transition-all'><FcMoneyTransfer /> Fundraiser</li>
                    <li className='flex items-center gap-2 cursor-pointer hover:text-blue  hover:text-[18px] transition-all'><FcTodoList /> Tutorials</li>
                    <li className='flex items-center gap-2 cursor-pointer hover:text-blue  hover:text-[18px] transition-all'><FcLibrary /> Courses</li>
                </ul>
            </div>
        </div>
    )
}

export default LeftBar
