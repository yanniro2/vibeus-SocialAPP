import React from 'react'
import Post from './Post'
import Story from "./Story"
function Home()
{
    return (
        <div className='fixed top-[8vh] p-10 flex flex-col z-[100] left-[15vw] right-[25vw] h-full bottom-0 overflow-scroll bg-[#eee] gap-5'>
            <Story />
            <Post />
        </div>
    )
}

export default Home
