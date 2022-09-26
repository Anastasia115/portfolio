import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import PostItem from "../components/PostItem";

export default function PostsPage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://wordpress.anastasiabunduc.com/wp-json/wp/v2/posts?_embed");
            const data = await response.json();
            setPosts(data);
        }
        getData();
    }, [posts]);
    return (
        <>
        <div id="box">
        <div className="aboutsection">
            <div className="page-title">
                <h2>Selected work</h2>s
                <h3>Below are some of the  that I have worked on, 
                    either alone or with a group of wonderful people. 
                </h3>
            </div>
            </div>
            </div>
        <section className="page">
            <section className="grid-container">
                {posts.map(post => (
                    <PostItem key={post.id} post={post} />
                    
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
                    <NavLink to="/contact"><button >Contact me</button>
                    </NavLink>
                    </div>

                </div>

        </>
    );
}
