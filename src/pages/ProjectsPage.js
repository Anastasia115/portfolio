import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ProjectItem from "../components/ProjectItem";

export default function ProjectsPage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://wordpress.anastasiabunduc.com/wp-json/wp/v2/projects?_embed");
            const data = await response.json();
            setPosts(data);
        }
        getData();
    }, []);

    return (
        <>
            <div id="box">
            <div className="aboutsection">
                <div className="page-title">
                    <h2>Work in progress</h2>
                    <h3>Some behind the scenes look on my current projects, drawings, 
                        and other fun stuff. This page also works as a blog, where I will upload 

                    </h3>
                </div>
                </div>
                </div>
                <section className="page">
            <section className="grid-container">
                {posts.map(post => (
                    <ProjectItem key={post.id} post={post} />
                    
                ))}
            </section>
        </section>
        <div className="contact-shortcut">
                    <div className="con-short-text">
                    <h5>Interested in working <br></br>together?</h5>
                    </div>
                    {/* <div className="line">
                        <img src="./assets/line.svg" alt="line"></img>
                    </div> */}
                    <div className="buttons">
                    <NavLink to="/contact"><button type="submit"onclick="window.location.href='blog.html'">Contact me</button>
                    </NavLink>
                    </div>

                </div>
        </>
    );
}
