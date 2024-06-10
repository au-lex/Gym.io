import React from 'react';

const ExerciseCard = ({ exercise }) => {
  return (
    <div className="mb-3 mx-2 flex space-x-4 border bg-white p-2 rounded-[10px] overflow-hidden">
      <figure className="imgCon border rounded-[5px] p-2 border-yellow-500">
        <img
          src={exercise.gifUrl}
          alt="img"
          className="w-full h-[200px] object-cover"
        />
      </figure>
      <figcaption className="desc">
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
          <button className="bg-yellow-500 text-white w-full p-2 rounded-[5px]">
            More info..
          </button>
        </div>
      </figcaption>
    </div>
  );
};

export default ExerciseCard;