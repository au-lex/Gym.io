// src/Loader.js

import React, { useState, useEffect } from 'react';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    const timeout = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`flex items-center bottom-0 bg-slate-800 left-0 right-0 fixed
     overflow-x-hidden top-0 w-full   justify-center z-50 h-screen ${isLoading ? 'block' : 'hidden'}`}>
     
     <div class="blobs">
	<div class="blob-center"></div>
	<div class="blob"></div>
	<div class="blob"></div>
	<div class="blob"></div>
	<div class="blob"></div>
	<div class="blob"></div>
	<div class="blob"></div>
</div>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"></feColorMatrix>
      <feBlend in="SourceGraphic" in2="goo"></feBlend>
  	</filter>
  </defs>
</svg>
    </div>
  );
};

export default Loader;