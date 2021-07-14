import './css/header.css';
import Navigation from './Navigation-header';

function Header() {
  const navbar = Navigation();
  return (
    <div className="Header">
            {navbar}
      <header className="Main-header">
        <div className="lead">
        <h1>All about foxes</h1>
        <p className="headers-subheading">Where they live, what they eat and how you can help them</p>
        </div>
      </header>
    </div>
  );
}

export default Header;
