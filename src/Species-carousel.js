import redFoxImg from './img/red-foxes.jpg';
import fennecFoxImg from './img/fox-species/fennecFox.jpg';
import ruppelFoxImg from './img/fox-species/ruppelsFox.jpeg';
import corsacFoxImg from './img/fox-species/corsacFox.jpg';
import bengalFoxImg from './img/fox-species/bengal.jpeg';
import arcticFoxImg from './img/fox-species/arcticFox.jpg';
import blandfordFoxImg from './img/fox-species/blandfordsFox.jpeg';
import capeFoxImg from './img/fox-species/capeFox.jpeg';
import tibetanFox from './img/fox-species/tibetan_fox.jpeg';
import kitFoxImg from './img/fox-species/kitFox.jpeg';
import paleFoxImg from './img/fox-species/paleFox.jpeg';
import swiftFoxImg from './img/fox-species/swiftFox.jpeg';

import React, { useState } from 'react';

import './css/species.css';

const speciesData = [
  {
    id: 1,
    title: `Arctic fox`,
    text1: `The most common and widespread species of fox is the rüppell fox
(Vulpes vulpes) with about 47 recognized subspecies.`,
    text2: `The most common and widespread species of fox is the rüppell fox
(Vulpes vulpes) with about 47 recognized subspecies.`,
    image: arcticFoxImg,
    link: 'https://en.wikipedia.org/wiki/Arctic_fox'
  },
  {
    id: 2,
    title: `Bengal fox`,
    text1: `The most common and widespread species of fox is the rüppell fox
(Vulpes vulpes) with about 47 recognized subspecies.`,
    text2: `The most common and widespread species of fox is the rüppell fox
(Vulpes vulpes) with about 47 recognized subspecies.`,
    image: bengalFoxImg,
    link: 'https://en.wikipedia.org/wiki/Bengal_fox'
  },
  {
    id: 3,
    title: `Blanford's fox`,
    text1: `The most common and widespread species of fox is the rüppell fox
(Vulpes vulpes) with about 47 recognized subspecies.`,
    text2: `The most common and widespread species of fox is the rüppell fox
(Vulpes vulpes) with about 47 recognized subspecies.`,
    image: blandfordFoxImg,
    link: 'https://en.wikipedia.org/wiki/Blanford%27s_fox'
  },

  {
    id: 4,
    title: `Cape fox`,
    text1: `The most common and widespread species of fox is the rüppell fox
(Vulpes vulpes) with about 47 recognized subspecies.`,
    text2: `The most common and widespread species of fox is the rüppell fox
(Vulpes vulpes) with about 47 recognized subspecies.`,
    image: capeFoxImg,
    link: 'https://en.wikipedia.org/wiki/Cape_fox'
  },
  {
    id: 5,
    title: `Corsac fox`,
    text1: `The most common and widespread species of fox is the rüppell fox
(Vulpes vulpes) with about 47 recognized subspecies.`,
    text2: `The most common and widespread species of fox is the rüppell fox
(Vulpes vulpes) with about 47 recognized subspecies.`,
    image: corsacFoxImg,
    link: 'https://en.wikipedia.org/wiki/Corsac_fox'
  },
  {
    id: 6,
    title: `Fennec fox`,
    text1: `The most common and widespread species of fox is the rüppell fox
(Vulpes vulpes) with about 47 recognized subspecies.`,
    text2: `The most common and widespread species of fox is the rüppell fox
(Vulpes vulpes) with about 47 recognized subspecies.`,
    image: fennecFoxImg,
    link: 'https://en.wikipedia.org/wiki/Fennec_fox'
  },
  {
    id: 7,
    title: `Red fox`,
    text1: `The most common and widespread species of fox is the rüppell fox
(Vulpes vulpes) with about 47 recognized subspecies.`,
    text2: `The most common and widespread species of fox is the rüppell fox
(Vulpes vulpes) with about 47 recognized subspecies.`,
    image: redFoxImg,
    link: 'https://en.wikipedia.org/wiki/Red_fox'
  },
  {
    id: 8,
    title: `Rüppell's fox`,
    text1: `The most common and widespread species of fox is the rüppell fox
(Vulpes vulpes) with about 47 recognized subspecies.`,
    text2: `The most common and widespread species of fox is the rüppell fox
(Vulpes vulpes) with about 47 recognized subspecies.`,
    image: ruppelFoxImg,
    link: 'https://en.wikipedia.org/wiki/R%C3%BCppell%27s_fox'
  },
  {
    id: 9,
    title: `Tibetan fox`,
    text1: `The most common and widespread species of fox is the rüppell fox
(Vulpes vulpes) with about 47 recognized subspecies.`,
    text2: `The most common and widespread species of fox is the rüppell fox
(Vulpes vulpes) with about 47 recognized subspecies.`,
    image: tibetanFox,
    link: 'https://en.wikipedia.org/wiki/Tibetan_fox'
  },
  {
    id: 10,
    title: `Kit fox`,
    text1: `The most common and widespread species of fox is the rüppell fox
(Vulpes vulpes) with about 47 recognized subspecies.`,
    text2: `The most common and widespread species of fox is the rüppell fox
(Vulpes vulpes) with about 47 recognized subspecies.`,
    image: kitFoxImg,
    link: 'https://en.wikipedia.org/wiki/Kit_fox'
  },
  {
    id: 11,
    title: `Pale fox`,
    text1: `The most common and widespread species of fox is the rüppell fox
(Vulpes vulpes) with about 47 recognized subspecies.`,
    text2: `The most common and widespread species of fox is the rüppell fox
(Vulpes vulpes) with about 47 recognized subspecies.`,
    image: paleFoxImg,
    link: 'https://en.wikipedia.org/wiki/Pale_fox'
  },
  {
    id: 12,
    title: `Swift fox`,
    text1: `The most common and widespread species of fox is the rüppell fox
(Vulpes vulpes) with about 47 recognized subspecies.`,
    text2: `The most common and widespread species of fox is the rüppell fox
(Vulpes vulpes) with about 47 recognized subspecies.`,
    image: swiftFoxImg,
    link: 'https://en.wikipedia.org/wiki/Swift_fox'
  }
];

function SpeciesCarousel() {
  const [openSpeciesIndex, setOpenSpeciesIndex] = useState(0);
  const toggleSpecies = (newSelectedSpeciesIndex) => {
    setOpenSpeciesIndex(
      newSelectedSpeciesIndex === openSpeciesIndex
        ? -1
        : newSelectedSpeciesIndex
    );
  };
  const text1 = speciesData[openSpeciesIndex]?.text1;
  const text2 = speciesData[openSpeciesIndex]?.text2;
  const image = speciesData[openSpeciesIndex]?.image;
  const link = speciesData[openSpeciesIndex]?.link;
  const innerTitle = speciesData[openSpeciesIndex]?.title;

  return (
    <div className="two-columns">
      <div className="row">
        {speciesData.map((species, listIndex) => (
          <article className="species-item" key={species.id}>
            <div className="item-text-full">
              <div className="row-flex">
                <button
                  className="species-btn"
                  onClick={() => {
                    toggleSpecies(listIndex);
                  }}
                >
                  <h5 className="species-item-heading">{species.title}</h5>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="row-2">
        {' '}
        <div className="item-img-wrapper">
          <span className="decoration-species"></span>
          {image && (
            <img src={image} className="species-img" alt="Foxes Species" />
          )}
        </div>
        <div className="item-text-wrapper">
          <span>
            {' '}
            <hr />
          </span>
          <p className="inner-title-species">{innerTitle}</p>
          <div className="species-item-text">
            <p>{text1}</p>
            <p>{text2}</p>
          </div>
          <span>
            {' '}
            <hr />
          </span>
          <div className="species-link-wrapper">
            <a href={link} className="species-link">
              Read more on Wikipedia &#8594;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpeciesCarousel;
