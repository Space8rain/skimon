import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './Main.css';
import Card from '../card/Card';
import Skeleton from '../skeleton/Skeleton';

function Main ({clusters, resorts, currentCluster, onClick, isLoading}) {

  return (
    <>
      <Header
        onClick={onClick}
        currentCluster={currentCluster}
        clusters={clusters} />
      <main>
        <ul className="cards">
          {isLoading ? (
            <>
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </>
          ) : (
            resorts.map((resort) => (
              <li key={resort.id}>
                <Link to={`${resort.id}`}>
                  <Card resort={resort}/>
                </Link>
              </li>
            ))
          )}
        </ul>
      </main>
      <Footer />
    </>
  )
};

export default Main