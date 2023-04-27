import React from 'react'
import { Link } from 'react-router-dom';

const SearchVideoCard = (data) => {
    const videoId = data.data?.id.videoId;
    const imgURL = data.data?.snippet.thumbnails.medium.url;
    const desciption = data.data?.snippet.description;
    const title = data.data?.snippet.title;
    const channelTitle = data.data?.snippet.channelTitle;
    return (
        <Link
            to={"/watch?v=" + videoId}
            key={videoId}
        >
            <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row m-5">
                <div >
                    <img src={imgURL} alt={title} className="rounded-xl" />
                </div>
                <div className="mx-5">
                    <h1 className='font-bold'>
                        {title}
                    </h1>
                    <p className='hidden sm:hidden md:block lg:block my-2'>
                        { channelTitle}
                    </p>
                    <p className='hidden sm:hidden md:hidden lg:block'>{desciption}</p>
                   
                </div>
            </div>
        </Link>
    );
};

export default SearchVideoCard