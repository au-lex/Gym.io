import axios from 'axios';
import React, { useState } from 'react';

const ExerciseSearch = () => {
  const [exerciseName, setExerciseName] = useState('');
  const [exercises, setExercises] = useState([]);
  const [error, setError] = useState('');

  const fetchExercises = async () => {
    const options = {
      method: 'GET',
      url: `https://exercisedb.p.rapidapi.com/exercises/name/${exerciseName}`,
      params: {
        offset: '0',
        limit: '40'
      },
      headers: {
        'x-rapidapi-key': '0b742b75e4msh6068550cfef642bp19d8dbjsn99a277947685',
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      
      setExercises(response.data);
      console.log(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = (e) => {
    setExerciseName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchExercises();
  };

  return (
    <div className="container mx-auto mt-8">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center">
          <input
            type="text"
            className="border border-gray-300 rounded px-4 py-2 mr-2"
            placeholder="Enter exercise name..."
            value={exerciseName}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Search
          </button>
        </div>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-2">Search Results:</h2>
       
       
  <ul>
   {exercises && exercises.length > 0 ? (
  <ul>
    {exercises.map((exercise) => {
      console.log(exercise); // Check the structure of exercise object
      console.log(exercise.gifUrl); // Check the URL of gifUrl
      return (
        <li key={exercise.id} className="border-b border-gray-300 py-2">
          <div>
            <h3>{exercise.instructions}</h3>
            <h3>{exercise.name}</h3>
            <p>{exercise.bodyPart}</p>
            <img src={exercise.gifUrl} className="w-full h-[300px]" alt="" />
          </div>
        </li>
      );
    })}
  </ul>
) : (
  <p>No exercises found.</p>
)}



        </ul>
      </div>
    </div>
  );
};

export default ExerciseSearch;
