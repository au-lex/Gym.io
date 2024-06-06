
import React from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import { FaShoppingCart } from 'react-icons/fa';
import Loader from '../Component/Loader';

const Shop = () => {

  const imageUrl = 'https://htmldemo.net/zymzoo/zymzoo/assets/img/photos/bg-page2.jpg';

  const ExercItems = [

    {
        "name": "Hand Dumble",
        "price": "500",
        "img": "https://htmldemo.net/zymzoo/zymzoo/assets/img/shop/1.jpg",
        "rating": 3.2
    
    },

{
    "name": "Fitness Slam Ball",
    "price": "450",
    "img": "https://htmldemo.net/zymzoo/zymzoo/assets/img/shop/2.jpg",
    "rating": 5

},
{
    "name": "Pushup Stands",
    "price": "250",
    "img": "https://htmldemo.net/zymzoo/zymzoo/assets/img/shop/7.jpg",
    "rating": 3.5

},
{
    "name": "Ab Roller",
    "price": "550",
    "img": "https://htmldemo.net/zymzoo/zymzoo/assets/img/shop/9.jpg",
    "rating": 3

},
{
    "name": "Mind Reader Kettlebell",
    "price": "360",
    "img": "https://htmldemo.net/zymzoo/zymzoo/assets/img/shop/5.jpg",
    "rating": 2

},
{
    "name": "Cycling Machine",
    "price": "1500",
    "img": "https://htmldemo.net/zymzoo/zymzoo/assets/img/shop/11.jpg",
    "rating": 5

},
{
    "name": "Skipping Rope",
    "price": "100",
    "img": "https://htmldemo.net/zymzoo/zymzoo/assets/img/shop/10.jpg",
    "rating": 4

},
{
    "name": "Stamina Door Gyms",
    "price": "500",
    "img": "https://htmldemo.net/zymzoo/zymzoo/assets/img/shop/6.jpg",
    "rating": 3.5
},

{
    "name": "Bluetooth Headphone",
    "price": "200",
    "img": "https://htmldemo.net/zymzoo/zymzoo/assets/img/shop/12.jpg",
    "rating": 3.5
},
{
    "name": "Workout Tank Top",
    "price": "300",
    "img": "https://htmldemo.net/zymzoo/zymzoo/assets/img/shop/8.jpg",
    "rating": 3.5
},
{
    "name": "Gym Personal Bag",
    "price": "150",
    "img": "https://htmldemo.net/zymzoo/zymzoo/assets/img/shop/3.jpg",
    "rating": 3.5
},
{
    "name": "Water Bottle",
    "price": "500",
    "img": "https://htmldemo.net/zymzoo/zymzoo/assets/img/shop/4.jpg",
    "rating": 3.5
},



]
  return (
    <>
    <Loader />
    <Header />

<section className="shopCon pt-[4rem]">



<figure className="img relative">
            <div className="bg-black  z-20 w-full inset-0  absolute opacity-80"></div>
            <img src={imageUrl} className='w-full h-[270px] object-cover' alt="" />
            <div className="  z-30 w-full inset-0  absolute ">

<section className="desc text-cener pt-[4rem] px-5">

            <h1 className='text-[2rem]    text-yellow-500 textcenter  font-bold uppercase s'>
          <span className='mx-1 text-slate-100'> OUR   </span>PODUCTS <br /> 
            </h1>
          <p className='text-white'>We have very professional and exprt Instructor and they can very important to maintain
our health luptas sit fugit, sed quia cuuntur magni dolores some products

</p>
         
</section>


            </div>
        </figure>





        <section className="shop grid grid-cols-2">
        {ExercItems.map((shop,idx)=> (
<section className="shopCon border p-2 shaow rounded-md ">
    <img src={shop.img} alt="" />
    {/* <StarRating rating={shop.rating}  /> */}
    <p className='my-1'> {shop.name.substring(0,15)}...</p>

    <span className='flex justify-between w-full py-2'>

    <p className='font-bold'>${shop.price}</p>

  

    <button  className=" bg-yellow-500  w-[30%] flex justify-center items-center text-white rounded-[4px] h-[1.5rem]">
                 <FaShoppingCart className="ml-2 " />
              </button>
    
    </span>
</section>

        ))}
    </section>

</section>

    <Footer/> 
    
    </>
  )
}

export default Shop