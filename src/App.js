import React from 'react';
import Button from './components/Button';
import Product from './components/Product';
import Tile from './components/Tile';

import bag_1 from './assets/bag_1.png';
import bag_2 from './assets/bag_2.png';
import bag_3 from './assets/bag_3.png';
import bag_4 from './assets/bag_4.png';

import brand from './assets/brand.png';
import ourStory from './assets/our_story.png';

import './App.css';

function App() {
  return (
    <>
      <h1>Handbags & Purses</h1>
      <nav>
        <Button
          label="to the collection"
          log="clicked: to the collection'"
          disabled=""
        />
        <Button
          label="shop all bags"
          log="clicked: shop all bags"
          disabled=""
        />
        <Button
          label="pre-orders"
          log="clicked: pre-orders"
          disabled="disabled"
        />
      </nav>
      <main>
        <Product
          label="Best seller"
          image={bag_1}
          name="The handy bag"
          price="€400,-"
        />
        <Product
          label="Best seller"
          image={bag_2}
          name="The stylish bag"
          price="€250,-"
        />
        <Product
          label="New collection"
          image={bag_3}
          name="The simple bag"
          price="€300,-"
        />
        <Product
          label="New collection"
          image={bag_4}
          name="The trendy bag"
          price="€150,-"
        />
      </main>
      <footer>
        <Tile title="The brand">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
            accumsan lorem.
          </p>
        </Tile>
        <Tile image={brand} title="The brand" />
        <Tile image={ourStory} title="Our story" />
        <Tile title="Our story">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
            accumsan lorem.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
            accumsan lorem.
          </p>
        </Tile>
      </footer>
    </>
  );
}

export default App;
