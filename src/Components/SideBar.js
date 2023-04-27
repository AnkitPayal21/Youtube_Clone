
import { AiFillHome, AiFillFire, AiOutlineCloudUpload, AiFillTrophy, AiOutlineBulb } from "react-icons/ai";
import { FaMusic, FaGamepad, FaRegNewspaper} from "react-icons/fa";
import { HiChartBar} from "react-icons/hi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const SideBar = () => {
   const isMenuOpen = useSelector(store=> store.app.isMenuOpen)

  return !isMenuOpen ? null : (
    <div className="m-3 p-3 shadow-lg w-1/6 h-screen hidden sm:hidden md:block lg:block">
        <ul >
        <Link to='/'> <li className="flex text-lg items-center my-3 ">  <AiFillHome className="mx-4"/>Home</li></Link>
            <li className="flex text-lg items-center my-3 "> <AiFillFire className="mx-4"/>Shorts</li>
            <li className="flex text-lg items-center my-3 "><AiOutlineCloudUpload className="mx-4"/>Live</li>
        </ul>
        <hr className="w-48 my-4"/>
        <h1>Explore</h1>
        <ul>
            <li className="flex text-lg items-center my-3 "><HiChartBar className="mx-4"/> Trending</li>
            <li className="flex text-lg items-center my-3 "><FaMusic className="mx-4"/> Music</li>
            <li className="flex text-lg items-center my-3 "><AiFillFire className="mx-4"/> Live</li>
            <li className="flex text-lg items-center my-3 "><FaGamepad className="mx-4"/> Gaming</li>
            <li className="flex text-lg items-center my-3 "><FaRegNewspaper className="mx-4"/>News</li>
            <li className="flex text-lg items-center my-3 "><AiFillTrophy className="mx-4"/>Sports</li>
            <li className="flex text-lg items-center my-3 "><AiOutlineBulb className="mx-4"/>Learning</li>
        </ul>
    </div>
  )
}

export default SideBar