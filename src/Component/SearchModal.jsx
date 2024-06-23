import React from 'react'
import Header from './Header';
import Footer from './Footer';
import { BsChevronLeft } from 'react-icons/bs';

const SearchModal = ({isopen, onclose, children}) => {

    if(!isopen) return null;
  return (

    <>
      {/* <div className="absolute inset-0 bg-black w-full z-50 h-auto opacity-90" ></div> */}
    <div className="fixed pt- inse 0  w-full   bottom-0 z-50 flex overflowhidden  h-auto bg-white top-0 itemscenter justify-center   overflow-y-scroll">
    <Header />
        
      <div className="bgwhite  w-full  pt-[2rem]   z-10">
        <div className="px- md:px-4 mt-8 mb-[rem]">

         <button onClick={onclose} className="mt-4 mb-4 font-bold text-red-500 bg-yelow-500 tex-white px-4 py-1 rounded">
         X
        </button>
        </div>
        {children}
       
      </div>
    </div>
    <section className="cr  fixed top-[30rem] z-20 opacity-40 w-full bg-red-500 ">
        
        <h1  className='text-center text-white z-20 p-8 text-[4rem]'>Aulex</h1>
              
              
              </section>
    </>
  )
}

export default SearchModal