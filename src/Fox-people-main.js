import './css/fox-people.css';
import FoxFarming from './Fox-farming';
import FoxEconomy from './Fox-economy';
import React, { useState } from 'react';

const tablesData = [
  {
    id: 1,
    title: `fur production`,
    innerTitle: `Foxes for fur`,
    legendText: `The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles.`,
    link: 'https://www.hsi.org/news-media/fur-trade/',
    element: <FoxFarming />
  },
  {
    id: 2,
    title: `fox economy`,
    innerTitle: `Export and import`,
    legendText: `The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles.`,
    link: 'https://www.hsi.org/news-media/fur-trade/',
    element: <FoxEconomy />
  }
];

function FoxAndPeople() {
  const [openTableIndex, setOpenTableIndex] = useState(0);
  const toggleTable = (newSelectedTableIndex) => {
    setOpenTableIndex(
      newSelectedTableIndex === openTableIndex ? openTableIndex : newSelectedTableIndex
    );
  };
  /*
  const [clicked, setClicked] = useState('btn-rel-active');
  const handleClick = () => {
    clicked ? setClicked('') : setClicked('btn-rel-active btn-rel');
  };
*/
  const selectedElement = tablesData[openTableIndex]?.element;
  const legendText = tablesData[openTableIndex]?.legendText;
  const innerTitle = tablesData[openTableIndex]?.innerTitle;
  const link = tablesData[openTableIndex]?.link;
  return (
    <div className="container-fluid-rel" id="people-foxes-reletions">
      <section className="container">
        <div> 
          <div className="half-row">
            <span className="section-label">People&Foxes</span>
            <h2 className="section-main-heading">Some cool diagrams</h2>

            <div className="btn-rel-container">
              {tablesData.map((table, listIndex) => (
                <button
                 className="btn-rel"
                  onClick={() => {
                    toggleTable(listIndex);
                  }}
                  key={table.id}
                >
                  {table.title}
                </button>
              ))}
            </div>
          </div>
          <hr />
        </div>
        <div className="rel-main-content-container">
          <div className="legend-people-fox">
            <h3>{innerTitle}</h3>
            <p>{legendText}</p>
            <div className="rel-link-wrapper">
              <a href={link} className="rel-link">
                <hr />
                learn more &#8594;
              </a>
            </div>
          </div>
          {selectedElement}
        </div>
      </section>
    </div>
  );
}

export default FoxAndPeople;
