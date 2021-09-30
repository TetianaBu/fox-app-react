import React from 'react';
import ReactDOM from 'react-dom';
import './fonts/montserrat-v15-latin-regular.woff2';
import './css/index.css';
import './css/dividers.css';
import './css/buttons.css';
import 'mapbox-gl/dist/mapbox-gl.css';

import reportWebVitals from './reportWebVitals';

import Header from './Header-main';
import Footer from './Footer';
import FactsMain from './Facts-main';
import HowHelp from './How-help-main';
import SpeciesMain from './Species-main';
import FoxAndPeople from './Fox-people-main'
import MapMain from './Map-main';
import FurBan from './Fur-ban-main';
import DividerIntroToStatistic from './Divider-intro-to-statistic'
import DividerIntroToHowHelp from './Divider-intro-to-how-help'
import DividerAfterHowHelp from './Divider-after-how-help'

ReactDOM.render(
  <React.StrictMode>
    <main className="container-content">
      <Header />
      <FactsMain />
      <SpeciesMain />
      <MapMain />
      <DividerIntroToStatistic />
      <FoxAndPeople />
      <FurBan/>
      <DividerIntroToHowHelp/>
      <HowHelp/>
      <DividerAfterHowHelp />
      <Footer />
      <footer className="author">
        <p className="copyright"> <span>&#169;</span> all about foxes</p>
      </footer>
    </main>
    <aside className="message"><h1>please, use bigger screen</h1></aside>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
