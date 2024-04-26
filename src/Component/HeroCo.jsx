import React from 'react'

const HeroCo = () => {
  return (
    <>

    <section className="heroConatiner pt-[4rem] relative">
    
    
     <img src="https://htmldemo.net/zymzoo/zymzoo/assets/img/slider/1.jpg" 
     className = "w-full h-[45rem] object-cover"
     alt="" />
    
     
    
  
    
    
    
    <section className="heroContent  absolute inset-0 top-[5rem]">


    <section className="herotext text-center pt-[2rem] px-3">
        <h1 className='text-[4rem] leading-[4.5rem] text-white font-bold uppercase s'>
          <span className='text-yellow-500'>time </span> to <br /> get <span className='text-yellow-500'>fit</span> </h1>
        
        <p className='text-slate-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Similique, aliquam quaerat rem voluptatem officiis a at officia odit sapiente minima?</p>
    </section>
    
<div className="btn flex justify-center my-[2rem]">

    <button className='border-2 border-yellow-500 text-slate-200 rounded-[50px] text-[1.5rem] w-[60%] p-3 '>Gym Now</button>
</div>

    <div>

            <img src="https://htmldemo.net/zymzoo/zymzoo/assets/img/slider/h-1.png" 
            
            className='w-full h-[320px] object-cover'
            alt="" />
    </div>

            </section>

            </section>
        </>
  )
}

export default HeroCo