import profilePicture from "../assets/img1.jpg";
import linkedinLogo from "../assets/linkedin.png";
import mailLogo from "../assets/mail.png";
import "./Header.css";

function Header() {
  return (
    <header>
      <img
        className="profile-picture"
        src={profilePicture}
        width="300"
        alt="Branka Lakicevic profilna fotografija"
      />
      <article className="personal-information">
        <h2 className="name">Branka Lakicevic</h2>
        <p className="profession">Frontend Developer</p>
        <a className="web" href="https://github.com/labranka" target="_blank">
          branka_lakicevic_github
        </a>
      </article>
      <section className="buttons">
        <a
          className="button-left"
          href="mailto: branka_lakicevic@hotmail.com"
          target="_blank"
        >
          <img className="logo-button" src={mailLogo} />
          <p>Email</p>
        </a>
        <a
          className="button-right"
          href="https://www.linkedin.com/in/brankalakicevic/"
          target="_blank"
        >
          <img className="logo-button" src={linkedinLogo} />
          <p>LinkedIn</p>
        </a>
      </section>
    </header>
  );
}

export default Header;
