import React from 'react'
import ExerciseData from "../../../Hooks/ApiData"
import Header from "../../../Component/Header"
import Footer from "../../../Component/Footer"
import Loader from "../../../Component/Loader"

const Cardio = () => {
  const { data, isLoading, error } = ExerciseData("/bodyPart/cardio?limit=40&offset=0");
  if (isLoading) {
    return <> 
<Loader />
     </>
  }

  if (error) {
    return <div className="text-red-500 text-center py-8">Error: {error.message}</div>;
  }
const parsedData = JSON.parse(data)

return (

  <>
  
  <Header />

      <div className=" bg-black grid grid-cols-2  pt-[6rem]">
        {/* <h2 className="text-2xl font-bold text-gray-800 mb-4">Body Part List</h2> */}
        {parsedData.map((exercise, index) => (
          <div key={index} className="mb-6 mx-2 border bg-white p-1 rounded-[10px] border-red-500 overflow-hidden">
            <img src={exercise.gifUrl} alt="img" className='w-full h-[150px] object-cover' />
            <h3 className=" font-semibold text-gray-700 text-[13px]">{exercise.name}</h3>
            <p className="text-gray-600 text-[10px]">Target Muscle: {exercise.target}</p>
            <p className="text-gray-600 text-[12px]">Secondary Muscles: {exercise.secondaryMuscles.join(', ')}</p>
            {/* <p className="text-gray-600">Instructions:</p> */}
            {/* <ol className="list-decimal pl-6">
              {exercise.instructions.map((instruction, instructionIndex) => (
                <li key={instructionIndex} className="text-gray-700">
                  {instruction}
                </li>
              ))}
            </ol> */}
          </div>
        ))}
      </div>

    

    <Footer />

      </>
    );
}

export default Cardio;