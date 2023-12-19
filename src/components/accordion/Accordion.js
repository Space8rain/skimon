import React from "react";
import styles from './Accordion.module.css';

function Accordion({title, type, props}) {

  const [isActive, setIsActive] = React.useState(false)

  function handleItem() {
    setIsActive(!isActive)
  }

  function changeRender(type, data) {

    switch (type) {
      case 'webcams': 
        return (
          data?.live_streams.map((stream) => (
            <li className={styles.webcam} key={stream.webcam_id}>
              {stream.type === 'code' 
              ? <div dangerouslySetInnerHTML={{__html: stream.data}} ></div>
              : <iframe src={stream.data} title="webcams"/>
            }
            </li>
          ))
        );

        case 'schedule':
            return (
                <ul className={styles.accordion_items}>
                    {/*TODO: переименовать статус или выводить в зависимости от времени на клиенте*/}
                    <p className={`${styles.status} ${data.status ? styles.open : styles.close}`}>
                        {data.status ? 'Сейчас открыто' : 'Сейчас закрыто'}
                    </p>
                    {[1, 2, 3, 4, 5, 6, 7].map((dayNumber) => {
                        const day = data?.working_hours.find((item) => item.day_of_week === String(dayNumber));
                        return (
                            <li
                                className={`${styles.accordion_item} ${styles.schedule}`}
                                key={dayNumber}
                            >
                                <div className={styles.accordion_item_title}>
                                    {dayNumber === 1
                                        ? 'Понедельник'
                                        : dayNumber === 2
                                        ? 'Вторник'
                                        : dayNumber === 3
                                        ? 'Среда'
                                        : dayNumber === 4
                                        ? 'Четверг'
                                        : dayNumber === 5
                                        ? 'Пятница'
                                        : dayNumber === 6
                                        ? 'Суббота'
                                        : dayNumber === 7
                                        ? 'Воскресенье'
                                        : ''}
                                    <p className={`${styles.accordion_item_value} ${!day && styles.close}`}>
                                        {day ? `${day.open_time} - ${day.close_time}` : 'Выходной'}
                                    </p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            );

        case 'prices':
          return (
            <ul className={styles.accordion_items}>
              <li className={styles.accordion_item}>
                <div className={styles.accordion_item_title}>
                  Ски-пасс будни
                  <p className={styles.accordion_item_value}>от {data?.prices?.skipass_weekday ?? '...'} ₽</p>
                </div>
              </li>
              <li className={styles.accordion_item}>
                <div className={styles.accordion_item_title}>
                  Ски-пасс выходные
                  <p className={styles.accordion_item_value}>от {data?.prices?.skipass_weekend ?? '...'} ₽</p>
                </div>
              </li>
              <li className={styles.accordion_item}>
                <div className={styles.accordion_item_title}>
                  Инструктор
                  <p className={styles.accordion_item_value}>от {data?.prices?.instructor ?? '...'} ₽</p>
                </div>
              </li>
            </ul>
          )

      default: return null
    };
  }

  return (
    <div className={styles.accordion}>
      <h2 className={styles.accordion_title} onClick={handleItem}>{title}
      {/* Иконка стрелочки */}
        {isActive 
        ? 
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 13.172L16.95 8.22205L18.364 9.63605L12 16L5.636 9.63605L7.05 8.22205L12 13.172Z" fill="currentColor"/>
          </svg>
        :
          <svg width="48" height="48" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z" fill="currentColor"/>
          </svg>
        }
      </h2>
      {isActive && 
        <div className={styles.accordion_body}>
          {changeRender(type, props)}
        </div>
      }
      <hr />
    </div>
  )
}

export default Accordion