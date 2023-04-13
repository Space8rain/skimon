import React from "react";
import { Link, useParams } from "react-router-dom";
import './InfoPage.css'

function InfoPage({ resorts }) {

  let { id } = useParams();
  const resort = resorts[id - 1]
  console.log(resort);

  return (
    <div className="infoPage">
      <Link to={"/skimon"}>
        <button>На главную</button>
      </Link>
      <h1>{resort && resort.name}</h1>
      <h2>url: {resort && resort.url}</h2>
      <p>weekday_price: {resort && resort.weekday_price}</p>
      <p>weekend_price: {resort && resort.weekend_price}</p>
      <p>number_of_tracks: {resort && resort.number_of_tracks}</p>
    </div>
  )
}

export default InfoPage