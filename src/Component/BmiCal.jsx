import React, {useState} from 'react'

const BmiCal = () => {

  const [Weight, setWeight] = useState("");
  const [Height, setHeight] = useState("");
  const [Bmi, setBmi] = useState("");
  const [Status, setStatus] = useState("");





  const calculateBMi = () => {

    if (Weight <= 0 || Height <= 0) {
      alert("Please enter valid weight and height");
      return;
    }

    const height_in_Meters = Height/100;
    const bmiValue = (Weight/(height_in_Meters * height_in_Meters)).toFixed(2);
    setBmi(bmiValue);
    if (bmiValue < 18.5) setStatus("UnderWeight");
    else if (bmiValue >= 18.5 && bmiValue < 25) setStatus("Normal");
    else if (bmiValue >= 25 && bmiValue < 30) setStatus("OverWeight");
    else setStatus("Obese");
  }

    const imageUrl = 'https://htmldemo.net/zymzoo/zymzoo/assets/img/testimonial/1.jpg';
  return (
    <>
    
    
    <section className="bmi mt-[4rem]">


        <figure className="img relative">
            <div className="bg-black  z-20 w-full inset-0  absolute opacity-80"></div>
            <img src={imageUrl} className='w-full h-[600px] object-cover' alt="" />
            <div className="  z-30 w-full inset-0  absolute ">

<section className="desc text-center pt-12">

            <h1 className='text-[2rem]    text-yellow-500 text-center  font-bold uppercase s'>
          <span className='mx-1 text-slate-100'> BMI  </span>CALCULATOR <br /> 
            </h1>
          <p className='text-white'>BMI is a reliable guide to estimate the healthy weight range based on height, wight and age

</p>
         
</section>

<section className="input px-4 mt-8">
<input
        className="border-b border-white w-full text-white p-2 my-4   bg-transparent focus:border-yellow-500 outline-none"
        type="number"
        value={Height}
        onChange={(e) => setHeight(e.target.value)}
        placeholder="Height/Cm"
      />

<input
        className="border-b border-white w-full text-white p-2 my-4   bg-transparent focus:border-yellow-500 outline-none"
        type="number"
        placeholder="Weight/kg"
        value={Weight}
        onChange={(e) => setWeight(e.target.value)}
      />
<input
        className="border-b border-white w-full text-white p-2 my-4   bg-transparent focus:border-yellow-500 outline-none"
        type="text"
        placeholder="Age"
      />
<input
        className="border-b border-white w-full text-white p-2 my-4   bg-transparent focus:border-yellow-500 outline-none"
        type="text"
        placeholder="Male/Female"
      />
</section>

<section className="cal flex px-4 text-white justify-between mt-3rem]">
    <div onClick={calculateBMi} className="btnCalc w-full mt-6">
        <button className='bg-yellow-500 rounded-full w-[70%] h-[3rem]'>Calculate</button>
    </div>
    <div className="score">
        <h1 className='text-[3rem]'>{Bmi}</h1>
    </div>
</section>

{

  Bmi && (
    <div className='bg-yellow-500 p-2 mt-4 flex justify-center font-semibold text-white'>
   
    <p>Status: {Status}</p>
  </div>
  )
}
            </div>
        </figure>
        </section>
        
        
        </>
  )
}

export default BmiCal