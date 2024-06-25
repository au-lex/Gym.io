import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Loader from '../../../Component/Loader';
import ExerciseData from '../../../Hooks/ApiData';
import VideoApi from '../../../Hooks/VideoApi';
import Footer from "../../../Component/Footer";
import Header from "../../../Component/Header";
import { IoReturnUpBack } from "react-icons/io5";
import LoaderApi from '../../../Component/LoaderApi';

const ShoulderDetails = () => {
  const { data, isLoading, error } = ExerciseData("/bodyPart/shoulders?limit=40&offset=0");
  const { id } = useParams();
  const [exerciseDetails, setExerciseDetails] = useState(null);

  useEffect(() => {
    if (data) {
      const exercise = data.find(ex => ex.id === id);
      setExerciseDetails(exercise);
    }
  }, [data, id]);

  if (isLoading) {
    return <LoaderApi />;
  }

  if (error) {
    return <div className="text-red-500 text-center py-8">Error: {error.message}</div>;
  }

  if (!exerciseDetails) {
    return <div className="text-red-500 text-center py-8">Exercise not found</div>;
  }


  const videoQuery = `${exerciseDetails.name}   workout`;

  return (
    <>
      <Header />
      
      <div className="max-w-xl mx-auto bg-white pt-[6rem] p-4 rounded-lg shadow-lg">

        <Link to="/shoulders-exercises" className=' bg-yellow-5 shadow border border-yellow-500 w-[2rem] h-[2rem] 
        rounded-full flex justify-center items-center'>  <IoReturnUpBack /></Link>
        <img
          src={exerciseDetails.gifUrl}
          alt={exerciseDetails.name}
          className="w-full h-[350px] object-cover mb-4 rounded-lg"
        />
        <h2 className="text-xl font-bold mb-4 capitalize">{exerciseDetails.name}</h2>
        <p className="text-gray-700 mb-2 text-[12px]"><strong>Target Muscle:</strong> {exerciseDetails.target}</p>
        <p className="text-gray-700 mb-2 text-[12px] "><strong>Equipment:</strong> {exerciseDetails.equipment}</p>
        <p className="text-gray-700 mb-2 text-[12px]"><strong>Secondary Muscles:</strong> {exerciseDetails.secondaryMuscles.join(', ')}</p>
        <div className="text-gray-700 mb-4">
          <strong>Instructions:</strong>
          <ol className="list-decimal list-inside ml-4">
            {exerciseDetails.instructions.map((instruction, index) => (
              <li key={index} className="mt-1 text-[12px]">{instruction}</li>
            ))}
          </ol>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Related Videos</h3>
          <VideoApi query={videoQuery} />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ShoulderDetails;