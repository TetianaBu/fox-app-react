import furBanData from './data/fur-ban-data'

function Timeline() {
  return (
    <div className="container outer-wrapper">
      <div className="timeline-wrapper">

        <div className="timeline">
          <div className="timeline-items">
            {furBanData.map((item, i) => (
              <div key={i} className={'timeline-item'}>
                <div className="timeline-content">{item.year}</div>
                <div className="timeline-territories">
                  <div className="trade-ban-wrapper">
                  <div className="trade-ban-item">{item.tradeBan}</div>
                  <div className="trade-ban-item">{item.tradeBan2}</div>
                  </div>
                  <div className="farming-ban-wrapper">
                  <div className="farming-ban-item">{item.farmingBan}</div>
                  <div className="farming-ban-item">{item.farmingBan2}</div>
                  <div className="farming-ban-item">{item.farmingBan3}</div>
                  </div>
                  <div className="strict-regulation-wrapper">
                  <div className="strict-regulation-item">
                    {item.strictRegulation}
                  </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="timeline-legend">
      <div>
        <p><span className="trade-ban-item add-padding"></span>ban for trade</p>
        <p><span className="farming-ban-item add-padding"></span>ban for farming</p>
        <p><span className="strict-regulation-item add-padding"></span>strict regulations</p>
        </div>
        </div>
    </div>
  );
}

export default Timeline;
