import React from "react";
import patchImgPath from '../../images/patch_card_image.svg';
import iconArrowRightPath from '../../images/icon_arrow_right.svg';
import styles from './Card.module.css'

function Card ({ resort }) {

  return (
      <article className={styles.card}>
        <p className={`${styles.card_status} ${resort.status ? styles.card_status_open : styles.card_status_close}`}>
          {resort.status ? "Открыто" : "Закрыто"}
        </p>
        {resort.webcams && <div className={styles.cam_icon}></div>}
        <img className={styles.card_image} src={resort.image_url ?? patchImgPath} alt="" />
        <div className={styles.card_banner}>
          <div className={styles.card_title}>
            <h2 className={styles.card_title_text}>{resort.name ?? '...'}</h2>
            <img className={styles.card_title_button} src={iconArrowRightPath} alt="icon arrow right"/>
          </div>
          <hr />
          <div className={styles.card_info}>
            <div className={styles.card_info_stroke}>
              <h3 className={styles.card_info_title}>Стоимость будни</h3>
              <h3 className={styles.card_info_value}>от {resort.weekday_price ?? '...'} ₽</h3>
            </div>

            <div className={styles.card_info_stroke}>
              <h3 className={styles.card_info_title}>Стоимость выходные</h3>
              <h3 className={styles.card_info_value}>от {resort.weekend_price ?? '...'} ₽</h3>
            </div>

            <div className={styles.card_info_stroke}>
              <h3 className={styles.card_info_title}>Количество трасс</h3>
              <h3 className={styles.card_info_value}>{resort.number_of_tracks ?? '...'}</h3>
            </div>
          </div>
        </div>
      </article>
  )
}

export default Card