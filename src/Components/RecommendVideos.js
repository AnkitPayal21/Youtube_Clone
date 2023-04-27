import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { API_KEY } from '../Utils/Config'

const RecommendVideos = () => {

    const [recommend, setRecommend] = useState([])

    const[videoId] = useSearchParams()
    const Id = videoId.get('v')
    useEffect(()=>{
        getRecommendedVideos()
    },[])
    const getRecommendedVideos = async()=>{
        const data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&key=${API_KEY}&maxResults=40&relatedToVideoId=${Id}`)
        const json = await data.json()
        console.log(json.items)
        setRecommend(json.items)
        
    }
  return (
    <div className='m-3'>
        <h1 className='font-bold text-xl'>Recommend Videos</h1>
        {recommend.map((video)=>{
            return(
                <Link to={'/watch?v='+ video.id.videoId} key={ video.id.videoId}>
                <div className='flex flex-col sm:flex:col md:felx-col lg:flex-row m-3'>
                    <div>
                        <img className='h-30 sm:h-52 md:h-72 lg:h-24 rounded-lg' alt="recommended Video" src={video.snippet.thumbnails.medium.url}/>
                    </div>
                    <div className='ml-3'>
                        <h2 className='font-semibold'>{video.snippet.title.length >= 30
                            ? video.snippet.title.substring(0, 29) + "..."
                            : video.snippet.title}</h2> 
                        <p>{video.snippet.channelTitle}</p>
                    </div>
                </div>
                </Link>
            )
        })}
    </div>
  )
}

export default RecommendVideos