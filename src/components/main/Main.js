import React from 'react';
import './Main.css';
import Card from '../card/Card';

function Main () {
  return (
    <main>
      <section className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </main>
  )
};

export default Main