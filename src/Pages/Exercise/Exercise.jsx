import React from "react";
import Footer from "../../Component/Footer";
import Header from "../../Component/Header";
import Loader from "../../Component/Loader";

const Exercise = () => {
  const ExerciseList = [
    {
      name: "cardio",
    },
    {
      name: "chest",
    },
    {
      name: "lower arms",
    },
    {
      name: "lower legs",
    },
    {
      name: "shoulders",
    },
    {
      name: "upper arms",
    },
    {
      name: "upper legs",
    },
    {
      name: "waist",
    },
  ];
  return (
    <>
    <Loader />
      <Header />

      <main className="generalConatiner w-full exerciseDb flex items-center  bg-black h-screen  pt-[6rem]">

     

      <section className=" w-full">

        <h2 className="text-white">choose Amazing Exercise </h2>


        <section className="container grid grid-cols-2 md:grid-cols-4 px-[.5rem]">
          {ExerciseList.map((exer) => (
            <div className="border-2 border-yellow-500 rounded-[10px] h-[10rem] m-2 ">{exer.name}</div>
          ))}
        </section>
      </section>

      </main>

      <Footer />
    </>
  );
};

export default Exercise;
