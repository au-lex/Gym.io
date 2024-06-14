import React, { useState, useEffect } from 'react';
import Loader from "../Component/Loader"
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

const VideoApi = ({ query }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      const url = `https://youtube-search-and-download.p.rapidapi.com/search?query=${encodeURIComponent(query)}&hl=en&gl=US&type=v`;
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': 'c2a92f4c2fmsh97fd0a2ef1aa891p15c2e1jsnbd09a8612347',
          'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setVideos(result.contents); 
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    if (query) {
      fetchVideos();
    }
  }, [query]);

  if (loading) {
    return <> <Loader /></>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (

    <>
    
    <div>
      {videos.length > 0 ? (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={20}
          slidesPerView={1.1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        >
          {videos.map((video, index) => (
            <SwiperSlide key={index}>
              <div className="block p-1 border">
                <iframe
                  width="100%"
                  height="215"
                  src={`https://www.youtube.com/embed/${video.video.videoId}`}
                  title={video.video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                {/* <p className="text-gray-800 text-[12px] mt-2">{video.video.title}</p> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p>No videos found</p>
      )}
    </div>


    
 

    </>
  );
};

export default VideoApi;
