import React, { useState, useEffect } from 'react';
import { Pagination } from 'antd';
import ExerciseData from "../../../Hooks/ApiData";
import Header from "../../../Component/Header";
import Footer from "../../../Component/Footer";
import Loader from "../../../Component/Loader";
import ExerciseCard from '../ExerciseCards/ExerCard';

const Cardio = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  const { data, isLoading, error } = ExerciseData(`/bodyPart/cardio?limit=${pageSize}&offset=${(currentPage - 1) * pageSize}`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

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

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Header />
      <div className="bg-black pb-[2rem] pt-[6rem]">
        {data.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
        <div className="flex justify-center px-[.8rem] mt-8">
          <Pagination
            current={currentPage}
            total={29}
            pageSize={pageSize}
            onChange={handlePageChange}
            showSizeChanger={false}
            className="text-white bg-yellow-500 rounded-[10px] p-2 w-full flex justify-center"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cardio;