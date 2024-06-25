import React, { useState } from 'react';
import { IoReturnUpBack } from "react-icons/io5";


const SearchCard = ({ exercise }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
    <div className="mb-3 mx-2 flex space-x-4 border w-ful bg-white p-1 rounded-[10px]   oveflow-x-hidden">
    



    <figure className="imgCn border px-4 rounded-[5px] p-2 border-yellow-500 shadow-2xl">
        <img
          src={exercise.gifUrl}
          alt="img"
          className="w-full h-[200px] object-cover"
        />
      </figure>
      <figcaption className="desc ">
        <h3 className="font-semibold text-gray-700 capitalize text-[18px]">
          {exercise.name}
        </h3>
        <p className="text-gray-600 mt-2 text-[13px]">
          Target Muscle: {exercise.target}
        </p>
        <p className="text-gray-600 text-[13px] my-[1rem]">
          Secondary Muscles: {exercise.secondaryMuscles.join(', ')}
        </p>
        <div className="btn">
        <button onClick={toggleModal}
  
  className="bg-yellow-500 block text-center text-white w-full p-2 rounded-[5px]"
>
  More info..
</button>

        </div>
      </figcaption>





    </div>

    





      {showModal && (
        
        
        <section className="fixed left-0 inset-0 w-full h-full right-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
     <div className="bg- p-4 pt-[6rem] rounded-lg max-w-lg">
   
        <button onClick={toggleModal} className=" bg-yellow-500 mb-4 text-white p-2 rounded-full">
         <IoReturnUpBack />
       </button>
       <figure className="border rounded-md p-2">
         <img src={exercise.gifUrl} alt="Exercise GIF" className="w-full h-[400px] object-cover" />
       </figure>
       <div className="text-gray-700 mt-4">
         <h3 className="font-semibold text-lg">{exercise.name}</h3>
         <p className="text-gray-600 mt-2">Target Muscle: {exercise.target}</p>
         <p className="text-gray-600">Secondary Muscles: {exercise.secondaryMuscles.join(', ')}</p>
       </div>
     </div>
   </section>
   
      )}


      </>
  );
};

export default SearchCard;
