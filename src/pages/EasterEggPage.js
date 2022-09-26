import React from "react";
import Ginny1 from "../assets/ginny1.jpg"
import Ginny2 from "../assets/ginny2.jpg"
import Ginny3 from "../assets/ginny3.jpg"

export default function EasterEggPage() {

    return (
        <>
            <div id="box">
            <div className="aboutsection">
                <div className="page-title">
                    <h2>Congrats! You just discovered an easter egg!</h2>
                    <h3>This page was created just to show you my dog. I hope you enjoy it.</h3>
                    <h6>This is Ginny!</h6> 
                 {/* <FadeInSection> */}
                    <div className="poze-ginny">
               
                    <img src={Ginny1} alt="my doggo"></img>
                    <img src={Ginny2} alt="my doggo "></img>
                    <img src={Ginny3} alt="my doggo"></img>
                
                </div>
                {/* </FadeInSection> */}
                </div>
                </div>
            </div>
        </>
    );
}
