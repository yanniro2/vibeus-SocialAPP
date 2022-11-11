import React from 'react'
import register from "../assests/img/register.jpg"
import { Link } from 'react-router-dom';
function Register()
{
    return (
        <div className='Login w-full h-full bg-yellow flex items-center justify-center font-popins text-ms font-ms '>
            <div className="content w-1/2 h-3/4 bg-white rounded drop-shadow shadow flex items-center justify-center default:w-3/4 Tablet:w-3/4 Mobile:w-11/12 Mobile:flex-col">

                {/* left */}
                <div className="left w-1/2 h-full relative flex flex-col p-10 text-white gap-5 justify-between Mobile:w-full order-2 Mobile:h-1/4 Mobile:p-2 Mobile:gap-1 Mobile:text-[12px]">
                    <img src={register} alt="register img" className='w-full h-full object-cover rounded-r absolute top-0 bottom-0 left-0 right-0 -z-1 Mobile:rounded-b' />
                    <div className='absolute z-10 w-full h-full bg-light-gray top-0  bottom-0 left-0 right-0 rounded-r Mobile:rounded-b Mobile:rounded-none'>

                    </div>
                    <h1 className="text-[3.5rem] font-xl text-white z-50 leading-none Mobile:text-[1.2rem]">New Social.</h1>
                    <p className='z-10  text-white font-ms '>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit dolores eligendi, a omnis magni enim! Placeat debitis alias corrupti illum?
                    </p>
                    <div className='z-10 flex gap-2 flex-col font-open'>
                        <span className='text-[14px] font-lg Mobile:text-[15px]'>Do you have an account?</span>
                        <Link to="/Login">
                            <button className='z-10 bg-black px-6 py-3 text-yellow font-xl cursor-pointer drop-shadow-md shadow-md hover:tracking-wide transition-all hover:text-light-yellow Mobile:px-3 Mobile:py-1 Mobile:w-[30%] capitalize' >login</button>
                        </Link>
                    </div>

                </div>
                {/* right */}
                <div className="right w-1/2 h-full font-popins p-10 flex flex-col items-center justify-center Mobile:w-full Mobile:order-1">

                    <div className='w-full h-full flex flex-col justify-around'>
                        <h1 className='text-[2rem] text-yellow uppercase font-ms Mobile:text-[2rem]'>Register</h1>
                        <input type="text" name="username" id="" placeholder='Username' className=' border-b-[1px] border-light-yellow p-3 text-yellow outline-none' />
                        <input type="text" name="email" id="" placeholder='Email' className=' border-b-[1px] border-light-yellow p-3 outline-none' />
                        <input type="password" name="password" id="" placeholder='Type password' className=' border-b-[1px] border-light-yellow p-3 outline-none' />
                        <input type="Name" name="password" id="" placeholder='Name' className=' border-b-[1px] border-light-yellow p-3 outline-none' />
                        <button className=' z-10 bg-yellow px-6 py-3  font-xl cursor-pointer drop-shadow-md shadow-md hover:tracking-wide transition-all  '>Register</button>
                    </div>

                </div>


            </div >
        </div >
    )
}

export default Register;
