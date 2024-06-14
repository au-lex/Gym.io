import React, { useState, useEffect } from 'react';

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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {videos.length > 0 ? (
        <div className="grid grid-cols-1 gap-4">
          {videos.map((video, index) => (
            <div key={index} className="block p-2 border rounded-lg shadow-md hover:bg-gray-100">
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${video.video.videoId}`}
                title={video.video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p className="text-gray-800 font-semibold mt-2">{video.video.title}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No videos found</p>
      )}
    </div>
  );
};

export default VideoApi;
