import axios from 'axios';
import React, { useState } from 'react';
import SearchCard from '../Exercise/ExerciseCards/SearchCard';
import Loader from "../../Component/Loader"
import { ToastContainer, toast } from 'react-toastify';
import LoaderApi from '../../Component/LoaderApi';

const ExerciseSearch = () => {
  const [exerciseName, setExerciseName] = useState('');
  const [exercises, setExercises] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchExercises = async () => {
    setIsLoading(true); 
    const lowerCaseExerciseName = exerciseName.toLowerCase();
    
   
    const options = {
      method: 'GET',
      url: `https://exercisedb.p.rapidapi.com/exercises/name/${lowerCaseExerciseName}`,
      params: {
        offset: '0',
        limit: '100'
      },
      headers: {
        'x-rapidapi-key': '0b742b75e4msh6068550cfef642bp19d8dbjsn99a277947685',
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      setExercises(response.data);
      setExerciseName(''); 
      setIsLoading(false); 
    } catch (error) {
      setError(error.message);
      setIsLoading(false); 
    }
  };

  const handleChange = (e) => {
    setExerciseName(e.target.value.toLowerCase()); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(exerciseName.trim() === "") {
      toast.error("input exercise name...")
      
      return;
      
          }
    fetchExercises();
  };

  return (
    <div className="co 8">
      <form onSubmit={handleSubmit}>
        <div className="flex itemcenter px-4 md:px-8 justify-center">
          <input
            type="text"
            className="border w-full border-gray-300  focus:outline-none focus:border-yellow-500  rounded px-4 py-2 mr-2"
            placeholder="Enter exercise name..."
            value={exerciseName}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
            disabled={isLoading} 
          >
            {isLoading ? 'Searching...' : 'Search'}
          </button>
        </div>
      </form>
      {/* {error && <p className="text-red-500 mt-2">{error}</p>} */}
      {isLoading ? (
        // <p className="text-center mt-4">Searching...</p> 
        <LoaderApi/>
      ) : (
        <div className="mt-4">
          {exercises && exercises.length > 0 ? (
            <ul className='md:grid md:grid-cols-2 lg:grid-cols-3 md:px-[1rem]'>
              {exercises.map((exercise, index) => (
                <SearchCard key={index} exercise={exercise} />
              ))}
            </ul>
          ) : (

            <div className="flex justify-center items-center h-64">
            <p className='text-center text-gray-600 text-xl md:text-2xl px-8 py-4 bg-gray-200 roundedlg shadw-md'>
              No exercises found. Please try another search.
            </p>
          </div>
          //   <p className='px-4 bg--500 font-bold capitalize  w text-red-500 text-center py-2 rounded'>
          //   No exercises found...
          // </p>
          )}
        </div>
      )}
    </div>
  );
};

export default ExerciseSearch;
