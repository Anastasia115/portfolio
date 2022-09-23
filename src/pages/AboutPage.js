import { NavLink } from "react-router-dom";
export default function AboutPage() {
    return (
        <>
        <div className="herosection">
            <div className="hero-sectiontext">
                <h1>Hi, I'm Anastasia.</h1>
                <h4>A <b><i>Multimedia Designer</i></b> with a specialization <br></br> in <b><i>Front-end Development.</i></b></h4>
            </div>
                <div className="arrow">
                    <a href="#nextpage"><img src="./assets/arrow.svg" alt="arrow" ></img></a>
                </div>
            <div className="hero-section.image">
                <div id="portrait">
                        <img src="./assets/portrait.png" alt="portrait Anastasia"></img>
                </div>
                <div id="background">
                    <img src="./assets/background.landingpage.png" alt="illustration"></img>
                </div>

                
            </div>
        </div>
        <div id="nextpage">
            <div className="aboutsection">
                <div className="page-title">
                    <h2>About me</h2>
                    <h3>Here you can read all about who I am, what makes me happy and more.</h3>
                </div>
                <div className="content">
                    <div className="imageleft">
                        <img src="./assets/aboutmeimage.png" alt="portrait of Anastasia"></img>
                    </div>

                    <div className="textright">
                        <p>
                        I am a Junior Front-End developer located in Denmark, 
                        currently looking for an internship in an exciting company. I 
                        am interested in good UI animations, effects and in creating 
                        intuitive, engaging and dynamic user experiences. 
                        </p>
                        <p>
                        I am focused on writing handy HTML, using modern CSS 
                        methods and writing clean JavaScript. I recently learned 
                        React, which helped me very much when writing JavaScript.
                        </p>
                        <p>
                        I am a focused, hard-working and well-organized person. I 
                        am also a very fast-learner, which proved very useful while 
                        learning programming.
                        </p>
                        <p>
                        Drawing, reading and knitting are a few of the things that 
                        make me feel whole. Besides programming and my dog.
                        I would love for you to check out my work.
                        </p>

                        <div className="buttons">
                        <NavLink to="/work"><button type="submit" className="fade-in" onclick="window.location.href='blog.html'">Go to portfolio</button>
                        </NavLink>
                    </div>
                    </div>
                    
                </div>
                <div className="contact-shortcut">
                    <div className="con-short-text">
                    <h5>Interested in working <br></br>together?</h5>
                    </div>
                    {/* <div className="line">
                        <img src="./assets/line.svg" alt="line"></img>
                    </div> */}
                    <div className="buttons">
                    <NavLink to="/contact"><button type="submit" className="fade-in" onclick="window.location.href='blog.html'">Contact me</button>
                    </NavLink>
                    </div>

                </div>
                


            </div>

        </div>

    
        </>
        );
}
