import { useDispatch, useSelector } from "react-redux"
import { toggleMenu } from "../Utils/AppSlice"
import { AiOutlineSearch } from "react-icons/ai";
import logo from '../logo2.png'
import { useEffect, useState } from "react";
import { YT_SEARCH_API } from "../Utils/Config";
import { cacheResults } from "../Utils/SearchSlice";
import { showSuggestion } from "../Utils/showSuggestions";
import { Link, useNavigate } from "react-router-dom";


const Header = () => {
  const [search,setSearch] =  useState("")
  const [suggest, setSuggest] = useState([])
  const [showSuggest, setShowsuggest] = useState(false)
  const navigate = useNavigate();
  const searchCache = useSelector(store=>store.search)

useEffect(()=>{
  const timer = setTimeout(()=>{
    if(searchCache[search]){
      getSearchResults(searchCache[search])
    }else{
    getSearchResults()}
  },200);

  return ()=>{
    clearTimeout(timer)
  };
},[search])

const showSuggestions = () => {
  dispatch(showSuggestion());
};

const getSearchResults = async() =>{
  const data = await fetch(YT_SEARCH_API + search)
  const json = await data.json()
 setSuggest(json[1])

  dispatch(cacheResults({
    [search]:json[1],
  }))

}

  const dispatch = useDispatch()
  const handleToggle=()=>{
    dispatch(toggleMenu())
  }
  return (
    <div className="flex  px-4  p-1 items-center justify-between shadow-lg">
        <div className="flex  items-center py-2 cursor-pointer">
            <img onClick={()=> handleToggle()} className="h-8 " alt="menu" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="/>

          
           <a href="/" className="flex items-center">
            <img className="h-10" alt="logo" src={logo}/> <span className="hidden sm:hidden md:hidden lg:block font-bold">YT Clone</span>
            </a>
            

        </div>
        <div className=" w-1/2 align-middle">
          <div>
            <input className="w-8/12 sm:px-4 px-0 sm:py-1 py-0 align-middle border border-gray-400 rounded-l-full" type="text" value={search} 
              onChange={(e) => {
                setSearch(e.target.value);
                showSuggestions();
            }}
            onScroll={()=>setShowsuggest(null)} 
            onFocus={() => setShowsuggest(true)} 
            onBlur={() => setShowsuggest(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                  navigate(
                      "/results?search_query=" + search
                  )
                  setShowsuggest(false);
              }
          }}/>

{showSuggest && suggest.length > 0 && (<div className="fixed bg-white w-2/6 border border-gray-100 rounded-lg shadow-lg">
              <ul>
                {suggest.map((s, index)=>
                ( <Link to={'/results?search_query=' + s}  key={index}
                onClick={(e) => {
                    setSearch(e.target.innerText);
                    setShowsuggest(true)
                }}>
                <li className=" px-2 py-1 flex items-center  hover:bg-gray-100"> <AiOutlineSearch/>   {s} </li></Link>))}
                 </ul>
            </div>)}

            <button className=" sm:px-4 px-2 sm:py-2 py-1  border align-middle border-gray-400 rounded-r-full" onClick={()=>{ navigate(
                      "/results?search_query=" + search
                  )}}><AiOutlineSearch/></button>
            </div>

            
        </div>
        
        <div className="">
            <img className="sm:h-10 h-7 " alt="user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&usqp=CAU"/>
        </div>
    </div>
  )
}

export default Header