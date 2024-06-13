import React from "react";
import Footer from "../../Component/Footer";
import Header from "../../Component/Header";
import Loader from "../../Component/Loader";
import { Link } from "react-router-dom";

const Exercise = () => {
 const ExerciseList = [
   {
     name: "cardio",
     gifUrl: "https://res.cloudinary.com/dytlpvw1o/image/upload/v1718287619/ouOOCV11vN0z1e_gfl8nm.gif",
     routePath: "/cardio-exercises",
   },
   {
     name: "chest",
     gifUrl: "https://res.cloudinary.com/dytlpvw1o/image/upload/v1718287771/eBSRTt-i35eDHS_lcnwfm.gif",
     routePath: "/chest-exercises",
   },
   {
     name: "lower arms",
     gifUrl: "https://res.cloudinary.com/dytlpvw1o/image/upload/v1718288046/XF5qObahE4-u50_ywtqfy.gif",
     routePath: "/lower-arms-exercises",
   },
   {
     name: "lower legs",
     gifUrl: "https://res.cloudinary.com/dytlpvw1o/image/upload/v1718288336/y3i67yU7mtFSJD_ixv2fv.gif",
     routePath: "/lower-legs-exercises",
   },
   {
     name: "shoulders",
     gifUrl: "https://res.cloudinary.com/dytlpvw1o/image/upload/v1718288470/WtaBe8W1eD4zs8_s3kikt.gif",
     routePath: "/shoulders-exercises",
   },
   {
     name: "upper arms",
     gifUrl: "https://res.cloudinary.com/dytlpvw1o/image/upload/v1718288603/ZHaTtCgQ7Wkjxz_l41olb.gif",
     routePath: "/upper-arms-exercises",
   },
   {
     name: "upper legs",
     gifUrl: "https://res.cloudinary.com/dytlpvw1o/image/upload/v1718288779/wNoApkCbJnCrkW_rxdskw.gif",
     routePath: "/upper-legs-exercises",
   },
   {
     name: "waist",
     gifUrl: "https://res.cloudinary.com/dytlpvw1o/image/upload/v1718288929/rTpTgyUAivFAc-_bgxex4.gif",
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

