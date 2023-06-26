import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './Main.css';
import Card from '../card/Card';
import Skeleton from '../skeleton/Skeleton';

function Main ({clusters, resorts, currentCluster, onClick, isLoading, setCurrentCluster}) {

  let { cluster_alias } = useParams();

  React.useEffect(() => {
    // console.log(clusters);
    const cluster = clusters.find((cluster) => {
      return cluster.regions.find((region) => region.region_alias === cluster_alias)
    });
    const region = cluster?.regions?.find((region) => region.region_alias === cluster_alias);

    region && setCurrentCluster({
      id: region.region_id,
      name: region.region_name,
      cluster_alias: region.region_alias
  });
  // console.log(currentCluster);
  }, [cluster_alias, clusters]);

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