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
          'x-rapidapi-key': '46d1589c36mshc9555639a5d536dp1d8098jsncb48101972a8',
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
