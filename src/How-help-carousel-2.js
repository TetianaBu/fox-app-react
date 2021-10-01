import React, { useState } from 'react';

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

function CarouselMain1() {
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
      <div className="scroll-wrapper with-rotation-backwards">
      {dataHowHelp1.map((props, listIndex) => (
        <article className="how-help-item" key={props.id}
        onFocus={() => {
          toggleOrganisation(listIndex);
        }}
        >
          <h3 className="how-help-title">{props.organisation}</h3>
          <span className="how-help-region">{props.region}</span>
          <p className="how-help-item-about">{props.about}</p>
          <a href={props.link} className="how-help-link">&#x2192;</a>
        </article>
      ))}
      </div>
    </section>
  );
}
export default CarouselMain1;