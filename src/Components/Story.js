import React from 'react'
import { MdOutlineAddCircle } from "react-icons/md"
import story_1 from "../assests/img/story 1.jpg"
import story_2 from "../assests/img/story 2.jpg"
import story_3 from "../assests/img/story 3.jpg"
import story_4 from "../assests/img/story 4.jpg"
import story_5 from "../assests/img/story 5.jpg"
function Story()
{
    return (
        <div className='w-[100%] h-1/4 flex gap-2 justify-between'>


            <div className='user h-[10rem] w-[8rem] relative'>
                <img src={story_1} alt="story_1" className='w-full h-full object-cover rounded shadow-lg drop-shadow-lg cursor-pointer' />
                <MdOutlineAddCircle className='absolute text-blue bottom-8 left-5 text-[25px] cursor-pointer' />
                <h3 className='bottom-3 absolute left-5 text-white  font-open'>me</h3>
            </div>
            <div className='user h-[10rem] w-[8rem] relative'>
                <img src={story_2} alt="story_1" className='w-full h-full object-cover rounded shadow-lg drop-shadow-lg cursor-pointer' />
                {/* <MdOutlineAddCircle className='absolute text-blue bottom-8 left-5 text-[25px] cursor-pointer' /> */}
                <h3 className='bottom-3 absolute left-5 text-white  font-popins'>Lara</h3>
            </div>
            <div className='user h-[10rem] w-[8rem] relative'>
                <img src={story_3} alt="story_1" className='w-full h-full object-cover rounded shadow-lg drop-shadow-lg cursor-pointer' />
                {/* <MdOutlineAddCircle className='absolute text-blue bottom-8 left-5 text-[25px] cursor-pointer' /> */}
                <h3 className='bottom-3 absolute left-5 text-white  font-popins'>Lara</h3>
            </div>
            <div className='user h-[10rem] w-[8rem] relative'>
                <img src={story_4} alt="story_1" className='w-full h-full object-cover rounded shadow-lg drop-shadow-lg cursor-pointer' />
                {/* <MdOutlineAddCircle className='absolute text-blue bottom-8 left-5 text-[25px] cursor-pointer' /> */}
                <h3 className='bottom-3 absolute left-5 text-white  font-popins'>Lara</h3>
            </div>
            <div className='user h-[10rem] w-[8rem] relative'>
                <img src={story_5} alt="story_1" className='w-full h-full object-cover rounded shadow-lg drop-shadow-lg cursor-pointer' />
                {/* <MdOutlineAddCircle className='absolute text-blue bottom-8 left-5 text-[25px] cursor-pointer' /> */}
                <h3 className='bottom-3 absolute left-5 text-white  font-popins'>Lara</h3>
            </div>
        </div>
    )
}

export default Story
