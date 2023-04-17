import React from "react";
import { Link, useParams } from "react-router-dom";
import classes from './InfoPage.module.css';
import Accordion from "../accordion/Accordion";

function InfoPage({resorts}) {

  let { id } = useParams();
  const resort = resorts.find(el => el.id === +id)

  return resort
    ? (
      <div className={classes.infoPage}>
        <header>

        <Link className={classes.btn_back} to={"/skimon"}>
          <svg width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M7.82788 11L13.1919 5.63595L11.7779 4.22195L3.99988 12L11.7779 19.778L13.1919 18.364L7.82788 13L19.9999 13L19.9999 11L7.82788 11Z"/>
          </svg>
            Назад
        </Link>
        <div className={classes.header_title}>
          <h1>{resort.name}</h1>
          <div className={classes.links}>
            <a target="blank" href={resort.url}>
              <p className={classes.btn_link}>Официальный сайт</p>
            </a>
            <a target="blank" href={''}>
              <p className={`${classes.btn_link} ${classes.btn_primary}`}>Проложить маршрут</p>
            </a>
            
          </div>
        </div>

        </header>
        <hr />

        <main>
        <Accordion props={resort}/>
        </main>

      </div>
      ) 
    : null
}

export default InfoPage