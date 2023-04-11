import React from 'react';
import './Main.css';
import Card from '../card/Card';

function Main ({resorts}) {
  return (
    <main>
      <section className="cards">
        {resorts.map((resort) => (
          <Card key={resort.id} resort={resort} />
        ))}
      </section>
    </main>
  )
};

export default Main