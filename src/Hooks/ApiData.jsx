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
          'x-rapidapi-key': '2e8ddde7f5msh8990a7f0b853cdap1ef2fcjsn12fbcc35e36f',
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
