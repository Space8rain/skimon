import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './Main.css';
import Card from '../card/Card';
import Skeleton from '../skeleton/Skeleton';

function Main ({clusters, resorts, currentCluster, onClick, isLoading}) {

  let { cluster_alias } = useParams();

  React.useEffect(() => {
    // console.log(cluster_alias);
  }, [cluster_alias])

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
            resorts
              .map((resort) => (
              <li key={resort.id}>
                <Link to={`${resort.alias}`}>
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