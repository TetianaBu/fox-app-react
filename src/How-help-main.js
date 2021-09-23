import './css/how-help.css';
import Carousel1 from './How-help-carousel-1';
import Carousel2 from './How-help-carousel-2';

function HowHelp() {
  return (
    <section className="container" id="how-help">
      <div className="container">
        <div className="half-row">
          <span className="section-label">Help</span>
          <h2 className="section-main-heading">How you can help</h2>
          <p className="section-subheading">
            The global distribution of foxes, together with their widespread
            reputation for cunning, has contributed to their prominence in
            popular culture and folklore in many societies around the world.
          </p>
        </div>
      </div>
      <Carousel1 />
      <Carousel2 />
    </section>
  );
}

export default HowHelp;
