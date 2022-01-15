import React, { Component } from 'react';
import "./Combine.css"
import SectionOne from "../SectionOne/SectionOne";
import SectionTwo from "../SectionTwo/SectionTwo";

class Combine extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.title = 'Netflix Clone UI/UX'
    }

    render() {
        return (
            <div>
                <SectionOne />
                <SectionTwo />
            </div>
        );
    }
}

export default Combine;