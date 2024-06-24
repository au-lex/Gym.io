import React from 'react';
import { useSpring, animated } from 'react-spring';
import Footer from "../../src/Component/Footer"
import Header from "../../src/Component/Header"
import Loader from "../../src/Component/Loader"
import Map from "../../src/Component/Map"
import { ImLocation2 } from "react-icons/im";
import { FaPhoneVolume } from "react-icons/fa6";
import { BsGlobe2 } from "react-icons/bs";

const ContactUs = () => {
 const imageUrl = 'https://htmldemo.net/zymzoo/zymzoo/assets/img/photos/bg-page2.jpg';
  return (

    <>
<Loader />
    <Header />
    <figure className="img relative pt-[4.5rem] ">
          <div className="bg-black z-20 w-full inset-0 absolute opacity-80"></div>
          <img src={imageUrl} className='w-full h-[270px] md:h-[350px] object-cover' alt="" />
          <div className="z-30 w-full inset-0 absolute pt-[3rem]">
            <section className="desc text-center w-full pt-[4rem] px-5 md:px-[25rem]">
              <h1 className='text-[2rem] md:text-[4.5rem] text-yellow-500 text-enter font-bold uppercase'>
                <span className='mx-1 text-slate-100'>CONTACT </span>US
              </h1>
              <p className='text-white '>We have very professional and expert Instructor and they can very important to maintain our health luptas sit fugit, sed quia cuuntur magni dolores some products</p>
            </section>
          </div>
        </figure>


<section className="block text-center mt-[3rem] mb-[3rem]">

        <h1 className='text-[2rem]    text-yellow-500 font-bold uppercase s'>
          <span className=' text-slate-900'>GET IN </span> TOUCH 
      </h1>
  
<p> Contact us if you neeed information</p>

</section>

<section className=" bg-re-500 lg:grid grid-cols-3 px-3 lg:px-[2rem] lg:space-x-6  block">

<section className="flex flex-col rounded-[10px]  justify-center space-x-4 lg:my-0 my-6 h-[15rem] items-center border border-yellow-500 shadow">


<span className="icon pt-2 mb-4">
    <ImLocation2  className='text-[2.8rem] text-yellow-500'/>
</span>


<span className="desc">

{/* Address */}
252B, Central Street Main road<br /> Belix Tower, New York, USA
</span>
</section>


<section className="flex flex-col  rounded-[10px] border shadow justify-center space-x-4 lg:my-0 my-6 h-[15rem] items-center border-yellow-500 bink-300">


<span className="icon pt-2 flex justify-center mb-4">
    <FaPhoneVolume className='text-[2.8rem] text-yellow-500'/>
</span>


<span className="desc block text-center">

{/* Address */}

09 (123) 456 789<br />
09 (987) 654 321
</span>
</section>


<section className="flex flex-col  rounded-[10px] justify-center space-x-4 lg:my-0 my-6 h-[15rem] items-center border shadow border-yellow-500">


<span className="icon pt-2 mb-4">
    <BsGlobe2  className='text-[2.8rem] text-yellow-500'/>
</span>


<span className="desc">

{/* Address */}

info@example.com<br />
www.example.com
</span>
</section>


</section>


    
    <div className="lg:flex flex-ol block lg:space-x-8 bgred-500  px-3 lg:px-8 justify-center items-center min-h-screen bg-gra-100 py-16">
    
   
     
      <div className="flex flex-col  w-full  ">
      
      <h2 className='text-[2.5rem] mb-5'>Send Message</h2>
      <p className='text-[18px] mb-5'>If you need any information, feel free to send me message I will try to answer your 
      and give you proper tips about your message</p>

      <section>

      </section>

<div className="flex space-x-4 mb-8 ">

        <div className="w-full ">
         
          <input type="text" id="name" 
          placeholder='Name'
           className="px-4 w-full py-2 rounded-md border border-gray-300 text-black placeholder:text-slate-400  focus:outline-none focus:ring-1 focus:ring-blue-500" />
        </div>
        <div className=" w-full ">
          
          <input type="email" id="email" 
           placeholder='Email' className="px-4 py-2 rounded-md border w-full border-gray-300 placeholder:text-slate-400  focus:outline-none focus:ring-1 focus:ring-blue-500" />
        </div>
</div>


        <div className=" lg:mb-2">
          
          <textarea id="message" rows="5"   placeholder='Message' className="px-4 w-full py-2  h-[230px] rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"></textarea>
        </div>
        <button className="bg-yellow-500 hover:bg-yellow-700 my-[1rem] lg:my-0  w-[50%]
        text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2
         focus:ring-offset-2 focus:ring-white">Send Message</button>
      </div>


      <Map />
    
    </div>

    <Footer />
    </>
  );
};

export default ContactUs;
