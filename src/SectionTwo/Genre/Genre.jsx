import React, {Fragment} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import Action from "../ListGenre/Action/Action";
import Adventure from "../ListGenre/Adventure/Adventure";
import Anime from "../ListGenre/Anime/Anime";
import NotFound from "../ListGenre/NotFound/NotFound";
import ScrollContainer from 'react-indiana-drag-scroll';
import "./Genre.css"

class Genre extends React.Component {
    render() {
        return (
            <Fragment>
                <div className={"bg-black p-5 sm:h-full h-36 md:h-56"}>
                    <ScrollContainer className="scroll-container" activationDistance={30}>
                        <div className={"cursor-pointer sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 m-auto w-11/12 text-white grid 2xl:grid-flow-col justify-items-center justify-center content-center sm:gap-3 gap-2 2xl:gap-5 text-base font-medium"}>
                            <Link className={"bg-red-600 sm:w-28 sm:text-sm w-36 h-11 rounded-full text-center grid items-center"} to="/">
                                Action
                            </Link>
                            <Link className={"font-loader sm:w-28 sm:text-sm bg-red-600 w-36 h-11 rounded-full text-center grid items-center"} to="/adventure">
                                Adventure
                            </Link>
                            <Link className={"font-loader sm:w-28 sm:text-sm bg-red-600 w-36 h-11 rounded-full text-center grid items-center"} to="/anime">
                                Anime
                            </Link>
                            <Link className={"font-loader sm:w-28 sm:text-sm bg-red-600 w-36 h-11 rounded-full text-center grid items-center"} to="/biography">
                                Biography
                            </Link>
                            <Link className={"font-loader sm:w-28 sm:text-sm bg-red-600 w-36 h-11 rounded-full text-center grid items-center"} to="/crime">
                                Crime
                            </Link>
                            <Link className={"font-loader sm:w-28 sm:text-sm bg-red-600 w-36 h-11 rounded-full text-center grid items-center"} to="/comedy">
                                Comedy
                            </Link>
                            <Link className={"font-loader sm:w-28 sm:text-sm bg-red-600 w-36 h-11 rounded-full text-center grid items-center"} to="/documentary">
                                Documentary
                            </Link>
                            <Link className={"font-loader sm:w-28 sm:text-sm bg-red-600 w-36 h-11 rounded-full text-center grid items-center"} to="/drama">
                                Drama
                            </Link>
                        </div>
                    </ScrollContainer>
                </div>
                <Routes >
                    <Route path={"/"} element={<Action/>} exact />
                    <Route path={"/adventure"} element={<Adventure/>} />
                    <Route path={"/anime"} element={<Anime/>} />
                    <Route path={"*"} element={<NotFound/>} exact />
                </Routes>
            </Fragment>
        )
    }
}

export default Genre;