import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';

const dataHowHelp1 = [
  {
    id: 1,
    organisation: `Peta`,
    region: `worldwide`,
    about: `PETA focuses its attention on the four areas: in laboratories, on factory farms,in the clothing trade, and in the entertainment industry.`,
    link: "https://www.peta.org/"
  },
  {
    id: 2,
    organisation: `Peta`,
    region: `worldwide`,
    about: `PETA focuses its attention on the four areas: in laboratories, on factory farms,in the clothing trade, and in the entertainment industry.`,
    link: "https://www.peta.org/"
  },
  {
    id: 3,
    organisation: `Peta`,
    region: `worldwide`,
    about: `PETA focuses its attention on the four areas: in laboratories, on factory farms,in the clothing trade, and in the entertainment industry.`,
    link: "https://www.peta.org/"
  },
  {
    id: 4,
    organisation: `Peta`,
    region: `worldwide`,
    about: `PETA focuses its attention on the four areas: in laboratories, on factory farms,in the clothing trade, and in the entertainment industry.`,
    link: "https://www.peta.org/"
  },
  {
    id: 5,
    organisation: `Peta`,
    region: `worldwide`,
    about: `PETA focuses its attention on the four areas: in laboratories, on factory farms,in the clothing trade, and in the entertainment industry.`,
    link: "https://www.peta.org/"
  },
  {
    id: 6,
    organisation: `Peta`,
    region: `worldwide`,
    about: `PETA focuses its attention on the four areas: in laboratories, on factory farms,in the clothing trade, and in the entertainment industry.`,
    link: "https://www.peta.org/"
  },
  {
    id: 7,
    organisation: `Peta`,
    region: `worldwide`,
    about: `PETA focuses its attention on the four areas: in laboratories, on factory farms,in the clothing trade, and in the entertainment industry.`,
    link: "https://www.peta.org/"
  },
  {
    id: 8,
    organisation: `Peta`,
    region: `worldwide`,
    about: `PETA focuses its attention on the four areas: in laboratories, on factory farms,in the clothing trade, and in the entertainment industry.`,
    link: "https://www.peta.org/"
  }
];

function CarouselMain2() {
  const [focusedOrganisationIndex, setFocusedOrganisationIndex] = useState(-1);
  const toggleOrganisation = (newSelectedOrganisationIndex) => {
    setFocusedOrganisationIndex(
      newSelectedOrganisationIndex === focusedOrganisationIndex
        ? -1
        : newSelectedOrganisationIndex
    );
  };

  return (
    <section className="inner-wrapper">
      <Marquee gradient={false}  pauseOnHover={true} className="scroll-wrapper with-rotation">
      {dataHowHelp1.map((items, listIndex) => (
        <article className="how-help-item" key={items.id}
        onClick={() => {
          toggleOrganisation(listIndex);
        }}
        >
          <h3 className="how-help-title">{items.organisation}</h3>
          <span className="how-help-region">{items.region}</span>
          <p className="how-help-item-about">{items.about}</p>
          <a href={items.link} className="how-help-link">&#x2192;</a>
        </article>
      ))}
      </Marquee>
    </section>
  );
}
export default CarouselMain2;
