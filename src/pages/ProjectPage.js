import { useState, useEffect } from "react";
import React from 'react';
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import parse from "html-react-parser";

export default function ProjectPage() {
    const [post, setPost] = useState({});
    const params = useParams();
    console.log(params);
    const slug = params.slug;

    useEffect(() => {
        async function getPost() {
            const url = `https://wordpress.anastasiabunduc.com/wp-json/wp/v2/projects?slug=${slug}&_embed`;
            const response = await fetch(url);
            const data = await response.json();
            setPost(data[0]);
        }
        getPost();
    }, [slug]);
       

    // let image = "https://cederdorff.github.io/img/logo512.webp";

    if (post._embedded && post._embedded["wp:featuredmedia"]) {
        // image = post._embedded["wp:featuredmedia"][0].source_url;
    }

    return (
        <>
        <section className="page">
            <section className="post-row">
                <article>
                    <h3>{post.title && parse(post.title.rendered)}</h3>
                    <div className="post-content">
                        
                    {post.content && parse(post.content.rendered)}
                    
                    </div>
                </article>
                {/* <figure>
                    <img src={image} alt={post.title?.rendered} />
                </figure> */}
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
