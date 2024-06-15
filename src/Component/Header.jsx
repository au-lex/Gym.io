import React,{useState} from 'react'
import { CgMenuRight } from "react-icons/cg";
import { FaHome, FaShoppingCart, FaDumbbell, FaEnvelope, FaInfoCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {

  const cart = useSelector(state => state.cart);
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const [openNav, SetopenNav] = useState(false)

  const handleOpen = () => {
    SetopenNav(!openNav)
  }
  return (
    <>
    
    <section className="header bg-[#1F1F1F] z-40 shadow-md fixed w-full h-[4.5rem] p-3  " >

        <section className="headerControll flex  justify-between items-center">

   
<div className="log flex space-x-3">
<img src="https://htmldemo.net/zymzoo/zymzoo/assets/img/icons/g1.png"
className='w-full h-[40px] object-cover'
alt="" />
<h2 className ="text-[2rem] text-yellow-500 font-bold s">GYMMIE</h2>

</div>
 
<Link to ="/cart" className="cart-icon block bg-white">
        <FaShoppingCart />
        <span>{cartItemCount}</span>
      </Link>

<div className="meuebar">
<CgMenuRight onClick={handleOpen} className ="text-[2.5rem] text-white" />
</div>

{/* mobilenavbar======== */}

{/* mobilenavbar======== */}


{/* mobilenavbar======== */}
<section className={`fixed w-full md:hidden block menu ${openNav ? "active" : ""} h-screen pt-5 left-0 right-0 top-[4.5rem]`} >

  <a href="/" className='blck flex items-center py-3 px-4 mb-3 text-white hover:text-white transition-colors'>
    <FaHome className="mr-2" size={20} />
    <span className="fontbold text-[20px]">Home</span>
  </a>

  <a href="/shop" className='blok flex items-center  mb-3 py-3 px-4 text-white hover:text-white transition-colors'>
    <FaShoppingCart className="mr-2" size={20} />
    <span className="fontbold text-[20px]">Shop</span>
  </a>

  <a href="/exercise" className='blok flex items-center  mb-3 py-3 px-4 text-white hover:text-white transition-colors'>
    <FaDumbbell className="mr-2" size={20} />
    <span className="fontbold text-[20px]">Exercise</span>
  </a>

  <a href="/contact" className='blo
  ck flex items-center py-3 px-4 text-white  mb-3 hover:text-white transition-colors'>
    <FaEnvelope className="mr-2" size={20} />
    <span className="fontbold text-[20px]">Contact</span>
  </a>

  <a href="/about" className='blo
  ck flex items-center py-3 px-4 text-white hover:text-white transition-colors'>
    <FaInfoCircle className="mr-2" size={20} />
    <span className="fontbold  text-[20px]">About</span>
  </a>

</section>

</section>


    </section>
    </>
  )
}

export default Header