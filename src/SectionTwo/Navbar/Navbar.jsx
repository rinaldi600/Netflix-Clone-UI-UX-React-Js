import React from 'react';
import "./Navbar.css";

function Navbar(props) {
    return (
        <div className={"navbar-link bg-black text-white"}>
           <div className={"navbar grid"}>
                <ul className={"text-center grid sm:grid-flow-row sm:gap-5 sm:p-2 grid-flow-col grid-flow-col 2xl:gap-36 gap-24 md:gap-5 justify-items-center mx-auto place-items-center"}>
                    <li className={"h-full grid items-center hover:border-b-4 hover:border-red-600 hover:rounded-sm"}>
                        <a className={"hover:text-white"} href="">Trending Now</a>
                    </li>
                    <li className={"h-full grid items-center hover:border-b-4 hover:border-red-600 hover:rounded-sm"}>
                        <a className={"hover:text-white"} href="">Popular</a>
                    </li>
                    <li className={"h-full grid items-center hover:border-b-4 hover:border-red-600 hover:rounded-sm"}>
                        <a className={"hover:text-white"} href="">Netflix Original</a>
                    </li>
                    <li className={"h-full grid items-center hover:border-b-4 hover:border-red-600 hover:rounded-sm"}>
                        <a className={"hover:text-white"} href="">Premiers</a>
                    </li>
                    <li className={"h-full grid items-center hover:border-b-4 hover:border-red-600 hover:rounded-sm"}>
                        <a className={"hover:text-white"} href="">Recently Added</a>
                    </li>
                </ul>
           </div>
        </div>
    )
}

export default Navbar;
