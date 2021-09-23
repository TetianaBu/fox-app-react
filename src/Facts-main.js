import './css/facts.css';
import FactsCarousel from './Facts-carousel';

function FactsMain() {
  return (
    <section className="container" id="facts">
      <div className="half-row">
        <span className="section-label">Facts</span>
        <h2 className="section-main-heading">Some cool facts</h2>
        <p className="section-subheading">
          Twelve species belong to the monophyletic "true foxes" group of genus
          Vulpes
        </p>
      </div>
      <FactsCarousel />
    </section>
  );
}

export default FactsMain;
