import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { ImLocation2 } from "react-icons/im";
import { FaPhoneVolume } from "react-icons/fa6";
import { BsGlobe2 } from "react-icons/bs";


const Footer = () => {
  return (
    <>
    
    
    <section className="footer mt4rem] relative   ">
        <img src="https://htmldemo.net/zymzoo/zymzoo/assets/img/photos/bg-f1.png"
        
        
        className='w-full h-[50rem] md:h-[25rem] object-cover '
        alt="" />

    <section className="navlinksContainer md:px-8 md:flex md:justify-between px-4 md:pt-[2.5rem] top-[1rem] absolute inset-0 text-gray-300">

        {/*=========== first row ========*/}
        <section className="firstrow md:w-[30%] ">

    <div className="log flex space-x-3">
<img src="https://htmldemo.net/zymzoo/zymzoo/assets/img/icons/g1.png"
className='w-[40px] h-[40px] object-contain'
alt="" />
<h2 className ="text-[1.6rem] text-yellow-500 font-bold s">GYMMIE</h2>


</div>
<p className='mt-2'>Zymzoo winner dolor sit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna

</p>

<section className="time">
<h1 className="txt-yellow-500 text-[20px] font-bold  capitalize mt-2">Opening time</h1>
<p>Monday - Friday: 7 am to 10 pm</p>
<p>Saturday - Sunday: 9 am to 10 pm</p>

</section>

</section>

{/*=========== second row ========  */}


<section className="secRow my-8 md:my-0 md:w-[30%]">
<p className=' uppercase text-[1.3rem] mt-4 font-bold text-yellow-500'>contact info</p>

<section className="flex space-x-4 mt-4">


<span className="icon pt-2">
    <ImLocation2  className='text-[1.8rem] text-yellow-500'/>
</span>


<span className="desc">

{/* Address */}
252B, Central Street Main road Belix Tower, New York, USA
</span>
</section>


<section className="flex space-x-4 my-6">


<span className="icon pt-2">
    <FaPhoneVolume className='text-[1.8rem] text-yellow-500'/>
</span>


<span className="desc">

{/* Address */}
Phone
09 (123) 456 789<br />
09 (987) 654 321
</span>
</section>


<section className="flex space-x-4">


<span className="icon pt-2">
    <BsGlobe2  className='text-[1.8rem] text-yellow-500'/>
</span>


<span className="desc">

{/* Address */}

info@example.com<br />
www.example.com
</span>
</section>


</section>


{/* ======= third row ===== */}

<section className="thirdrow md:w-[30%]">
    <p className=' uppercase text-[1.3rem] mt-4 font-bold text-yellow-500'>Newsletter</p>
    <p className='mt-2'>Subscribe our Newsletter and gates latest updates of offers, 
        productsa and promotions from every week we provide</p>

<div className="subscibeInput my-6 relative">
    <input type="email" name="" placeholder='Email here...' className='border-2 rounded-[5px]
    w-full p-[12px]
    border-slate-200 bg-transparent  outline-none' id="" />
    <span className="sendIcon w-[3rem] h-[2.5rem] bg-yellow-500 flex items-center justify-center absolute rounded-[5px] right-[6px] top-[6px] ">
        <IoIosSend className='text-[2rem]' /> 
    </span>
</div>
        <section className="icon mt-3 space-x-6 flex">
            <span className="bg-white  text-black w-[2rem] h-[2rem] rounded-[8px] flex items-center justify-center">

            <FaFacebookF className='text-[1.2rem]' />
            </span>
            <span className="bg-white  text-black w-[2rem] h-[2rem] rounded-[8px] flex items-center justify-center">

            < FaInstagram className='text-[1.2rem]' />
            </span>
            <span className="bg-white  text-black w-[2rem] h-[2rem] rounded-[8px] flex items-center justify-center">

            < FaTwitter className='text-[1.2rem]' />
            </span>
        </section>
</section>

    </section>
    </section>
    
    </>
  )
}

export default Footer