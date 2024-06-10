import { useState, useEffect } from 'react';

const ExerciseData = (endpoint = '') => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://exercisedb.p.rapidapi.com/exercises${endpoint}`;
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': 'c2a92f4c2fmsh97fd0a2ef1aa891p15c2e1jsnbd09a8612347',
          'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.text();
        setData(result);
        setIsLoading(false);
        console.log('Fetched data:', result); 
      } catch (err) {
        setError(err);
        setIsLoading(false);
        console.error('Error fetching data:', err); 
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, isLoading, error };
};

export default ExerciseData;


