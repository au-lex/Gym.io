import React from 'react'
import { Link } from 'react-router-dom'

const HeroCo = () => {
  return (
    <>

    <section className="heroConatiner pt-[4rem] relative">
    
    
     <img src="https://htmldemo.net/zymzoo/zymzoo/assets/img/slider/1.jpg" 
     className = "w-full md:h-[45rem] h-[49rem] object-cover"
     alt="" />
    
     
    
  
    
    
    
    <section className="heroContent md:grid md:grid-cols-2  md:pt-[3.5rem] overflow-hidden absolute inset-0 top-[5rem]">


    <section className="herotext text-center md:text-left w pt-[2rem] md:px-[2rem]  px-3">
        <h1 className='text-[4rem] md:text-[8rem] md:leading-[7.5rem] leading-[4.5rem] text-white font-bold uppercase s'>
          <span className='text-yellow-500'>time </span> to <br /> get <span className='text-yellow-500'>fit</span> </h1>
        
        <p className='text-slate-200 md:text-[16px] md:my-[2rem] md:w-[90%]'>
        Your fitness journey starts here. Let us help you reach your full potential.
        Achieve your fitness goals with our expert guidance and personalized programs.
        Join us and discover the joy of a healthier, happier you.</p>


           <Link to ="/exercise" className="btn flex justify-center md:justify-start my-[2rem]">

    <button className='border-2 border-yellow-500 hover:bg-yellow-500 hover:text-white duration-200 text-slate-200 rounded-[50px] text-[1.5rem] w-[60%] p-3 '>Gym Now</button>
</Link>
    </section>
    


    <div>

            <img src="https://htmldemo.net/zymzoo/zymzoo/assets/img/slider/h-1.png" 
            
            className='w-full h-[400px] md:h-[650px] object-cover'
            alt="" />
    </div>

            </section>

            </section>
        </>
  )
}

export default HeroCo