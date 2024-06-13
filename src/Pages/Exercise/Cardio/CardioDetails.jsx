import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Loader from '../../../Component/Loader';

const CardioDetails = () => {
    const [exerciseDetails, setExerciseDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const {id} = useParams();



    useEffect(() => {
        const fetchExerciseDetails = async () => {
          try {
            const response = await fetch(`/exercise/${id}`);
            const data = await response.json();
            
            setExerciseDetails(data);
            setIsLoading(false);
          } catch (err) {
            setError(err);
            setIsLoading(false);
          }
        };
    
        fetchExerciseDetails();
      }, [id]);
    

    if (isLoading) {
        return <Loader />;
      }
    
      if (error) {
        return <div className="text-red-500 text-center py-8">Error: {error.message}</div>;
      }
  return (
    <div>
      <h2>{exerciseDetails.name}</h2>
      <img src={exerciseDetails.gifUrl} alt={exerciseDetails.name} />
      <p>Target Muscle: {exerciseDetails.target}</p>
      <p>Secondary Muscles: {exerciseDetails.secondaryMuscles.join(', ')}</p>
    
    </div>
  );
}

export default CardioDetails