import React from 'react'
import video from '../../assets/college-video.mp4'
import { useState, useRef } from 'react'

const VideoPlayer = ({playState, setPlayState}) => {

    const player = useRef(null);
    
    const closePlayer = (e) => {
        if (e.target === player.current) {
            setPlayState(false);
        }
    }

  return (
    <div className={`video-player fixed top-0 left-0 w-[100%] h-[100%] bg-video z-100 flex items-center justify-center ${playState ? '' : 'hidden'}`} ref={player} onClick={closePlayer}>
        <video src={video} autoPlay muted controls className='w-[90%] max-w-[900px] h-auto border-[4px] border-black'></video>
        
    </div>
  )
}

export default VideoPlayer