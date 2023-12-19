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
                <div>
                    {data.tariffs && Array.isArray(data.tariffs) && data.tariffs.length > 0 ? (
                        <table>
                            <thead>
                            <tr>
                                <th scope="col">Тариф</th>
                                <th scope="col">Цена</th>
                                {data.tariffs.some(tariff => tariff.weekday) && <th scope="col">Будни</th>}
                                {data.tariffs.some(tariff => tariff.weekend) && (
                                    <th className={styles.open} scope="col">
                                        Выходные
                                    </th>
                                )}
                            </tr>
                            </thead>
                            <tbody>{renderPrices(data)}</tbody>
                        </table>
                    ) : (
                        <p>Данные о ценах отсутствуют</p>
                    )}
                </div>
            );

      default: return null
    };
  }

    const renderPrices = (data) => {
        return data?.tariffs?.map((tariffs) => (
            <tr key={tariffs?.tariff_name}>
                <td data-label="Тариф">{tariffs?.tariff_name}</td>
                <td data-label="Цена">{tariffs?.amount} ₽</td>
                {tariffs?.weekday && <td data-label="Будни">{`${tariffs?.weekday || ''} ${tariffs?.currency || ''}`}</td>}
                {tariffs?.weekend && (
                    <td className={styles.open} data-label="Выходные">{`${tariffs?.weekend || ''} ${tariffs?.currency || ''}`}</td>
                )}
            </tr>
        ));
    };

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