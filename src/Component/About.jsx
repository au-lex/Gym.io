import React from 'react'
import { FaRegDotCircle } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

const About = () => {
  return (
    <>
    
    <section className="about px-4 mt-6">

        <figcaption className="desc space-y-2 text-slate-800 mb-4">

        <h1 className='text-[2rem]    text-yellow-500 font-bold uppercase s'>
          <span className=' text-slate-900'>Best </span> Equipment <br /> & fitness
           <span className='text-slate-900'>trainers</span> </h1>
            <p>Gym is very important to maintain our health luptas sit fugit,
                 sed quia cuuntur magni dolores eos qui rat ione volupta pleasure rationally 
                 encounter consequences that are extremely </p>

                 <ol className='mb-5'>
                    <li className='flex text-[18px] mb-2 '> <span className="pt-[5px] mr-2 text-yellow-500"><FaRegDotCircle /></span>Builds Aerobic power</li>
                    <li className='flex text-[18px] mb-2'> <span className="pt-[5px] mr-2 text-yellow-500"><FaRegDotCircle /></span>Strong Body Structure</li>
                    <li className='flex text-[18px] mb-2'> <span className="pt-[5px] mr-2 text-yellow-500"><FaRegDotCircle  /></span>Boots your Memory</li>
                    <li className='flex text-[18px] mb-2'> <span className="pt-[5px] mr-2 text-yellow-500"><FaRegDotCircle /></span>Brngs about restful Sleep</li>
                 </ol>

                 <div className="btn mt-6">
                    <button className='w-[50%] text-white font-semibold text-[18px] uppercase
                     my-[1.2rem] rounded-[30px] bg-yellow-500 py-3'>Let start</button>
                 </div>

                 <section className="watchVid flex space-x-2 ">
                    <span className="vidBorder flex  items-center justify-center border-4 border-l-4 border-t-4 border-b-4 border-t-yellow-500 border-b-yellow-500 border-l-yellow-500 border-slat-500 w-[3rem] h-[3rem] rounded-full">

                  
                    <FaPlay /> 
                    </span>
                    <span className=' uppercase block text-[20px] s font-semibold pt-2'>Intro video</span>
                 </section>
        </figcaption>
        <div className="abtContainer">
            <img src="https://htmldemo.net/zymzoo/zymzoo/assets/img/gallery/g1.png"
            className='rounded-[10px]'
            alt="" />
        </div>
    </section>
    
    </>
  )
}

export default About