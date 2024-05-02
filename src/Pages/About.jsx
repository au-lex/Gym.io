import React from 'react'

import { FaCircle } from 'react-icons/fa';


const About = () => {

     const iconsData = [
    { icon: <FaCircle className="text-white" />, text: 'Total Order', number: 12 },
    { icon: <FaCircle className="text-orange-800" />, text: 'Shipped Order', number: 4 },
    { icon: <FaCircle className="text-orange-500" />, text: 'Pending Order', number: 4 },
    { icon: <FaCircle className="text-green-500" />, text: 'Approved Order', number: 4 },
    // { icon: <FaCircleO className="text-gray-500" />, text: 'Circle 3', number: 3 },
    // { icon: <FaCircleO className="text-gray-500" />, text: 'Circle 4', number: 4 },
  ];
  return (

    
    <>
{/* ======dashbaord header */}

<section className="headerG fixed w-full  h-[6rem]  z-50 bg-[#001897]">
<nav>
  <a href="dash">Dashbaord </a>
  <a href="">wallet</a>

  <div className=" w-[3rem] h-[3rem] rounded-full bg-slate-500">
<img src="https://res.cloudinary.com/durbee4ln/image/upload/v1714343743/FOOD_APP/Ellipse_32_xexs6y.png" alt="" />
    </div>
</nav>
</section>
{/* ======first row === */}

<section className="dasboardContainer flex  justify-center pt-[9rem] px-[2rem] space-x-4">

<div className="dash1 w-[40%] h-[8rem] bg-[#0018971A] rounded-[10px]" >
<figure className="img flex  justify-center items-center space-x-5 pt-[1.5rem] ">
    <div className=" w-[5rem] h-[5rem] rounded-full bg-slate-500">
<img src="https://res.cloudinary.com/durbee4ln/image/upload/v1714343743/FOOD_APP/Ellipse_32_xexs6y.png" alt="" />
    </div>

    <figcaption>
        <h1>Mary Sue</h1>
        <p><span className="text-blue-800 font-bold">p.o Box N:</span>  0000</p>
        <p><span className="text-blue-800 font-bold">My shoping Address:</span>123 Nassan store bahamas</p>
    </figcaption>
</figure>


</div>
<div className="dash1 w-[40%] flex justify-between items-center px-[3rem] h-[8rem] bg-[#FFE7E7] rounded-[10px]" >

     <section className="bal">
        <p className='font-semibold mb-2'>your balance</p>
        <h1 className='text-[3rem] font-bold'>0.00</h1>
     </section>
     <section className="bal">
       <div>
        <img src="https://res.cloudinary.com/durbee4ln/image/upload/v1714343706/FOOD_APP/add-square_vrfdcl.png" alt="" />
       </div>
     <p>Top up</p>
     </section>
</div>
</section>

{/* =====second row ===== */}
<section className="dasboardContainer flex  justify-center my-[2rem]  px-[2rem] space-x-4">

<div className="dash1 w-[40%] flex justify-between items-center px-[3rem] h-[8rem] bg-[#0018971A] rounded-[10px]" >



<section className="bal">
       <div>
        <img src="https://res.cloudinary.com/durbee4ln/image/upload/v1714343606/FOOD_APP/timer-start_ln18se.png" alt="" />
       </div>
     <p>Total Shipment</p>
     </section>

<section className="bal">


    
        {/* <p className='font-semibold mb-2'>your balance</p> */}
        <h1 className='text-[3rem] font-bold'>0</h1>
     </section>
  

</div>
<div className="dash1 w-[40%] flex justify-between items-center px-[3rem] h-[8rem] bg-[#0018971A] rounded-[10px]" >



<section className="bal">
     <p className='text-[1.5rem] mb-6 font-bold'>Quick Actions</p>
    
       <div className='flex space-x-2 bg-white p-1 rounded-[5px]'>
        <img src="https://res.cloudinary.com/durbee4ln/image/upload/v1714343612/FOOD_APP/box_rhhna8.png" alt="" />
        <p className='pt-1'>Create Shipment</p>
       </div>
     </section>

<section className="bal">


<div className='flex space-x-2 bg-white p-1 mt-[4rem] rounded-[5px]'>
        <img src="https://res.cloudinary.com/durbee4ln/image/upload/v1714343607/FOOD_APP/calculator_fi5biy.png" alt="" />
        <p className='pt-1'>Get Estimate</p>
       </div>
     </section>
  

</div>

</section>


<h1 className='px-[9rem] text-slate-800 text-[1.8rem]'>Recent Shipment</h1>
{/* ====third row */}
<section className="dasboardContainer flex  justify-center my-[2rem]  px-[2rem] space-x-4">

<div className="dash1 w-[40%] h-[30rem] flex flex-col px-[1rem] justify-center items-center bgyellow-500 rounded-[10px]" >

<div className="dash1 w-[100%] h-[8rem] p-3 bg-[#F3F5F8] rounded-[10px]" >
<img src="https://res.cloudinary.com/durbee4ln/image/upload/v1714458976/FOOD_APP/Ellipse_33_fvfzi5.png" alt="" />

<section className="flex justify-between">


<section className="bal">
     
       <div className=''>
        <img src="https://res.cloudinary.com/durbee4ln/image/upload/v1714343592/FOOD_APP/eBay-Logo-700x394_1_qzcj6g.png" alt="" />
       
     <p className='text-[12px] text-rose-500 mb-6 font-bold'>$25.00</p>
       </div>
     </section>

     <section className='text-[13px]'>
      <h2>12/1/2023</h2>
      <h2>Current Location: Home Base</h2>
      <h2 className = 'text-yellow-500'>Ongoing</h2>
      <h2>EDD: 12/10/2023</h2>
     </section>


     <section>
      <img src="https://res.cloudinary.com/durbee4ln/image/upload/v1714343586/FOOD_APP/archive-book_swdzks.png"
      
      className='mb-6'
      alt="" />
      <img src="https://res.cloudinary.com/durbee4ln/image/upload/v1714343586/FOOD_APP/archive-book_swdzks.png" alt="" />
      {/* <h2>Current Location: Home Base</h2> */}
      
     </section>
     </section>
</div>

<div className="dash1 w-[100%] h-[8rem] my-[2rem] p-3 bg-[#F3F5F8] rounded-[10px]" >
<img src="https://res.cloudinary.com/durbee4ln/image/upload/v1714458976/FOOD_APP/Ellipse_33_fvfzi5.png" alt="" />

<section className="flex justify-between">


<section className="bal">
     
       <div className=''>
        <img src="https://res.cloudinary.com/durbee4ln/image/upload/v1714343592/FOOD_APP/eBay-Logo-700x394_1_qzcj6g.png" alt="" />
       
     <p className='text-[12px] text-rose-500 mb-6 font-bold'>$25.00</p>
       </div>
     </section>

     <section className='text-[13px]'>
      <h2>12/1/2023</h2>
      <h2>Current Location: Home Base</h2>
      <h2 className = 'text-yellow-500'>Ongoing</h2>
      <h2>EDD: 12/10/2023</h2>
     </section>


     <section>
      <img src="https://res.cloudinary.com/durbee4ln/image/upload/v1714343586/FOOD_APP/archive-book_swdzks.png"
      
      className='mb-6'
      alt="" />
      <img src="https://res.cloudinary.com/durbee4ln/image/upload/v1714343586/FOOD_APP/archive-book_swdzks.png" alt="" />
      {/* <h2>Current Location: Home Base</h2> */}
      
     </section>
     </section>
</div>

<div className="dash1 w-[100%] h-[8rem] p-3 bg-[#F3F5F8] rounded-[10px]" >
<img src="https://res.cloudinary.com/durbee4ln/image/upload/v1714458976/FOOD_APP/Ellipse_33_fvfzi5.png" alt="" />

<section className="flex justify-between">


<section className="bal">
     
       <div className=''>
        <img src="https://res.cloudinary.com/durbee4ln/image/upload/v1714343592/FOOD_APP/eBay-Logo-700x394_1_qzcj6g.png" alt="" />
       
     <p className='text-[12px] text-rose-500 mb-6 font-bold'>$25.00</p>
       </div>
     </section>

     <section className='text-[13px]'>
      <h2>12/1/2023</h2>
      <h2>Current Location: Home Base</h2>
      <h2 className = 'text-yellow-500'>Ongoing</h2>
      <h2>EDD: 12/10/2023</h2>
     </section>


     <section>
      <img src="https://res.cloudinary.com/durbee4ln/image/upload/v1714343586/FOOD_APP/archive-book_swdzks.png"
      
      className='mb-6'
      alt="" />
      <img src="https://res.cloudinary.com/durbee4ln/image/upload/v1714343586/FOOD_APP/archive-book_swdzks.png" alt="" />
      {/* <h2>Current Location: Home Base</h2> */}
      
     </section>
     </section>
</div>

</div>
<section></section>
<div className="dash1 w-[40%] h-[30rem]  rounded-[10px]  flex flex-col px-[1rem] justify-center items-center" >



<div className="dash1 w-[100%] h-[8rem] flex justify-center flex-col items-center bg-[#0018971A] border  mb-4 rounded-[10px]" >
<h2>Track Your Package</h2>

<div className="inputCon w-[80%]">

<input type="text" className='w-full' />
<button className='bg-blue-800'> Search</button>
</div>

</div>
<div className="dash1 w-[100%] h-[18rem] bg-[#0018971A] rounded-[10px] p-4" >


<h2 className= " capitalize font-semibold text-[1.2rem]">order by satus</h2>
<div className="orderimg">
 <img src="https://res.cloudinary.com/durbee4ln/image/upload/v1714343562/FOOD_APP/Group_237945_bgccwi.png"
 
 className='w-full h-[170px] object-contain'
 alt="" />
</div>

 <div className="flex justify-between  px-em] font-medium text-[12px] flex-wrap mt-4 items-center">
      {iconsData.map((item, index) => (
        <div key={index} className="text-center">
          <div>{item.text}</div>
          <section className="flex space-x-2">
          <div>{item.icon}</div>
          <div>{item.number}</div>
          </section>
        </div>
      ))}
    </div>

</div>
</div>
</section>

    </>
  )
}

export default About

// https://res.cloudinary.com/durbee4ln/image/upload/v1714343679/FOOD_APP/Walmart-Symbol-700x394_1_qmswfx.png