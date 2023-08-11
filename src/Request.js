const API_KEY="16563a2ed8e10b54f2916232a97ed009";

const requests={
   fetchPopular:`movie/popular?language=en-US&page=1&api_key=${API_KEY}`,
   fetchNowPlaying:`movie/now_playing?language=en-US&page=1&api_key=${API_KEY}`,
   fetchTopRated:`movie/top_rated?language=en-US&page=1&api_key=${API_KEY}`,
   fetchUpcoming:`movie/upcoming?language=en-US&page=1&api_key=${API_KEY}`
   
    
}
export default requests;