import "./Navbar.css";
import netflix from "../../img/netflix.png";
import profile from "../../img/profile.png"
import {useEffect, useState} from "react";

function Navbar(props) {
    const[isToggle, setToggle] = useState(false);

    useEffect(() => {
        console.log("WORK")
    });
    return (
        <div className="navbar grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 items-center relative">
            <div className="logo-netlix col-span-1 grid">
                <img className="object-contain ml-7" src={netflix} alt=""/>
                {
                    !isToggle ?
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white cursor-pointer object-right-top absolute top-11 right-0 lg:hidden xl:hidden 2xl:hidden" onClick={() => setToggle(true)} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg> :
                        null
                }
                {
                    isToggle ?
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white cursor-pointer absolute top-11 right-0 lg:hidden xl:hidden 2xl:hidden" onClick={() => setToggle(false)} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg> :
                        null
                }
            </div>
            <div className="link-menu col-span-1">
                <ul className={`grid justify-items-center 2xl:grid-flow-col xl:grid-flow-col lg:grid-flow-col gap-3 ${isToggle ? '' : 'md:hidden sm:hidden' }`}>
                    <li>
                        <a className={"hover:text-white"} href="">Home</a>
                    </li>
                    <li>
                        <a className={"hover:text-white"} href="">Tv Shows</a>
                    </li>
                    <li>
                        <a className={"hover:text-white"} href="">Movies</a>
                    </li>
                    <li>
                        <a className={"hover:text-white"} href="">Recently Added</a>
                    </li>
                    <li>
                        <a className={"hover:text-white"} href="">My List</a>
                    </li>
                </ul>
            </div>
            <div className={`profile grid justify-items-center col-span-1 mt-4 ${isToggle ? '' : 'md:hidden sm:hidden'}`}>
                <ul className="flex flex-wrap gap-4">
                    <li>
                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src={profile} alt=""/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;