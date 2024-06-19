import React from 'react'
import Header from '../Component/Header';
import Footer from "../Component/Footer"
import { FaRegDotCircle } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import Loader from '../Component/Loader';
import Banner from '../Component/Banner';
import Member from '../Component/Member';

const About = () => {
  const imageUrl = 'https://htmldemo.net/zymzoo/zymzoo/assets/img/photos/bg-page2.jpg';
  return (
    <>
    <Loader />
    <Header />
    <section className="bmi pt-[4rem]">


        <figure className="img relative">
            <div className="bg-black  z-20 w-full inset-0  absolute opacity-80"></div>
            <img src={imageUrl} className='w-full h-[250px]  md:h-[350px] object-cover' alt="" />
            <div className="  z-30 w-full inset-0  absolute ">

<section className=" px-[2rem] desc text-center md:px-[25rem] pt-12">

            <h1 className='text-[2rem] md:text-[5.5rem]    text-yellow-500 textcenter  font-bold uppercase s'>
          <span className='mx-1 text-slate-100'> ABOUT   </span>US <br /> 
            </h1>
          <p className='text-white'>Gym is very important to maintain our health luptas sit fugit,
sed quia cuuntur magni dolores eos qui rat ione volupta

</p>
         
</section>


            </div>
        </figure>

        <main className="abt px-4">
          <h1>

</h1>

<figure className='md:grid md:grid-cols-2   md:space-x-9 md:items-center md:place-items-center md:px-[2rem]'>
<figcaption className="desc space-y-2 text-slate-800 mb-4">

  <p className='mt-[2rem]  tracking-[.3rem] text-yellow-500 text-[12px] '>WELCOME TO GYMMIE</p>

<h1 className='text-[1.5rem]    text-yellow-500 font-bold uppercase s'>
  <span className=' text-slate-900'> BEST  </span>  GYM STATION  <span className=' text-slate-900'>FOR <br /> YOU BECAUSE WE PROVIDE <br /></span> 
  BEST<span className=' text-slate-900'> QUALITY OF <br /></span>EQUIPMENTS
   <span className='text-slate-900'> AS WELL AS </span>   <br />INSTRACTORS</h1>







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

         <section className="watchVid flex md:hidden space-x-2 ">
            <span className="vidBorder flex  items-center justify-center border-4 border-l-4 border-t-4 border-b-4 border-t-yellow-500 border-b-yellow-500 border-l-yellow-500 border-slat-500 w-[3rem] h-[3rem] rounded-full">

          
            <FaPlay /> 
            </span>
            <span className=' uppercase block text-[20px] s font-semibold pt-2'>Intro video</span>
         </section>
</figcaption>


  <div className='md:border  md:rounded-[10px] pt-1 px-1 shadow overflow-hidden border-yellow-500 '>
    <img src="https://htmldemo.net/zymzoo/zymzoo/assets/img/about/2.png"
    className='md:h-[450px] w-full object-cover' alt="" />
  </div>


</figure>


{/* banner section */}


<section className="abtBanner rem] banner">


 <Banner />
</section>

<Member />
        </main>



        </section>
        
        <Footer />
        </>
  )
}

export default About