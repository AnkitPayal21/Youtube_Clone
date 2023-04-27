import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { YT_COMMENTS } from '../Utils/Config'

const Comments = () => {
    const [comment, setComment] = useState([])
    const [search] = useSearchParams()
    const Id = search.get('v')
    useEffect(()=>{
        getComments()
    })
    const getComments= async()=>{
        const data = await fetch(YT_COMMENTS + Id)
        const json = await data.json()
        setComment(json.items)
    }

  return (
    <div className='w-[290px] sm:w-[390px] md:w-[720px] lg:w-[1100px] bg-gray-100 rounded-xl p-2 hidden sm:hidden md:hidden lg:block' >
         <div>
        <h1 className='font-bold text-2xl'>Comments:</h1>
        {comment.map((video)=>{
            return(
                <div key={video.id} className="flex m-3 bg-gray-200 p-2">
                    <div className='rounded-full'><img src={video?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl} alt="user" className='rounded-full'/></div>
                    <div className='ml-3'>
                        <h2 className='font-semibold'>{video?.snippet?.topLevelComment?.snippet?.authorDisplayName}</h2>
                        <h3>{video?.snippet?.topLevelComment?.snippet?.textOriginal}</h3></div>
                </div>
            )
        })}
        </div>
    </div>
  )

}



export default Comments