import twitterIcon from "../assets/twitter-icon.png";
import facebookIcon from "../assets/facebook-icon.png";
import githubIcon from "../assets/github-icon.png";
import instagramIcon from "../assets/instagram-icon.png";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <a href="https://twitter.com" target="_blank">
        <img src={twitterIcon} alt="Twitter - Branka Lakicevic" />
      </a>
      <a href="https://facebook.com" target="_blank">
        <img src={facebookIcon} alt="Facebook - Branka Lakicevic" />
      </a>
      <a href="https://instagram.com" target="_blank">
        <img src={instagramIcon} alt="Twitter - Branka Lakicevic" />
      </a>
      <a href="https://github.com" target="_blank">
        <img src={githubIcon} alt="Github - Branka Lakicevic" />
      </a>
    </footer>
  );
}

export default Footer;
