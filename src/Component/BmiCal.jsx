import React from 'react'

const BmiCal = () => {
    const imageUrl = 'https://htmldemo.net/zymzoo/zymzoo/assets/img/testimonial/1.jpg';
  return (
    <>
    
    
    <section className="bmi mt-[4rem]">


        <figure className="img relative">
            <div className="bg-black  z-30 w-full inset-0  absolute opacity-80"></div>
            <img src={imageUrl} className='w-full h-[600px] object-cover' alt="" />
            <div className="  z-40 w-full inset-0  absolute ">

<section className="desc text-center pt-12">

            <h1 className='text-[2rem]    text-yellow-500 text-center  font-bold uppercase s'>
          <span className='mx-1 text-slate-100'> BMI  </span>CALCULATOR <br /> 
            </h1>
          <p className='text-white'>BMI is a reliable guide to estimate the healthy weight range based on height, wight and age

</p>
         
</section>

<section className="input px-4 mt-8">
<input
        className="border-b border-white w-full text-white p-2 my-4   bg-transparent focus:border-yellow-500 outline-none"
        type="text"
        placeholder="Height/Cm"
      />

<input
        className="border-b border-white w-full text-white p-2 my-4   bg-transparent focus:border-yellow-500 outline-none"
        type="text"
        placeholder="Weight/kg"
      />
<input
        className="border-b border-white w-full text-white p-2 my-4   bg-transparent focus:border-yellow-500 outline-none"
        type="text"
        placeholder="Age"
      />
<input
        className="border-b border-white w-full text-white p-2 my-4   bg-transparent focus:border-yellow-500 outline-none"
        type="text"
        placeholder="Male/Female"
      />
</section>

<section className="cal flex px-4 text-white justify-between mt-3rem]">
    <div className="btnCalc w-full mt-6">
        <button className='bg-yellow-500 rounded-full w-[70%] h-[3rem]'>Calculate</button>
    </div>
    <div className="score">
        <h1 className='text-[4rem]'>0.0</h1>
    </div>
</section>
            </div>
        </figure>
        </section>
        
        
        </>
  )
}

export default BmiCal