import "./SectionTwo.css";
import Navbar from "../SectionTwo/Navbar/Navbar";
import Genre from "./Genre/Genre";

function SectionTwo(props) {
    return (
        <div className={"section-two"}>
            <Navbar/>
            <Genre />
        </div>
    )
}

export default SectionTwo;