import React from 'react'
import Header from './Header';
import Footer from './Footer';

const SearchModal = ({isopen, onclose, children}) => {

    if(!isopen) return null;
  return (

    <>
    <div className="fixed pt- inse 0  w-full  bottom-0 z-50 flex  h-auto bg-white top-0 itemscenter justify-center  overflow-y-auto">
    <Header />
        
      <div className="absolute inset-0 bg-black opacity-90" ></div>
      <div className="bg-white  w-full  pt-[4rem]   z-10">
        <div className="px-4 mt-8">

         <button onClick={onclose} className="mt-4 bg-yellow-500 text-white px-4 py-1 rounded">
          Back
        </button>
        </div>
        {children}
       
      </div>
    </div>
      
    </>
  )
}

export default SearchModal