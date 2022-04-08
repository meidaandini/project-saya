import React from "react";
import "./styles.css";
import CountContainer from "./components/CountContainer";
import Count from "./components/Count";

export default function Apps() {
    return(
        
        <div className="container">
            <h2>Tampilan Menu Context</h2>
            <CountContainer>
                <Count/>
            </CountContainer>
        </div>
    );
}