import React from 'react';
import './Banner.css';
import { faHome,faSearch,faBook,faUser,faUserLock,faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bannerImg from "../../assets/banner//banner2.png"

const Banner = () => {
    return (
        <div className='banner bg-[#0096A0] mb-10 '>
            <div className="max-w-7xl mx-auto px-6 ">
                <div className="w-full flex">
                {/* banner left  */}
                <div className="w-1/2 pt-16">
                    <p className='max-w-max bg-white text-sm text-orange-600 font-semibold py-1.5 px-7 rounded-full mb-4'>New Year Sale! Hurry! Get Special Pricing Today</p>
                    <h1 className='font-cabin text-5xl font-bold text-white leading-tight'>Build Skills With Experts Any Time, Anywhere</h1>
                    <p className='font-open text-white mt-3.5'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.</p>

                    {/* banner search field  */}
                    <div className='flex h-12 mt-8 '>
                        <p className='px-3 text-2xl bg-white flex items-center text-orange-500 rounded-l-md'>
                            <FontAwesomeIcon icon={faSearch} />
                        </p>
                        <input className='w-3/5 focus:outline-none' type="text" placeholder='What do you want to learn?' />
                        <button className='hover:bg-indigo-900 duration-300 bg-orange-500 px-7 text-white font-semibold text-sm rounded-r-md'>Search Now</button>
                    </div>

                    {/* popular  */}
                    <div>
                        <ul className='flex text-white font-semibold font-cabin mt-5'>
                            <li className='mr-3'>Popular :</li>
                            <li className='mr-3 underline'><a href='#'>Development</a></li>
                            <li className='mr-3 underline'> <a href='#'>Marketing</a> </li>
                            <li className='mr-3 underline'><a href='#'>Illustration</a></li>
                            <li className='underline'><a href='#'>UX/UI</a></li>
                        </ul>
                    </div>
                </div>

                {/* banner right  */}
                <div className="w-1/2 p-5">
                    <img className='w-full' src={bannerImg} alt="" />
                </div>
                </div>
                <div className=" banner-inner w-full px-9 mt-5">
                    <div className=" flex  bg-white rounded-full px-9 py-8 drop-shadow-2xl">

                        {/* banner single course info  */}
                        <div className="w-1/3 flex px-2.5 gap-5">
                            <div > <FontAwesomeIcon icon={faBook} className="text-4xl text-gray-700 mt-2" /> </div>
                            <div>
                                <h1 className='text-xl font-bold'>10,000 Online Courses</h1>
                                <p className='text-sm text-slate-600 leading-[1.7] mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            </div> 
                        </div>  
                        {/* banner single course info  */}
                        <div className="w-1/3 flex px-2.5 gap-5">
                            <div> <FontAwesomeIcon icon={faUsers} className="text-4xl text-gray-700 mt-2" /> </div>
                            <div>
                                <h1 className='text-xl font-bold'>Experts Teachers</h1>
                                <p className='text-sm text-slate-600 leading-[1.7] mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            </div> 
                        </div>  
                        {/* banner single course info  */}
                        <div className="w-1/3 flex px-2.5 gap-5">
                            <div> <FontAwesomeIcon icon={faUserLock} className="text-4xl text-gray-700 mt-2" /> </div>
                            <div>
                                <h1 className='text-xl font-bold'>Lifetime Access</h1>
                                <p className='text-sm text-slate-600 leading-[1.7] mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            </div> 
                        </div>  
                                            
                    </div>
                </div>
                <div className='banner-mask'></div>
            </div>
        </div>
    );
};

export default Banner;