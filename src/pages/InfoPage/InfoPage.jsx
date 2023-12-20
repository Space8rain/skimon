import React, { useState, useLayoutEffect, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import styles from './InfoPage.module.css';
import Accordion from "../../components/accordion/Accordion";
import Footer from "../../components/footer/Footer";
import Skeleton from "../../components/skeleton/Skeleton";
import { Helmet } from 'react-helmet';
import {mainTitle, shortTitleName} from '../../constants';

function InfoPage({resorts, device, isLoading, currentCluster, clusters, setCurrentCluster, ...props}) {

  const [isOpenMap, setIsOpenMap] = useState(false);
  const navigate = useNavigate();

  function handlerMap() {
    setIsOpenMap(true)
  };

// Функция закрытия карты по условию клика по оверлею или нажатия esc
  function closeMap(evt) {
    if (evt.target.className.includes('overlay')) {
      setIsOpenMap(false)
    }
    if (evt.key === 'Escape') {
      setIsOpenMap(false)
    }
  }

  useLayoutEffect(() => {
    document.addEventListener('keydown', closeMap);
    return () => {
      document.removeEventListener('keydown', closeMap);
    }
  }, [])

// Получаем ид переданный в адрессной строке
  let { resort_alias } = useParams();
  const resort = resorts?.find(el => el.alias === resort_alias);


  let { cluster_alias } = useParams();

  useEffect(() => {
    const cluster = clusters.find((cluster) => {
      return cluster.regions.find((region) => region.region_alias === cluster_alias)
    });
    const region = cluster?.regions?.find((region) => region.region_alias === cluster_alias);

    region && setCurrentCluster({
      id: region.region_id,
      name: region.region_name,
      cluster_alias: region.region_alias
  });
  }, [cluster_alias, clusters]);

  return isLoading
    ? (
      <div className={styles.infoPage}>
        <header>
          <button className={styles.btn_back} onClick={() => navigate(-1)}>
            {/* Стрелка влево */}
            <svg width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M7.82788 11L13.1919 5.63595L11.7779 4.22195L3.99988 12L11.7779 19.778L13.1919 18.364L7.82788 13L19.9999 13L19.9999 11L7.82788 11Z"/>
            </svg>
              Назад
          </button>
          <div className={styles.header_title}>
            <Skeleton />
          </div>
        </header>
        <main>
          <Skeleton />
        </main>
      </div>
      ) : (
        <div className={styles.infoPage}>
        <Helmet>
          <title>{`${resort?.name} | ${shortTitleName}`}</title>
        </Helmet>
        <header>
          <Link className={styles.btn_back} to={`/${currentCluster.cluster_alias}`}>
            {/* Стрелка влево */}
            <svg width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M7.82788 11L13.1919 5.63595L11.7779 4.22195L3.99988 12L11.7779 19.778L13.1919 18.364L7.82788 13L19.9999 13L19.9999 11L7.82788 11Z"/>
            </svg>
              Назад
          </Link>

          <div className={styles.header_title}>
            <h1>{resort?.name}</h1>
            <div className={styles.links}>
              <a className={styles.btn_link} target="blank" href={resort?.url}>Официальный сайт</a>
              {device === 'desktop'
                ? <button onClick={handlerMap} className={`${styles.btn_link} ${styles.btn_primary} map`}>Показать на карте</button>
                : <button className={`${styles.btn_link} ${styles.btn_primary} map`}>
                    <a href={`https://yandex.ru/maps/?pt=${resort?.lon},${resort?.lat}&z=18&l=map`} target="blank">
                      Маршрут в Яндекс.Навигатор
                    </a>
                  </button>
              }
              
            </div>
          </div>
        </header>

        <hr />

        <main>
          {resort?.webcams &&
            <Accordion props={resort} type='webcams' title='Онлайн трансляция'/>
          }

          <Accordion props={resort} type='schedule' title='Режим работы'/>

          {resort?.prices &&
            <Accordion props={resort} type='prices' title='Цены'/>
          }
        </main>

        { isOpenMap &&
          <div onClick={closeMap} className={styles.overlay}>
            <YMaps>
              <Map className={styles.map} defaultState={{
                center: [resort.lat, resort.lon],
                zoom: 8,
                controls: ["zoomControl"],
                }}
                modules={["control.ZoomControl", "control.FullscreenControl"]}>
                <Placemark defaultGeometry={[resort.lat, resort.lon]} />
              </Map>
            </YMaps>
          </div>
        }
        <Footer />
      </div>
      )
}

export default InfoPage