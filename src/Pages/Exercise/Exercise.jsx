import React from "react";
import Footer from "../../Component/Footer";
import Header from "../../Component/Header";
import Loader from "../../Component/Loader";
import { Link } from "react-router-dom";

const Exercise = () => {
 const ExerciseList = [
   {
     name: "cardio",
     gifUrl: "https://v2.exercisedb.io/image/kP7PzqOXAIsfeH",
     routePath: "/cardio-exercises",
   },
   {
     name: "chest",
     gifUrl: "https://v2.exercisedb.io/image/Bi8xVYeWIyqo56",
     routePath: "/chest-exercises",
   },
   {
     name: "lower arms",
     gifUrl: "https://v2.exercisedb.io/image/XbgQTNDpKKevml",
     routePath: "/lower-arms-exercises",
   },
   {
     name: "lower legs",
     gifUrl: "https://v2.exercisedb.io/image/-EA4vBhetgIhoR",
     routePath: "/lower-legs-exercises",
   },
   {
     name: "shoulders",
     gifUrl: "https://v2.exercisedb.io/image/ip1CORTGGkf8KC",
     routePath: "/shoulders-exercises",
   },
   {
     name: "upper arms",
     gifUrl: "https://v2.exercisedb.io/image/hwzS8KCAazlaDM",
     routePath: "/upper-arms-exercises",
   },
   {
     name: "upper legs",
     gifUrl: "https://v2.exercisedb.io/image/vKAWsPzehvwbAa",
     routePath: "/upper-legs-exercises",
   },
   {
     name: "waist",
     gifUrl: "https://v2.exercisedb.io/image/UcvY9fRgNeiV4m",
     routePath: "/waist-exercises",
   },
 ];

 return (
   <>
     <Loader />
     <Header />
     <main className="generalConatiner w-full exerciseDb flex items-center  bg-black   pt-[6rem]">
       <section className=" w-full pb-[2rem] ">
         <h1 className="text-[1.2rem]  pl-4   mb-4 text-yellow-500 textcenter  font-bold uppercase s">
           choose<span className="mx-1 text-slate-100"> Exercises.... </span>{" "}
           <br />
         </h1>
         <section className="container grid grid-cols-2 md:grid-cols-4 px-[.5rem]">
           {ExerciseList.map((exer) => (
             <Link
               to={exer.routePath}
               key={exer.name}
               className="border-2 border-yellow-500 rounded-[10px] bg-white h-[10rem] overflow-hidden m-2"
             >
               <figure className="imgCon relative ">
                 <img
                   src={exer.gifUrl}
                   alt="img-exer"
                   className="w-full h-[156px] rounded-[10px] object-cover"
                 />
                 <figcaption className=" absolute  bottom-0">
                   <h1 className="text-white bg-yellow-500 text-[12px] capitalize p-1">
                     {exer.name}
                   </h1>
                 </figcaption>
               </figure>
             </Link>
           ))}
         </section>
       </section>
     </main>
     <Footer />
   </>
 );
};

export default Exercise;

