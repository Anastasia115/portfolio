const Footer = () => {
    const year = new Date().getFullYear();
  
    return <footer>
        
        <div className="copyright">
        {`Copyright © ${year} Anastasia Bunduc All rights reserved`}
        </div>

        <div className="socials">
        </div>
        </footer>;
  };
  
  export default Footer;