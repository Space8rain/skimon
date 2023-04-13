import React from "react";
import { Link, useParams, useNavigate  } from "react-router-dom";
import './InfoPage.css'

function InfoPage(props) {

  const navigate = useNavigate();

  let { id } = useParams();

  const resort = props.resorts.find(el => el.id === +id)

  if (id > props.resorts.length) {
    navigate('/skimon/not-found', { replace: true, state: {} })
  }

  return resort ?
    (
      <div className="infoPage">
        <Link to={"/skimon"}>
          <button>На главную</button>
        </Link>
        <h1>{resort.name}</h1>
        <h2>url: {resort.url}</h2>
        <p>weekday_price: {resort.weekday_price}</p>
        <p>weekend_price: {resort.weekend_price}</p>
        <p>number_of_tracks: {resort.number_of_tracks}</p>
      </div>
    ) 
    : <h1 style={{color: 'white'}}> Loading</h1> 
}

export default InfoPage