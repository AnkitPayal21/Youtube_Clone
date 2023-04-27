// export const API_KEY = "AIzaSyAQE9SoeiDQTLWQcGE1NE5ulCiNBOAlWeg"
export const API_KEY = "AIzaSyCJJo-wd4-mI2kV7UifmVowk_G9qS12TBk"

export const OFFSET_LIVE_CHAT = 23;

export const GET_LIST_OF_VIDEOS_API =
    "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=" +
    API_KEY +
    "&q=";

export const YT_VIDEO_API = " https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+API_KEY

export const YT_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const YT_COMMENTS = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=100&key=${API_KEY}&videoId=`

export const YT_DISCRIPTION = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${API_KEY}&id=`

// https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyCR3kHpEp8ChLfxUzp7ee0oBkKif7UV-tI

export const  YT_VIDEO_DETAILS = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=${API_KEY}&id=` 







