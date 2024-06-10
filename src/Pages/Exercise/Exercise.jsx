import React from "react";
import Footer from "../../Component/Footer";
import Header from "../../Component/Header";
import Loader from "../../Component/Loader";


const Exercise = () => {
  const ExerciseList = [
    {

      // card
      name: "cardio",
      gifUrl: "https://v2.exercisedb.io/image/kP7PzqOXAIsfeH",
    },
    {
      // ches
      name: "chest",
      gifUrl: "https://v2.exercisedb.io/image/Bi8xVYeWIyqo56",
    },
    {
      name: "lower arms",
      gifUrl: "https://v2.exercisedb.io/image/XbgQTNDpKKevml",
    },
    {
      name: "lower legs",
      gifUrl: "https://v2.exercisedb.io/image/-EA4vBhetgIhoR",
    },
    {
      name: "shoulders",
      gifUrl: "https://v2.exercisedb.io/image/ip1CORTGGkf8KC",
    },
    {
      name: "upper arms",
      gifUrl: "https://v2.exercisedb.io/image/hwzS8KCAazlaDM",
    },
    {
      name: "upper legs",
      gifUrl: "https://v2.exercisedb.io/image/vKAWsPzehvwbAa",
    },
    {

      // wa
      name: "waist",
      gifUrl: "https://v2.exercisedb.io/image/UcvY9fRgNeiV4m",
    },
  ];
  return (
    <>
      <Loader />
      <Header />

      <main className="generalConatiner w-full exerciseDb flex items-center  bg-black   pt-[6rem]">
        <section className=" w-full pb-[2rem] ">

        <h1 className='text-[1.2rem]  pl-4   mb-4 text-yellow-500 textcenter  font-bold uppercase s'>
        choose<span className='mx-1 text-slate-100'>  Exercises....  </span> <br /> 
            </h1>
         

          <section className="container grid grid-cols-2 md:grid-cols-4 px-[.5rem]">
            {ExerciseList.map((exer) => (
              <div className="border-2 border-yellow-500 rounded-[10px] bg-white h-[10rem] overflow-hidden m-2 ">
               

                <figure className="imgCon relative ">
                <img src={exer.gifUrl} alt="img-exer" 
                className="w-full h-[156px] rounded-[10px] object-cover"
                /> 
                 <figcaption className=" absolute  bottom-0">

                <h1 className="text-white bg-yellow-500 text-[12px] capitalize p-1">{exer.name}</h1>
                 </figcaption>
                </figure>
               
              </div>
            ))}
          </section>
        </section>

       
      </main>

      <Footer />
    </>
  );
};

export default Exercise;

// import React from 'react';
// import ExerciseData from '../../../src/Hooks/ApiData';

// const MyComponent = () => {
//   const { data, isLoading, error } = ExerciseData('/bodyPart/cardio?limit=4&offset=0');

//   if (isLoading) {
//     return <div className="text-gray-600 text-lg text-center py-8">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-red-500 text-center py-8">Error: {error.message}</div>;
//   }

//   // Parse the JSON data
//   const parsedData = JSON.parse(data);

//   return (
//     <div className="max-w-3xl mx-auto p-8 bg-gray-100 rounded-lg shadow">
//       <h2 className="text-2xl font-bold text-gray-800 mb-4">Body Part List</h2>
//       {parsedData.map((exercise, index) => (
//         <div key={index} className="mb-6">
//           <h3 className="text-lg font-semibold text-gray-700">{exercise.name}</h3>
//           <img src={exercise.gifUrl} alt="" />
//           <p className="text-gray-600">Target Muscle: {exercise.target}</p>
//           <p className="text-gray-600">Secondary Muscles: {exercise.secondaryMuscles.join(', ')}</p>
//           <p className="text-gray-600">Instructions:</p>
//           <ol className="list-decimal pl-6">
//             {exercise.instructions.map((instruction, instructionIndex) => (
//               <li key={instructionIndex} className="text-gray-700">
//                 {instruction}
//               </li>
//             ))}
//           </ol>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MyComponent;
