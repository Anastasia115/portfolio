import FacebookIcon from "../assets/facebookicon.png";
import LinkedinIcon from "../assets/linkedinicon.png";
import GithubIcon from "../assets/githubicon.png";
const Footer = () => {
    const year = new Date().getFullYear();
  
    return <footer>
        
        <div className="copyright">
        {`Copyright © ${year} Anastasia Bunduc All rights reserved`}
        </div>

        <div className="socials">
            <a href="https://www.linkedin.com/in/anastasia-bunduc-9741a021b/" target="_blank"rel="noopener noreferrer">
                <img src={LinkedinIcon} alt="linkedin icon"></img>
            </a>
            <a href="hhttps://github.com/Anastasia115"target="_blank"rel="noopener noreferrer">
                <img src={GithubIcon} alt="github icon"></img>
            </a>
            <a href="https://www.facebook.com/anastasia.bunduc0911"target="_blank"rel="noopener noreferrer">
                <img src={FacebookIcon} alt="facebook icon"></img>
            </a>
        </div>
        </footer>
  };
  
  export default Footer;