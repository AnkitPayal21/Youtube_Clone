import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { GET_LIST_OF_VIDEOS_API } from '../Utils/Config'
import SearchVideoCard from './SearchVideoCard'

const SearchPage = () => {
    const [searchResult, setSearchResult] = useState([])
    const [searchParams] = useSearchParams()
    const query = searchParams.get("search_query")

    const getVideoList = async () => {
        const data = await fetch(GET_LIST_OF_VIDEOS_API + query);
        const json = await data.json();
        setSearchResult(json.items);
        console.log(json.items)
    };
    useEffect(() => {
        getVideoList();
    }, [query]);
  return (
    <div>
        {searchResult && searchResult.map((searchResult, index)=>{
            return(
                
           <SearchVideoCard
           data={searchResult}
            key={index}
           />)
        })}
    </div>
  )
}

export default SearchPage