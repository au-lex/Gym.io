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
          'x-rapidapi-key': '0b742b75e4msh6068550cfef642bp19d8dbjsn99a277947685',
          'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(url, options);
        console.log('Response Status:', response.status); 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log('Fetched Data:', result); 
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
