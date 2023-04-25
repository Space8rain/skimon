import React, { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { YMaps, Map, Placemark, RoutePanel } from '@pbe/react-yandex-maps';
import classes from './InfoPage.module.css';
import Accordion from "../accordion/Accordion";
import Footer from "../footer/Footer";

function InfoPage({resorts}) {

  const [isOpenMap, setIsOpenMap] = useState(false);

  function switchMap() {
    setIsOpenMap(!isOpenMap)
  };

  let { id } = useParams();

  const resort = resorts.find(el => el.id === +id);

  return resort
    ? (
      <div className={classes.infoPage}>
        <header>

        <Link className={classes.btn_back} to={"/skimon"}>
          {/* Стрелка влево */}
          <svg width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M7.82788 11L13.1919 5.63595L11.7779 4.22195L3.99988 12L11.7779 19.778L13.1919 18.364L7.82788 13L19.9999 13L19.9999 11L7.82788 11Z"/>
          </svg>
            Назад
        </Link>

        <div className={classes.header_title}>
          <h1>{resort.name}</h1>
          <div className={classes.links}>
            <a className={classes.btn_link} target="blank" href={resort.url}>Официальный сайт</a>
            <button onClick={switchMap} className={`${classes.btn_link} ${classes.btn_primary}`}>Показать на карте</button>
          </div>
          
        </div>
        </header>
        <hr />
        <main>
          {resort.live_streams.length !== 0 && <Accordion props={resort} type='webcams' title='Онлайн трансляция'/>}
          {resort.working_hours.length !== 0 && <Accordion props={resort} type='schedule' title='Режим работы'/>}
        </main>
        <Footer />
        { isOpenMap &&
          <YMaps>
            <Map className={classes.map} defaultState={{
              center: [resort.lat, resort.lon],
              zoom: 8,
              controls: ["zoomControl"],
              }}
              modules={["control.ZoomControl", "control.FullscreenControl"]}>
              <Placemark defaultGeometry={[resort.lat, resort.lon]} />
            </Map>
          </YMaps>
        }
      </div>
      )
      : <Navigate replace to='/404'/>
}

export default InfoPage