import './css/fur-ban.css';
import Timeline from './Fur-ban-timeline';
function FurBan() {
  return (
    <section className="container-fur-ban">
      <div className="container">
        <div className="half-row">
          <span className="section-label">Ban</span>
          <h2 className="section-main-heading">Fur ban across glob</h2>
          <p className="section-subheading">
            The global distribution of foxes, together with their widespread
            reputation for cunning, has contributed to their prominence in
            popular culture and folklore in many societies around the world.
          </p>
        </div>
      </div>
      <Timeline />
    </section>
  );
}

export default FurBan;
