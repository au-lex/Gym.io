import React from 'react'
import { FaRegDotCircle } from "react-icons/fa";

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
                    <li className='flex text-[20px] mb-2'> <span className="pt-2 mr-2 text-yellow-500"><FaRegDotCircle /></span>Builds Aerobic power</li>
                    <li className='flex text-[20px] mb-2'> <span className="pt-2 mr-2 text-yellow-500"><FaRegDotCircle /></span>Strong Body Structure</li>
                    <li className='flex text-[20px] mb-2'> <span className="pt-2 mr-2 text-yellow-500"><FaRegDotCircle  /></span>Boots your Memory</li>
                    <li className='flex text-[20px] mb-2'> <span className="pt-2 mr-2 text-yellow-500"><FaRegDotCircle /></span>Brngs about restful Sleep</li>
                 </ol>

                 <div className="btn mt-6">
                    <button className='w-[50%] text-white font-semibold text-[18px] uppercase
                     my-[1.2rem] rounded-[30px] bg-yellow-500 py-3'>Let start</button>
                 </div>
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