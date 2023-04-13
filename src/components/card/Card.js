import React from "react";
import './Card.css';
import patchImgPath from '../../images/patch_card_image.svg'
import iconArrowRightPath from '../../images/icon_arrow_right.svg'

function Card ({ resort }) {

  return (
      <article className="card">
        <p className={`card_status ${resort.status ? 'card_status_open' : 'card_status_close'}`}>
          {resort.status ? "Открыто" : "Закрыто"}
        </p>
        {resort.webcams && <div className="cam_icon"></div>}
        <img className="card_image" src={resort.image_url ?? patchImgPath} alt="" />
        <div className="card_banner">
          <div className="card_title">
            <h2 className="card_title_text">{resort.name ?? '...'}</h2>
            <img className="card_title_button" src={iconArrowRightPath} alt="icon arrow right"/>
          </div>
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