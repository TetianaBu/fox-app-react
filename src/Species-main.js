import SpeciesCarousel from './Species-carousel';
import './css/species.css';

function SpeciesMain() {
  return (
    <div className="container-fluid-species" id="fox-species">
      <section className="container species-container">
        <div className="half-row">
          <span className="section-label">Species</span>
          <h2 className="section-main-heading">"True foxes" group</h2>
          <p className="section-subheading">
            Twelve species belong to the monophyletic "true foxes" group of
            genus Vulpes.
          </p>
        </div>
        <span>
                {' '}
                <hr />
              </span>
        <SpeciesCarousel />
      </section>
    </div>
  );
}

export default SpeciesMain;
