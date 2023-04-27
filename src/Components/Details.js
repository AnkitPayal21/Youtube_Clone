import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { abbreviateNumber } from 'js-abbreviation-number'
import { API_KEY } from '../Utils/Config'


const Details = (data) => {
    const [discripition, setDiscripition] = useState('')
    const [title, setTitle] = useState('')
    const[videoId] = useSearchParams()
    const Id = videoId.get('v')

    useEffect(()=>{
        getTitle()
        getDiscripition()
    },[title])

  

    const getDiscripition = async()=>{
        const data = await  fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${API_KEY}&id=${Id}`)
        const json = await data.json()
        setDiscripition(json.items[0])
    }
    const getTitle = async()=>{
        const data = await  fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${API_KEY}&id=${Id}`)
        const json = await data.json()
        setTitle(json.items[0])
    }
  return (
    <div>
        <div>
            <h2 className='font-bold text-xl my-8 mx-4'>{title?.snippet?.localized?.title}</h2>
        </div>
        <div className='w-[290px] sm:w-[390px] md:w-[720px] lg:w-[1100px] bg-gray-200 m-3 p-2'>
            
            <h4 className='font-bold'>{abbreviateNumber(discripition?.statistics?.viewCount)} views  &nbsp;  &nbsp; <span>{abbreviateNumber(discripition?.statistics?.likeCount)} likes</span></h4>
            <h4>{discripition?.snippet?.localized?.description}</h4>
        </div>
    </div>
  )
}

export default Details