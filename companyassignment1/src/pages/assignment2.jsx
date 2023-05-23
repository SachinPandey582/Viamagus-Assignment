import { Box, Center } from "@chakra-ui/react";
import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
const ReactPlayer1 = () => {
    const [currentVideo, setCurrentVideo] = useState('https://www.youtube.com/watch?v=17R6UR9sjkE');
    const [thumbnails, setThumbnails] = useState([
        {
          thumbnail: 'https://i.ytimg.com/vi/17R6UR9sjkE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCcFiycu1w7RXlSArPkBdyKC8qqcg',
          url: 'https://www.youtube.com/watch?v=17R6UR9sjkE',
        },
        {
          thumbnail: 'https://i.ytimg.com/vi/b4R2qtmvbqc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDMKMdH9F1OgaRlR2c_L3Blm81Nmg',
          url: 'https://www.youtube.com/watch?v=b4R2qtmvbqc',
        },
        {
          thumbnail: 'https://i.ytimg.com/vi/yMEoDk2M7M0/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLBZOpOLVcTRQaqQHcrHWAW2ZkI9RA  ',
          url: 'https://www.youtube.com/watch?v=yMEoDk2M7M0',
        },
        {
          thumbnail: '	https://i.ytimg.com/vi/XPYLlrZ9UZs/hqdefault.jpg?s…CBlKGIwDw==&rs=AOn4CLDXnp58zSzRd13EgDjdzrY6cOgH0Q',
          url: 'https://www.youtube.com/watch?v=XPYLlrZ9UZs',
        },
       
        // Add more objects for additional videos
      ]);
  
    const handleThumbnailClick = (videoUrl) => {
        console.log(videoUrl)
      setCurrentVideo(videoUrl);
    };
  return (
    <div>

        {/* if i pass them as sigle url then its normal and when i did the array they became
        a playlist  */}
      <Center>
        <ReactPlayer url={
    currentVideo
    }  playIcon/>
      </Center>
      <Box>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          overflowX: 'scroll',
          marginTop: '20px',
        }}
      >
        {thumbnails.map((thumbnailUrl, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '300px',
              height: '150px',
              borderRadius: '50%',
              border: '2px solid #000',
              margin: '0 10px',
              cursor: 'pointer',
            }}
            onClick={() => handleThumbnailClick(thumbnailUrl.url)}
          >
            <img
              src={thumbnailUrl.thumbnail}
              alt={`Thumbnail ${index + 1}`}
              style={{ width: '100%', height: '150px', borderRadius: '50%' }}
            />
          </div>
        ))}
      </div>
      </Box>
    </div>
  );
};

export default ReactPlayer1;
