import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';
import Card from '../card/Card';

function Main ({resorts}) {
  return (
    <main>
      <ul className="cards">
        {resorts.map((resort) => (
          <li key={resort.id}>
            <Link to={`${resort.id}`}>
              <Card resort={resort}/>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
};

export default Main