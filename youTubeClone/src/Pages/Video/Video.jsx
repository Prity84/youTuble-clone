import React from 'react'
import './Video.css'
import PlayVideo from '../../Component/PlayVideo/PlayVideo'
import Recomanded from '../../Component/Recomanded/Recomanded'
import { useParams } from 'react-router-dom'

const Video = () => {
  const [videoId, categoryId] = useParams();
  return (
    <div className='play-container'>
        <PlayVideo videoId={videoId}/>
        <Recomanded/>
      
    </div>
  )
}

export default Video
