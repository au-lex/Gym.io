import React, { useState, useEffect } from 'react';
import { Pagination } from 'antd';
import ExerciseData from "../../../Hooks/ApiData";
import Header from "../../../Component/Header";
import Footer from "../../../Component/Footer";
import Loader from "../../../Component/Loader";
import ExerciseCard from '../ExerciseCards/ExerCard4';
import { Link } from 'react-router-dom';
import { IoReturnUpBack } from "react-icons/io5";
import { BsChevronLeft } from 'react-icons/bs';

const LowerLegs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  const { data, isLoading, error } = ExerciseData(`/bodyPart/lower legs?limit=${pageSize}&offset=${(currentPage - 1) * pageSize}`);

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
      <div className="bg-lack pb-[2rem] pt-[6rem]">

      <div className="back px-2 md:px-[2.5rem] pb-4">
      <Link to="/exercise" className="flex items-center textwhite hover:text-gray-300">
      <BsChevronLeft className="text-[12px] mr-" />
        <span className="text-base font-edium">Back</span>
      </Link>
    </div>

  <section className="  md:grid md:grid-cols-2 lg:grid-cols-3 md:px-[2rem]">

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
        </section >
      </div>
      <Footer />
    </>
  );
};

export default LowerLegs;