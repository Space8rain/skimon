import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './Main.css';
import Card from '../card/Card';

function Main ({clusters, resorts, currentCluster, onClick}) {

  return (
    <>
      <Header
        onClick={onClick}
        currentCluster={currentCluster}
        clusters={clusters
        } />
      <main>
        <ul className="cards">
          {resorts && resorts.map((resort) => (
            <li key={resort.id}>
              <Link to={`${resort.id}`}>
                <Card resort={resort}/>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  )
};

export default Main