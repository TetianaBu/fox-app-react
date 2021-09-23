import './css/map.css';
import Map from './Map';

function MapMain() {
  return (
    <section className="container" id="map">
      <div>
        <div className="half-row">
          <span className="section-label">Map</span>
          <h2 className="section-main-heading">In progress</h2>
          <p className="section-subheading">
            Map and legend. Work in progress
          </p>
          <hr />
        </div>
      </div>
      <div className="map-legend-container">
        <div className="legend-container">
          <p> legend container</p>
        </div>
        <div className="map-container">
          <Map />
        </div>
      </div>
    </section>
  );
}

export default MapMain;
