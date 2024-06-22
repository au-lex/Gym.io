import React, { useState } from 'react';
import axios from 'axios';

const ExerciseSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [exercises, setExercises] = useState([]);

  const searchExercise = async () => {
    const options = {
      method: 'GET',
      url: `https://exercisedb.p.rapidapi.com/exercises/name/${searchTerm}`,
      params: { limit: '10' },
      headers: {
        'x-rapidapi-key': '0b742b75e4msh6068550cfef642bp19d8dbjsn99a277947685',
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      setExercises(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 mr-2"
          placeholder="Enter exercise name"
        />
        <button
          onClick={searchExercise}
          className="bg-yellow-900 text-white p-2 rounded"
        >
          Searchk
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {exercises.map((exercise) => (
          <div key={exercise.id} className="border p-4 rounded">
            <h2 className="text-xl font-bold mb-2">{exercise.name}</h2>
            <img
              src={exercise.gifUrl}
              alt={exercise.name}
              className="w-full h-64 object-cover mb-2"
            />
            <p><strong>Body Part:</strong> {exercise.bodyPart}</p>
            <p><strong>Equipment:</strong> {exercise.equipment}</p>
            <p><strong>Target:</strong> {exercise.target}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExerciseSearch;