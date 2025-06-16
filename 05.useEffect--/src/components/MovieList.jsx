import React, { useEffect, useState } from 'react'
import axios from 'axios';

const MovieList = () => {
    const API_KEY = import.meta.env.VITE_MOVIELIST_API_KEY;
    const MOVIE_URL = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${API_KEY}&targetDt=20120101`
    const [movie, setMovie] = useState([]);

    const getMovieData = async () => {
        let res = await axios.get(MOVIE_URL);
        let data = res.data;

        let movies = data.boxOfficeResult.dailyBoxOfficeList.map((item)=>({
            rank:item.rank,
            movieNm:item.movieNm,
            openDt:item.openDt
        }))
        // console.log(movies);
        setMovie(movies);
    }
    
    
    useEffect(()=>{
        getMovieData()
    },[])
  
    return (
    <div>
        <h1>영화 목록</h1>
        <div>
            {movie.map((movie,index)=>(
                <p key={movie.rank}>
                    {movie.rank}.{movie.movieNm}|{movie.openDt}
                </p>
            ))}
        </div>
    </div>
  )
}

export default MovieList