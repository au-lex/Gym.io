import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const ShopDetails = () => {
    const [ShopDetails, SetShopDetails] = useState([]);


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

    // const shop = ExercItems.find(item => item.name === id);

    const {id} = useParams();

    const shop = ExercItems.find(item => item.name === id )



  return (
    <div>


<div>
      <h1>{shop.name}</h1>
      <img src={shop.img} alt={shop.name} />
      <p>Price: ${shop.price}</p>
      <p>Rating: {shop.rating}</p>
    </div>
    </div>
  )
}

export default ShopDetails