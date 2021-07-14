import './css/map.css';
import Map from './Map';

function MapMain() {
  return (
    <section className="container" id="map">
      <div>
        <div className="half-row">
          <span className="section-label">Map</span>
          <h2 className="section-main-heading">Navigate</h2>
          <p className="section-subheading">
            Choose something in legend try nice lele
          </p>
          <hr />
        </div>
      </div>
      <div className="map-legend-container">
        <div className="legend-container">
          <p> legend containeer</p>
          <p> legend containeer</p>
          <p> legend containeer</p>
          <p> legend containeer</p>
          <p> legend containeer</p>
          <p> legend containeer</p>
        </div>
        <div className="map-container">
          <Map />
        </div>
      </div>
    </section>
  );
}

export default MapMain;
