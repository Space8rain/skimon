import React from "react";
import { Link } from "react-router-dom";
import classes from './PageNotFound.module.css'

function PageNotFound() {
  return (
    <>
      <div className={classes.page404}>
      <p>Страница не найдена</p>
      <Link to={'/skimon'} replace>&#10095; На гланую &#10094;</Link>
      </div>
      
    </>
  )
}

export default PageNotFound