import './css/header.css';
import Navigation from './Navigation-header';

function Header() {
  return (
    <div className="header">
      <Navigation />
      <header className="main-header">
        <div className="lead">
          <h1>All about foxes</h1>
          <p className="headers-subheading">
            Where they live, what they eat and how you can help them. Content in
            progress
          </p>
        </div>
      </header>
    </div>
  );
}

export default Header;
