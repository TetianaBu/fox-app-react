import factImg1 from './img/fact-img-1.jpg';
import factImg2 from './img/fox-species/arcticFox.jpg';
import factImg3 from './img/fox-species/bengal.jpeg';
import factImg4 from './img/fox-species/kitFox.jpeg';
import factImg5 from './img/fox-species/swiftFox.jpeg';

import React, { useState } from 'react';

const factsData = [
  {
    title: 'Fact 1',
    text: 'Foxes live on every continent except Antarctica. The most common and widespread species of fox is the red fox (Vulpes vulpes) with about 47 recognized subspecies. The global distribution of foxes, together with their widespread reputation for cunning, has contributed to their prominence in popular culture and folklore in many societies around the world.',
    image: factImg1,
    image2: factImg2,
    image3: factImg3
  },
  {
    title: 'Fact 2',
    text: 'Foxes live on every continent except Antarctica. The most common and widespread species of fox is the red fox (Vulpes vulpes) with about 47 recognized subspecies. The global distribution of foxes, together with their widespread reputation for cunning, has contributed to their prominence in popular culture and folklore in many societies around the world.',
    image: factImg2,
    image2: factImg3,
    image3: factImg5
  },
  {
    title: 'Fact 3',
    text: 'Foxes live on every continent except Antarctica. The most common and widespread species of fox is the red fox (Vulpes vulpes) with about 47 recognized subspecies. The global distribution of foxes, together with their widespread reputation for cunning, has contributed to their prominence in popular culture and folklore in many societies around the world.',
    image: factImg3,
    image2: factImg1,
    image3: factImg3
  },
  {
    title: 'Fact 4',
    text: 'Foxes live on every continent except Antarctica. The most common and widespread species of fox is the red fox (Vulpes vulpes) with about 47 recognized subspecies. The global distribution of foxes, together with their widespread reputation for cunning, has contributed to their prominence in popular culture and folklore in many societies around the world.',
    image: factImg4,
    image2: factImg1,
    image3: factImg3
  },
  {
    title: 'Fact 5',
    text: 'Foxes live on every continent except Antarctica. The most common and widespread species of fox is the red fox (Vulpes vulpes) with about 47 recognized subspecies. The global distribution of foxes, together with their widespread reputation for cunning, has contributed to their prominence in popular culture and folklore in many societies around the world.',
    image: factImg5,
    image2: factImg1,
    image3: factImg3
  }
];

function FactsCarousel() {
  const [focusedFactIndex, setFocusedFactIndex] = useState(-1);
  const toggleFact = (newSelectedFactIndex) => {
    setFocusedFactIndex(
      newSelectedFactIndex === focusedFactIndex ? -1 : newSelectedFactIndex
    );
  };

  return (
    <div className="facts-container">
      {factsData.map((props, listIndex) => (
        <section
          className="fact-element"
          onFocus={() => {
            toggleFact(listIndex);
          }}
        >
          <div className="facts-img-container">
            <img src={props.image} className="fact-img" alt="Foxes Facts" />
            <img src={props.image2} className="fact-img" alt="Foxes Facts" />

          </div>

          <div className="facts-text-container">
            <h2 className="facts-title">{props.title}</h2>
            <p className="facts-text">{props.text}</p>
          </div>
        </section>
      ))}
    </div>
  );
}

export default FactsCarousel;
