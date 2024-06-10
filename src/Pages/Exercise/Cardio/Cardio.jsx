import React from 'react';
import ExerciseData from "../../../Hooks/ApiData";
import Header from "../../../Component/Header";
import Footer from "../../../Component/Footer";
import Loader from "../../../Component/Loader";
import ExerciseCard from '../ExerciseCards/ExerCard'; 

const Cardio = () => {
  const { data, isLoading, error } = ExerciseData("/bodyPart/cardio?limit=40&offset=0");

  if (isLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center py-8">Error: {error.message}</div>;
  }

  const parsedData = JSON.parse(data);

  return (
    <>
      <Header />
      <div className="bg-black pb-[2rem] pt-[6rem]">
        {parsedData.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Cardio;