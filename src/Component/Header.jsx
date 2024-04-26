import React from 'react'
import { CgMenuRight } from "react-icons/cg";
const Header = () => {
  return (
    <>
    
    <section className="header bg-[#1F1F1F] shadow-md fixed w-full h-[4.5rem] p-3  " >

        <section className="headerControll flex  justify-between items-center">

   
<div className="log flex space-x-3">
<img src="https://htmldemo.net/zymzoo/zymzoo/assets/img/icons/g1.png"
className='w-full h-[40px] object-cover'
alt="" />
<h2 className ="text-[2rem] text-white font-bold s">GYMMIE</h2>

</div>
 


<div className="meuebar">
<CgMenuRight className ="text-[2.5rem] text-white" />
</div>
</section>
    </section>
    </>
  )
}

export default Header