import React from 'react'
import { FaRegCalendarAlt } from "react-icons/fa";


const GymBlog = () => {


    const gymBlogPosts = [
        {
          title: "The Ultimate Full-Body Workout",
          description: "Push your limits with this intense full-body workout routine. Targeting all major muscle groups, this high-intensity workout will challenge you and help you achieve your fitness goals.",
          venue: "Fitness Unlimited Gym",
          date: "April 15, 2024",
          image: "https://htmldemo.net/zymzoo/zymzoo/assets/img/blog/1.jpg"
        },
        {
          title: "Mastering the Art of Weight Training",
          description: "Learn proper weight training techniques to build strength and muscle mass safely and effectively. This comprehensive guide covers everything from form to programming.",
          venue: "PowerHouse Gym",
          date: "March 20, 2024",
          image: "https://htmldemo.net/zymzoo/zymzoo/assets/img/blog/3.jpg"
        },
        {
          title: "Yoga for Beginners: A Gentle Introduction",
          description: "Discover the benefits of yoga and learn the basics in this beginner-friendly class. Perfect for those new to yoga or looking to improve their flexibility and mindfulness.",
          venue: "Zen Yoga Studio",
          date: "May 5, 2024",
          image: "https://htmldemo.net/zymzoo/zymzoo/assets/img/gallery/g3.png"
        },
        {
          title: "High-Intensity Interval Training (HIIT) Challenge",
          description: "Push your cardiovascular fitness to the next level with this intense HIIT workout. Get ready to sweat and burn calories with this challenging full-body routine.",
          venue: "Fitness Factory Gym",
          date: "April 28, 2024",
          image: "https://htmldemo.net/zymzoo/zymzoo/assets/img/blog/2.jpg"
        },
        // {
        //   title: "Nutrition for Optimal Performance",
        //   description: "Learn how to fuel your body for peak performance with this comprehensive guide to sports nutrition. Discover the best foods and supplements for your fitness goals.",
        //   venue: "Online Webinar",
        //   date: "June 1, 2024",
        //   image: "https://example.com/sports-nutrition.jpg"
        // }
      ];

  return (
    <>

    <section className="gymblo mt-[5rem] pb-[2rem] md:px-8  px-4">

<section className="title text-center md:px-[20rem]  ">
           
<h1 className='text-[2rem]    text-slate-900 font-bold uppercase s'>
          <span className=' text-yellow-500'>LATEST  </span>BLOG POST<br />
            </h1>

<p className='my-4 '>Gym classes dolor sit amet, consectetur adipiscing elit, sed do eiod tempor
didunt ut labore et dolore m et dolore magna aliqua minim niam</p>

</section>

<section className="gymblogCon grid md:grid-cols-4 grid-cols-1 md:space-x-4
">

        
        {gymBlogPosts.map((blog, index) => (

          
          
          <figure key={index} className="bloginmg mt-[1.8rem]">
    <img src={blog.image} className='rounded-[10px] md:object-cover md:h-[200px]' alt="" />
    <p className='flex text-[15px] mb-2 mt-3  '><FaRegCalendarAlt
      className='text-[18px] text-yellow-500 mr-2' />{blog.date} </p>
    <h1 className='text-[1.4rem]  font-medium md:text-[1rem] leading-[30px] md:leading-[15px] mb-2'>{blog.title}</h1>
    <p className='text-[12px] font-semibold'>{blog.venue}</p>
    <p className='text-[12px]'>{blog.description.substring(0,75)}.... 
    <span className='text-yellow-500 font-semibold'>Read More</span></p>
</figure>
        ))
        
      }
      </section>
    </section>
    
    
    </>
  )
}

export default GymBlog