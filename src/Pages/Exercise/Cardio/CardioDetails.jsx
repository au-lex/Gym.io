import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../../Component/Loader';
import ExerciseData from '../../../Hooks/ApiData';
import VideoApi from '../../../Hooks/VideoApi'; // Adjust the path accordingly

const CardioDetails = () => {
  const { data, isLoading, error } = ExerciseData("/bodyPart/cardio?limit=40&offset=0");
  const { id } = useParams();
  const [exerciseDetails, setExerciseDetails] = useState(null);

  useEffect(() => {
    if (data) {
      const exercise = data.find(ex => ex.id === id);
      setExerciseDetails(exercise);
    }
  }, [data, id]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div className="text-red-500 text-center py-8">Error: {error.message}</div>;
  }

  if (!exerciseDetails) {
    return <div className="text-red-500 text-center py-8">Exercise not found</div>;
  }

  return (
    <div className="max-w-xl mx-auto bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">{exerciseDetails.name}</h2>
      <img
        src={exerciseDetails.gifUrl}
        alt={exerciseDetails.name}
        className="w-full h-64 object-cover mb-4 rounded-lg"
      />
      <p className="text-gray-700 mb-2"><strong>Target Muscle:</strong> {exerciseDetails.target}</p>
      <p className="text-gray-700 mb-2"><strong>Equipment:</strong> {exerciseDetails.equipment}</p>
      <p className="text-gray-700 mb-2"><strong>Secondary Muscles:</strong> {exerciseDetails.secondaryMuscles.join(', ')}</p>
      <div className="text-gray-700 mb-4">
        <strong>Instructions:</strong>
        <ol className="list-decimal list-inside ml-4">
          {exerciseDetails.instructions.map((instruction, index) => (
            <li key={index} className="mt-1">{instruction}</li>
          ))}
        </ol>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Related Videos</h3>
        <VideoApi query={exerciseDetails.name} />
      </div>
    </div>
  );
}

export default CardioDetails;
