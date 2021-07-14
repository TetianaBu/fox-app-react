import './css/footer.css';
import email from './img/email.png';
import linkedin from './img/linkedin.png';

function Footer() {
  return (
    <div className="footer-container-fluid">
    <div className="container ">
      <div className="contact-box">
        <div className="recources">
          <p className="footer-headers">Reading list</p>
          <a href="https://wwf.panda.org/">WWF</a>
          <a href="https://wikipedia.org/">Wikipedia</a>
          <a href="https://unsplash.com/">Unsplash</a>
          <a href="https://www.flaticon.com/">Flaticon</a>
        </div>
        <div className="recources">
          <p className="footer-headers">Watching list</p>
          <a href="https://wwf.panda.org/">WWF</a>
          <a href="https://wikipedia.org/">Wikipedia</a>
          <a href="https://unsplash.com/">Unsplash</a>
          <a href="https://www.flaticon.com/">Flaticon</a>
        </div>
        <div className="recources">
          <p className="footer-headers">Recources</p>
          <a href="https://wwf.panda.org/">WWF</a>
          <a href="https://wikipedia.org/">Wikipedia</a>
          <a href="https://unsplash.com/">Unsplash</a>
          <a href="https://www.flaticon.com/">Flaticon</a>
        </div>
        <div className="contact">
          <p className="footer-headers">Contact</p>
          <nav className="social">
            <a href="mailto:tetianataker@gmail.com">
              <img src={email} className="icon" alt="Icon" />
            </a>
            <a href="https://www.linkedin.com/">
              <img src={linkedin} className="icon" alt="Icon" />
            </a>
            <a href="https://www.linkedin.com/">
              <img src={linkedin} className="icon" alt="Icon" />
            </a>
          </nav>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Footer; 
