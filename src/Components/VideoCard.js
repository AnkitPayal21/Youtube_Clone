import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { YT_VIDEO_API } from '../Utils/Config'
import { abbreviateNumber } from 'js-abbreviation-number'


const VideoCard = () => {

    const [video, setvideo] =useState([])

    useEffect(()=>{
        getVideos()
    },[])

    const getVideos = async()=>{
        const data = await fetch(YT_VIDEO_API)
        const json = await data.json()
        setvideo(json.items)
    }

  return (
    <div className="flex flex-wrap justify-center">
        {video.map((videoData)=>{
            return(
           <Link to={'/watch?v='+ videoData.id} key={videoData.id}> <div  className=" m-4 p-2   w-72 " >
                <img className='rounded-2xl' alt='video' src={videoData?.snippet?.thumbnails?.medium?.url}/>
                <h3 className='font-bold'>{videoData?.snippet?.title}</h3>
                <h4>{videoData?.snippet?.channelTitle}</h4>
                <p>{abbreviateNumber(videoData?.statistics?.viewCount)}views <span></span></p>
            </div> </Link>
            )
        })}
    </div>
  )
}

export default VideoCard