import React from 'react'
import currentUser from "../assests/img/profile.jpg"
import user from "../assests/img/users.jpg"
function Comments()
{
    return (
        <div className='comments p-5 flex flex-col gap-3 capitalize'>
            <div className="new flex gap-2 item-center justify-between">
                <img src={currentUser} alt="current user img" className='w-[3rem] h-[3rem] object-cover rounded-full' />
                <input type="text" name="comment" id="" placeholder='write comment..' className=' outline-none border-[1px] p-1 border-[#eee] w-[80%] placeholder:capitalize' />
                <button className='bg-blue px-3 py-[5px] text-white rounded font-popins drop-shadow-md shadow-md text-[14px]'>Comment</button>
            </div>

            <div className="comments flex gap-2 items-start">
                <img src={user} alt="user img" className='w-[3rem] h-[3rem] object-cover rounded-full' />

                <div className='flex flex-col gap-2'>
                    <h3 className=' font-popins text-blue font-lg mt-3'>Lara</h3>
                    <div className='font-open text-[14px] text-[#242424] flex justify-between w-full items-center'>
                        <p className='w-[80%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores quae libero fugit provident vel beatae illum, pariatur eos deleniti dolor.</p>

                        <div className='text-[12px] font-popins text-[#c3c3c3] w-[10%] flex items-end'>1 hour ago</div>
                    </div>
                </div>
            </div>
            <div className="comments flex gap-2 items-start">
                <img src={user} alt="user img" className='w-[3rem] h-[3rem] object-cover rounded-full' />

                <div className='flex flex-col gap-2'>
                    <h3 className=' font-popins text-blue font-lg mt-3'>Lara</h3>
                    <div className='font-open text-[14px] text-[#242424] flex justify-between w-full items-center'>
                        <p className='w-[80%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores quae libero fugit provident vel beatae illum, pariatur eos deleniti dolor.</p>

                        <div className='text-[12px] font-popins text-[#c3c3c3] w-[10%] flex items-end'>1 hour ago</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comments
