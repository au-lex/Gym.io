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
 const imageUrl = 'https://htmldemo.net/zymzoo/zymzoo/assets/img/testimonial/1.jpg';
 return (
   <>
     <Loader />
     <Header />
     {/* <main className="generalConatiner w-full exerciseDb flex items-center  bg-black   pt-[6rem]">
       <section className=" w-full pb-[2rem] ">
        <div className="inp px-3 mb-2" >

        <input type="text" 
        placeholder="Search Exercises..."
        className="search w-full  rounded-[5px] p-2 placeholder:text-yellow-500 bg-transparent border text-yellow-500 border-yellow-500" />
         <h1 className="text-[1.2rem]    mt-4 text-yellow-500 textcenter  font-bold uppercase s">
           Filter<span className="mx-1 text-slate-100"> Exercises </span>
           <br />
         </h1>
         <p className="text-white text-[12px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur cum quos pariatur,
           similique iusto blanditiis sequi debitis mollitia accusamus architecto.</p>
        </div>
         <section className="container grid grid-cols-2 md:grid-cols-4 ">
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
     </main> */}



<section className="">


<figure className="img relative">
    <div className="bg-black  z-20 w-full inset-0  absolute opacity-80"></div>
    <img src={imageUrl} className='w-full h-[980px] object-cover' alt="" />
    <div className="  z-30 w-full inset-0  absolute mt-[6rem] ">

    <section className=" w-full pb-[2rem] ">
        <div className="inp px-3 mb-2" >

        <input type="text" 
        placeholder="Search Exercises..."
        className="search w-full  rounded-[5px] p-2 placeholder:text-yellow-500 bg-transparent border text-yellow-500 border-yellow-500" />
         <h1 className="text-[1.2rem]    mt-4 text-yellow-500 textcenter  font-bold uppercase s">
           Filter<span className="mx-1 text-slate-100"> Exercises </span>
           <br />
         </h1>
         <p className="text-white text-[12px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur cum quos pariatur,
           similique iusto blanditiis sequi debitis mollitia accusamus architecto.</p>
        </div>
         <section className="container grid grid-cols-2 md:grid-cols-4 ">
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


    </div>
</figure>
</section>
     <Footer />
   </>
 );
};

export default Exercise;

