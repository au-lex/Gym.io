import React from 'react'
import Header from './Header';
import Footer from './Footer';
import { BsChevronLeft } from 'react-icons/bs';

const SearchModal = ({isopen, onclose, children}) => {

    if(!isopen) return null;
  return (

    <>
    <div className="fixed pt- inse 0  w-full  bottom-0 z-50 flex overflow-hidden  h-auto bg-white top-0 itemscenter justify-center  overflow-y-auto">
    <Header />
        
      <div className="absolute inset-0 bg-black opacity-90" ></div>
      <div className="bg-white  w-full  pt-[2rem]   z-10">
        <div className="px- md:px-4 mt-8 mb-[rem]">

         <button onClick={onclose} className="mt-4 mb-4 font-bold text-red-500 bg-yelow-500 tex-white px-4 py-1 rounded">
         X
        </button>
        </div>
        {children}
       
      </div>
    </div>
      
    </>
  )
}

export default SearchModal