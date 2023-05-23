



import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import "../Styles/Player.css"
import ArrayOfImages from '../components/data.jsx';
import { Box, Center, Heading, Image } from '@chakra-ui/react';



const VideoPage = () => {
  const [currentVideo, setCurrentVideo] = useState(
        "https://www.youtube.com/watch?v=17R6UR9sjkE"
      );
      const [play, setplay] = useState(false);
      const [thumbnails, setThumbnails] = useState(ArrayOfImages);
    
      const ThumbnailClick = (videoUrl) => {
        console.log(videoUrl);
        setplay(true);
        setCurrentVideo(videoUrl);
      };
  return (
    <div>
     
      <Center position={"fixed"} top={2} ml={"20%"}>
       <ReactPlayer url={currentVideo} playing={play} playIcon />
     </Center>
     
      
        <div className="thumbnail_container">
          

        {thumbnails.map((el, index) => (
          <Box className='circles' onClick={() => ThumbnailClick(el.url)} key={index}>
            <Image
             w={"100px"}
             h={"100px"}
              borderRadius={"50%"}
              src={el.thumbnail}
              alt="thumbnail"
            />
          </Box>
        ))}


        </div>
      
    </div>
  );
};

export default VideoPage;
