import {useEffect, useState, useLayoutEffect} from "react";
import imgPath from '../../images/raccoon.png';
import styles from './EasterEgg.module.css'

function EasterEgg() {
// Стейт активности юзера, по умолчанию активен
  const [isActive, setActive] = useState(true);

// Функция для слушателей сброс таймера
  function resetInactiveTimer () {
    setActive(true);
  }

//Через хук вешаем слушатели, как зависимость указываем стейт активности
  useLayoutEffect(() => {
    document.addEventListener('click', resetInactiveTimer);
    document.addEventListener('mousemove', resetInactiveTimer);
    document.addEventListener('scroll', resetInactiveTimer);
    document.addEventListener('keydown', resetInactiveTimer);  

// Ставим таймер на 30сек, по истчечению меняем стайт активности
    const timer = setTimeout(() => {
      setActive(false);
    }, 1000 * 180);

// Удаляем слушатели и таймаут
    return () => {
      document.removeEventListener('click', resetInactiveTimer);
      document.removeEventListener('mousemove', resetInactiveTimer);
      document.addEventListener('scroll', resetInactiveTimer);
      document.removeEventListener('keydown', resetInactiveTimer);
      clearTimeout(timer)};
  }, [isActive]);


  return (
    <img src={imgPath} className={
      `${styles.imageRaccoon}  ${isActive ? styles.hideRaccoon : ''}`
    } alt="енот"/>
  )
}

export default EasterEgg