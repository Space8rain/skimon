import React from "react";
import imgPath from '../../images/raccoon.png';
import classes from './EasterEgg.module.css'

function EasterEgg() {
  const eggRef = document.querySelector('.imageRaccoon');

  function handleClick() {
    eggRef.classList.toggle('isShow')
  }

  return (
    <img src={imgPath} className={classes.imageRaccoon} onClick={handleClick} alt="пасхалка енот"/>
  )
}

export default EasterEgg