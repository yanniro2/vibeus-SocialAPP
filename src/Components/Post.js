import React, { useState } from 'react'
import profile from "../assests/img/profile.jpg"
import { TbDots } from "react-icons/tb"
import { BsHeartFill, BsChatRightDotsFill, BsFillShareFill } from "react-icons/bs"
import story from "../assests/img/story.jpg"
import Comments from './Comments'
import { Link } from 'react-router-dom'
function Post()
{

    const [hideComment, setComments] = useState(false);
    return (
        <div className='w-full py-5'>
            <div className='Post   bg-white drop-shadow-md shadow-md font-open overflow-hidden rounded-xl'>
                <header className='flex  items-center justify-between p-5'>
                    <div className="user flex items-center gap-3">
                        <img src={profile} alt="profile img" className='w-[3rem] h-[3rem] rounded-full object-cover drop-shadow-md shadow-2xl ' />
                        <div>
                            <Link to="/profile/1">
                                <h3 className='font-lg font-popins text-dark-blue'>John deep</h3>
                            </Link>
                            <span className='text-[12px] text-light-gray'>
                                a few secound ago
                            </span>
                        </div>

                    </div>
                    <TbDots className='cursor-pointer hover:scale-125 transition-all ease-in-out' />
                </header>
                <div className='px-3'>
                    <h3 className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, assumenda.</h3>
                    <img src={story} alt="story img" className='w-full h-[20rem] object-cover rounded' />
                </div>
                <div className='flex font-popins p-3 text-blue capitalize'>
                    <ul className='flex gap-5'>
                        <li className='flex items-center gap-2 cursor-pointer'><BsHeartFill /> <span>12</span> Like</li>
                        <li className='flex items-center gap-2 cursor-pointer' onClick={() => { setComments(!hideComment) }}><BsChatRightDotsFill />  <span>3</span> comments</li>
                        <li className='flex items-center gap-2 cursor-pointer'><BsFillShareFill /> <span>5</span> share</li>

                    </ul>

                </div>
                {hideComment && <Comments />}
            </div>
        </div>
    )
}

export default Post
