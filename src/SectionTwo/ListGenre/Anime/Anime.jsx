import Movie from "../../Movie/Movie";
import "./Anime.css"
import React, {useEffect, useState} from "react";
import axios from "axios";

export default function Anime(props) {

    const [count, setCount] = useState(0);
    useEffect(() => {
        if (count > 200) {
            setCount(0)
        } else if (count < -1800) {
            setCount(-200)
        }
        console.log(count)
    });

    const [listMovies, getMovies] = useState([]);
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=4f1e0b07cf6493d614f5c9b08c61eaa8&language=en-US&page=${Math.floor(Math.random() * 77)}`)
            .then(function (response) {
                // handle success
                getMovies(response.data.results);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    },[]);

    console.log(listMovies);

    const move = {
        transform : `translateX(${count}px)`,
        transition : "1s"
    };

    return (
        <div className={"flex bg-black overflow-hidden relative"}>

            <div className="left-arrow bg-black z-50 absolute top-36">
                <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setCount(count + 200)} className="h-6 w-6 text-white cursor-pointer" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                </svg>
            </div>

            <div className="right-arrow bg-black z-50 absolute top-36 right-0">
                <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setCount(count - 200)} className="h-6 w-6 text-white cursor-pointer" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
            </div>

            <div style={move} className={`bg-black grid h-96 ${listMovies.length === 0 ? 'w-full justify-items-center p-2 content-center' : 'grid-flow-col gap-7 content-center p-2' }`}>
                {
                    listMovies.length === 0 ?
                        <div className={"flex h-72 bg-black"}>
                            <div className="text-error w-full grid justify-center content-center">
                                <div className="detail text-white sm:ml-14 md:ml-14">
                                    <h1 className={"text-font sm:text-lg md:text-xl text-5xl font-bold leading-tight"}>Something Went
                                        <br/> Wrong</h1>
                                    <p className={"mt-4 text-font leading-7 sm:text-sm"}>Sorry, we couldn't find page you were looking for <br/>
                                        To return to the Netflix homepage.
                                    </p>
                                </div>
                            </div>
                            <div className="icons-error w-full grid justify-center content-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-white" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                                </svg>
                            </div>
                        </div>
                        :
                        listMovies.slice(0,7).map((movie) => (
                            <Movie name = {movie['original_title']} poster = {movie['poster_path']} rating = {movie['vote_average']}/>
                        ))
                }
            </div>

        </div>
    )
}