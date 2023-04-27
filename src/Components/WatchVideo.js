import React, { useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { hideMenu } from '../Utils/AppSlice'
import Comments from './Comments'
import LiveChat from './LiveChat'
import RecommendVideos from './RecommendVideos'
import Details from './Details'


const WatchVideo = () => {
  const[search] = useSearchParams()
  // const [comments, setComments] = useState(false)

  const Id = search.get('v')
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(hideMenu())
  })
  return (

    <div className='flex flex-col sm:flex-col lg:flex-row m-5 justify-between'>
    <div>
        <iframe className='w-[290px] sm:w-[390px] md:w-[720px] lg:w-[1100px] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px] rounded-lg'  src={`https://www.youtube.com/embed/${Id}?autoplay=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <Details/> 
      <Comments/>
       
    </div>
    <div >
      <span><LiveChat/></span>
       <span><RecommendVideos/></span></div>
   
    
    </div>



  



  )
}

export default WatchVideo