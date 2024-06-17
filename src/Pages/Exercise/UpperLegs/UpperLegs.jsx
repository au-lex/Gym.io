import React, { useState, useEffect } from 'react';
import { Pagination } from 'antd';
import ExerciseData from "../../../Hooks/ApiData";
import Header from "../../../Component/Header";
import Footer from "../../../Component/Footer";
import Loader from "../../../Component/Loader";
import ExerciseCard from '../ExerciseCards/ExerCard8';
import { Link } from 'react-router-dom';
import { IoReturnUpBack } from "react-icons/io5";

const Waist = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  const { data, isLoading, error } = ExerciseData(`/bodyPart/upper legs?limit=${pageSize}&offset=${(currentPage - 1) * pageSize}`);

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

      <div className="back px-2 pb-4">

<Link to="/exercise" className=' bg-yellow-5 text-white  shadow text-[1.3rem] borderyellow-100 w-[2rem] border-2 h-[2rem] 
  rounded-full flex justify-center items-center'>  <IoReturnUpBack /></Link>
  </div>
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

export default Waist;