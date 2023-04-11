import React from "react";
import './Card.css';
import patchImgPath from '../images/patch_card_image.jpg'

function Card ({resort}) {
  return (
    <article className="card">
      {resort.status && <p class="card_status card_status_open">Открыто</p>}
      {resort.webcams && <div className="cam_icon"></div>}
      <img className="card_image" src={resort.image_url ?? patchImgPath} alt="" />
      <div className="card_banner">
        <h2 className="card_title">{resort.name ?? '...'}</h2>
        <hr />
        <div className="card_info">
          <div className="card_info_stroke">
            <h3 className="card_info_title">Стоимость будни</h3>
            <h3 className="card_info_value">от {resort.weekday_price ?? '...'} ₽</h3>
          </div>

          <div className="card_info_stroke">
            <h3 className="card_info_title">Стоимость выходные</h3>
            <h3 className="card_info_value">от {resort.weekend_price ?? '...'} ₽</h3>
          </div>

          <div className="card_info_stroke">
            <h3 className="card_info_title">Количество трасс</h3>
            <h3 className="card_info_value">{resort.number_of_tracks ?? '...'}</h3>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Card