import logo from './img/logo.png';
import globe from './img/globe.png'
import './css/navigation.css';

function Navigation() {
  return (
    <nav className="Navigation-container">
      <div className="logo-container">
        <a href="#">
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        <p>Fur-fur world</p>
      </div>
      <div className="nav-bar-menu">
        <a href="#acts">Facts</a>
        <a href="#fox-species">Species</a>
        <a href="#map">Map</a>
        <a href="#people-foxes-reletions">People&Foxes</a>
        <a href="#how-help">How Help</a>
      </div>
    </nav>
  );
}

export default Navigation;

//        <button className="btn-change-language"><img src={globe} className="icon" alt="Icon" /><span className="btn-lg-text">Soon!</span></button>

