import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import Developers from '../partials/Developers'
import UX from '../partials/UX'
import Consumers from '../partials/Consumers'
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Newsletter from '../partials/Newsletter';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        <Developers />
        <UX />
        <FeaturesHome />
        <FeaturesBlocks />
        <Consumers />
        <Newsletter />

      </main>

      {/*  Site footer */}
  

    </div>
  );
}

export default Home;