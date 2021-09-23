import logo from './img/logo.png';
import './css/navigation.css';

function Navigation() {
  return (
    <nav className="navigation-container">
      <div className="logo-container">
        <img src={logo} className="app-logo" alt="logo" />
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
