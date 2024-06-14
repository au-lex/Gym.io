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
        console.log('Response Status:', response.status); // Log the response status

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log('Fetched Data:', result); // Log the fetched data
        setData(result);
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, isLoading, error };
};

export default ExerciseData;