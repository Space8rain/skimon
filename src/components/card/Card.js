import React from "react";
import './Card.css';
import patchImgPath from '../images/patch_card_image.jpg'

function Card (props) {
  return (
    <article className="card">
      {props.status && <p class="card_status card_status_open">Открыто</p>}
      <div className="cam_icon"></div>
      <img className="card_image" src={props.image_url ?? patchImgPath} alt="" />
      <div className="card_banner">
        <h2 className="card_title">{props.name ?? '...'}</h2>
        <hr />
        <div className="card_info">
          <div className="card_info_stroke">
            <h3 className="card_info_title">Стоимость будни</h3>
            <h3 className="card_info_value">от {props.weekday_price ?? '...'} ₽</h3>
          </div>

          <div className="card_info_stroke">
            <h3 className="card_info_title">Стоимость выходные</h3>
            <h3 className="card_info_value">от {props.weekend_price ?? '...'} ₽</h3>
          </div>

          <div className="card_info_stroke">
            <h3 className="card_info_title">Количество трасс</h3>
            <h3 className="card_info_value">{props.number_of_tracks ?? '...'}</h3>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Card