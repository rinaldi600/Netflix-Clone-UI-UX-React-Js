import "./SectionOne.css";
import Navbar from "./Navbar/Navbar";
import background from "../bg/wallpaperbetter.com_3840x2160.jpg";
import axios from "axios";
import {Fragment, useEffect, useState} from "react";

function SectionOne(props) {

    const [movie, getDetailMovie] = useState([]);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/580489?api_key=4f1e0b07cf6493d614f5c9b08c61eaa8&language=en-US`)
            .then((response) => {
                getDetailMovie(response.data);
            })
            .catch((error) => {

            })
    },[]);

    console.log(movie.seasons);
    console.log(movie);

    return (
        <div className="section-one w-full relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(https://www.themoviedb.org/t/p/original${movie['poster_path']})`}}>
            <Navbar/>
            <div className={"detail-movie w-1/2 2xl:w-1/3 ml-16 2xl:ml-20 mt-14"}>
                <div className={"mb-2"}>
                    <div className={"parental text-white font-bold bg-yellow-500 p-0.5 w-10 text-center rounded-lg"}>{movie['vote_average']}</div>
                </div>
                <div className={"mb-2 mt-3 flex items-center sm:gap-3 gap-7 flex-wrap"}>
                    <span className={"text-white flex items-center gap-1"}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                        </svg>
                        7.5
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                              d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z"
                              clip-rule="evenodd"/>
                    </svg>
                    <span className={"text-white text-lg"}>{movie['release_date']?.split('-')[0]}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                              d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z"
                              clip-rule="evenodd"/>
                    </svg>
                    <span className={"text-white text-lg"}>{movie.seasons ?? `0`} Seasons</span>
                </div>
                <h1 className={"text-white text-4xl"}>{movie.title}</h1>
                <p className={"text-white overflow-clip mt-4 leading-normal"}>
                    {movie.overview}
                </p>
                <div className="button mt-6 flex flex-wrap gap-4">

                    <button className={"bg-red-600 uppercase text-white p-2.5 w-36 items-center rounded-full flex gap-2 justify-center"} type={"submit"}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 align-middle" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <span className={"font-bold text-xs tracking-wider align-middle"}>Watch</span>
                    </button>

                    <button className={"uppercase bg-gray-600 text-white p-2.5 w-40 rounded-full items-center flex gap-2 justify-center"} type={"submit"}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 align-middle" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <span className={"font-bold text-xs tracking-wider align-middle"}>Add To List</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SectionOne;