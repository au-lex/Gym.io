import React from 'react'

const Shop = () => {

const ExercItems = [

    {
        "name": "Hand Dumble",
        "price": "500",
        "img": "https://htmldemo.net/zymzoo/zymzoo/assets/img/shop/1.jpg",
    
    },

{
    "name": "Fitness Slam Ball",
    "price": "500",
    "img": "https://htmldemo.net/zymzoo/zymzoo/assets/img/shop/2.jpg",

},
{
    "name": "Pushup Stands",
    "price": "500",
    "img": "https://htmldemo.net/zymzoo/zymzoo/assets/img/shop/7.jpg",

},
{
    "name": "Ab Roller",
    "price": "500",
    "img": "https://htmldemo.net/zymzoo/zymzoo/assets/img/shop/9.jpg",

},
{
    "name": "Mind Reader Kettlebell",
    "price": "500",
    "img": "https://htmldemo.net/zymzoo/zymzoo/assets/img/shop/5.jpg",

},
{
    "name": "Cycling Machine",
    "price": "500",
    "img": "https://htmldemo.net/zymzoo/zymzoo/assets/img/shop/11.jpg",

},
{
    "name": "Skipping Rope",
    "price": "500",
    "img": "https://htmldemo.net/zymzoo/zymzoo/assets/img/shop/10.jpg",

},
{
    "name": "Stamina Door Gyms",
    "price": "500",
    "img": "https://htmldemo.net/zymzoo/zymzoo/assets/img/shop/6.jpg",

},



]


  return (
    <>
    
    
<h1>GYM products</h1>
<p>We have very professional and exprt Instructor and they can very important to maintain
our health luptas sit fugit, sed quia cuuntur magni dolores some products</p>
    
    <section className="shop grid grid-cols-2">
        {ExercItems.map((shop,idx)=> (
<section className="shopCon">
    <img src={shop.img} alt="" />
    <p>{shop.name}</p>
    <p>${shop.price}</p>
</section>

        ))}
    </section>
    </>
  )
}

export default Shop