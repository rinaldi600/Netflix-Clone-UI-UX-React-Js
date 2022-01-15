import coverImages
    from "../../bg/MV5BNDJkYzY3MzMtMGFhYi00MmQ4LWJkNTgtZGNiZWZmMTMxNzdlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg";
import love from "../../icons/heart.png";
import seen from "../../icons/seen.png";
import star from "../../icons/star.png";
import movieError from "../../icons/error.png";
import React, {useCallback, useEffect} from "react";
import "./Movie.css"

export default function Movie(props) {

    useEffect(() => {
        if (props['name']?.length >= 38) {
            console.log(Math.floor(props['name'].split(' ').length / 2));
            console.log(props['name'].split(' ').slice(0, Math.floor(props['name'].split(' ').length / 3)).join(' ').concat('...'));
        }
    });
    console.log(props['poster']);

    return (
        <div className={"w-64 h-96"}>
            <div className="h-80">
                <img className={"round w-full h-full object-cover"} src={props.poster ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${props.poster}` : movieError} alt=""/>
                <p className={"text-base font-semibold text-white"}>{props['name']?.length > 30 ? props['name'].split(' ').slice(0, Math.floor(props['name'].split(' ').length / 2.5)).join(' ').concat('...') : props.name}</p>
                <div className={"details-movie flex justify-between items-center"}>
                    <p className={"font-semibold"}>2018</p>
                    <div className="icons-detail flex gap-3">
                        <img src={love} alt=""/>
                        <img src={seen} alt=""/>
                        <div className="rate flex gap-2">
                            <img src={star} alt=""/>
                            <p className={"font-semibold text-yellow-300"}>{props.rating}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}