import React from 'react'
import { FaPlay } from "react-icons/fa";


const Classes = () => {
  return (
    <>
    {/* desktop */}
    <section className="classess hidden mt-[3rem] px-3 md:flex justify-center md:px-[3rem]  md:my-[8rem]  ">

        <figcaption className='b500 border shadow p-5'>

       
    <h1 className='text-[2rem]    text-yellow-500 font-bold uppercase s'>
          <span className='mx-1 text-slate-900'>SPECIFIC </span> CLASSES <br /> WHAT  
           <span className='text-slate-900 mx-1'>   YOU NEEDS</span> </h1>

           <p className='my-4 md:w-[80%]'>A gym is much more than just a place to exercise;
             it's an investment in your overall well-being.
             Regular physical activity offers a multitude of benefits.
            Find the perfect workout to fit your goals and interests! 
            We offer a variety of classes designed to challenge and motivate you.
</p>



<section className="watchVid flex space-x-2 ">
                    <span className="vidBorder flex  items-center justify-center border-4 border-l-4 border-t-4 border-b-4 border-t-yellow-500 border-b-yellow-500 border-l-yellow-500 border-slat-500 w-[3rem] h-[3rem] rounded-full">

                  
                    <FaPlay /> 
                    </span>
                    <span className=' uppercase block text-[20px] s font-semibold pt-2'> video class</span>
                 </section>


                 </figcaption>

<figure className="classimg md:mt-0 md:order-[-1] p-2 mt-5 bg-yellow-500">
    <div className="imgContainer md:w-[400px]   border-2   border-slate-3-00 shadow rounded-full p-4">

    <img src="https://htmldemo.net/zymzoo/zymzoo/assets/img/photos/d1.jpg"
    className=']'
    alt="" />
    </div>
</figure>

    </section>

    {/* mobile */}

    <section className="classess mt-[3rem] px-3 block md:hidden ">

<figcaption>


<h1 className='text-[2rem]    text-yellow-500 font-bold uppercase s'>
  <span className='mx-1 text-slate-900'>SPECIFIC </span> CLASSES <br /> WHAT  
   <span className='text-slate-900 mx-1'>   YOU NEEDS</span> </h1>

   <p className='my-4'>Gym is very important to maintain our health luptas sit fugit, sed quia 
    cuuntur magni dolores eos qui rat ione volupta pleasure rationally 
    encounter consequences that are extremely
    Gym is very important to maintain our health luptas sit fugit, sed quia cuuntur
    magni dolores eos qui rat ione volupta</p>



<section className="watchVid flex space-x-2 ">
            <span className="vidBorder flex  items-center justify-center border-4 border-l-4 border-t-4 border-b-4 border-t-yellow-500 border-b-yellow-500 border-l-yellow-500 border-slat-500 w-[3rem] h-[3rem] rounded-full">

          
            <FaPlay /> 
            </span>
            <span className=' uppercase block text-[20px] s font-semibold pt-2'> video class</span>
         </section>


         </figcaption>

<figure className="classimg mt-5">
<div className="imgContainer  border-2 border-slate-3-00 shadow rounded-full p-4">

<img src="https://htmldemo.net/zymzoo/zymzoo/assets/img/photos/d1.jpg" alt="" />
</div>
</figure>

</section>
    
   </>
  )
}

export default Classes